import { midiInputs$ } from './midi/midi$';
import { parse } from './midi/parse';
import { pressedKeys } from './midi/pressedKeys';
import { defer, of, merge, BehaviorSubject, from, Subscriber } from 'rxjs';
import { share, repeat, publish, mergeMap, scan, map, publishBehavior, timestamp, ignoreElements, flatMap } from 'rxjs/operators';
import NoSleep from 'nosleep.js';
import { createExercise } from './exercises/chords';
import { OrderedSet, List } from 'immutable';

const noSleep = new NoSleep();

export const create = () => {
  const subscriptions = new Subscriber();

  const wakeLockSubject = new BehaviorSubject(false);
  subscriptions.add(
    wakeLockSubject.subscribe((shouldBeLocked) => {
      if (shouldBeLocked) {
        noSleep.enable();
      } else {
        noSleep.disable();
      }
    })
  );

  const consoleVisibleSubject = new BehaviorSubject(false);

  const allMidiInputNames$ = midiInputs$.pipe(
    mergeMap(input => input.connected$.pipe(map(connected => ({ input, connected })))),
    scan((acc, { input, connected }) => connected ? acc.add(input.name) : acc.delete(input.name), OrderedSet()),
    map(orderedSet => orderedSet.toArray()),
  );
  const midiMessages$ = midiInputs$.pipe(mergeMap(input => input.messages$), share());
  const parsedMessages$ = midiMessages$.pipe(parse());
  const consoleMessages$ = parsedMessages$.pipe(timestamp());
  const allConsoleMessages$ = consoleMessages$.pipe(scan((acc, message) => acc.push(message), List()), publishBehavior(List));
  allConsoleMessages$.connect();

  const pressedKeys$ = parsedMessages$.pipe(pressedKeys(), publishBehavior(OrderedSet()));
  subscriptions.add(pressedKeys$.connect());

  const session = createSession(pressedKeys$);

  return {
    allMidiInputNames$,
    keyboardKeyState$: pressedKeys$,
    exercises$: session.exercises$,
    setWakeLock: active => wakeLockSubject.next(active),
    wakeLockActive$: from(wakeLockSubject),
    setConsoleVisible: visible => consoleVisibleSubject.next(visible),
    consoleVisible$: from(consoleVisibleSubject),
    allConsoleMessages$,
    destroy: () => subscriptions.unsubscribe(),
  };
};

const createSession = (pressedKeys$) => {
  const exercises$ = defer(() => of(createExercise({ pressedKeys$ }))).pipe(
    publish(exercise$ => merge(
      exercise$,
      exercise$.pipe(flatMap(exercise => exercise.result$), ignoreElements()),
    )),
    repeat(),
    share(),
  );

  return {
    exercises$,
  };
};
