import { midiInputs$ } from './midi/midi$';
import { parse } from './midi/parse';
import { pressedKeys } from './midi/pressedKeys';
import { defer, of, merge, BehaviorSubject, from, Subject, Subscriber } from 'rxjs';
import { switchMap, share, repeat, publish, mergeMap, scan, map, publishBehavior, timestamp } from 'rxjs/operators';
import NoSleep from 'nosleep.js';
import { packType, unpackOfType } from './typedPackets';
import { createExercise } from './exercises/chords';
import { OrderedSet, List } from 'immutable';

const types = {
  EXERCISE: Symbol('EXERCISE'),
  RESULT: Symbol('RESULT'),
};

const noSleep = new NoSleep();

export const create = () => {
  const subscriptions = new Subscriber();

  const consoleSubject$ = new Subject();
  const consoleMessages$ = consoleSubject$.pipe(timestamp());
  const allConsoleMessages$ = consoleMessages$.pipe(scan((acc, message) => acc.push(message), List()), publishBehavior(List));
  allConsoleMessages$.connect();

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
  const pressedKeys$ = parsedMessages$.pipe(pressedKeys(), publishBehavior(OrderedSet()));
  subscriptions.add(pressedKeys$.connect());

  const session = createSession(pressedKeys$);

  return {
    allMidiInputNames$,
    keyboardKeyState$: pressedKeys$,
    exercise$: session.exercisesAndResults$.pipe(unpackOfType(types.EXERCISE)),
    solutions$: session.exercisesAndResults$.pipe(unpackOfType(types.RESULT)),
    setWakeLock: active => wakeLockSubject.next(active),
    wakeLockActive$: from(wakeLockSubject),
    setConsoleVisible: visible => consoleVisibleSubject.next(visible),
    consoleVisible$: from(consoleVisibleSubject),
    allConsoleMessages$,
    destroy: () => subscriptions.unsubscribe(),
  };
};

const createSession = (pressedKeys$) => {
  const singleExercise$ = defer(() => of(createExercise({ pressedKeys$ })));
  const exercisesAndResults$ = singleExercise$.pipe(
    publish(
      exercise$ => merge(
        exercise$.pipe(packType(types.EXERCISE)),
        exercise$.pipe(
          switchMap(exercise => exercise.result$),
          packType(types.RESULT),
        )
      )
    ),
    repeat(),
    share(),
  );

  return {
    exercisesAndResults$,
  };
};
