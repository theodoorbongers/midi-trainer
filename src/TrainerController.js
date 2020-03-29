import { midiInputs$ } from './midi/midi$';
import { parse } from './midi/parse';
import { pressedKeys } from './midi/pressedKeys';
import { defer, of, merge, BehaviorSubject, from } from 'rxjs';
import { first, switchMap, share, repeat, publish, mergeMap, scan, map } from 'rxjs/operators';
import NoSleep from 'nosleep.js';
import { packType, unpackOfType } from './typedPackets';
import { createExercise } from './exercises/chords';
import { toggleBehaviorSubject } from './toggleBehaviorSubject';
import { OrderedSet } from 'immutable';

const types = {
  EXERCISE: Symbol('EXERCISE'),
  RESULT: Symbol('RESULT'),
};

const noSleep = new NoSleep();

export const create = () => {
  const wakeLockSubject = new BehaviorSubject(false);
  wakeLockSubject.subscribe((shouldBeLocked) => {
    if (shouldBeLocked) {
      noSleep.enable();
    } else {
      noSleep.disable();
    }
  })

  const allMidiInputNames$ = midiInputs$.pipe(
    mergeMap(input => input.connected$.pipe(map(connected => ({ input, connected })))),
    scan((acc, { input, connected }) => connected ? acc.add(input.name) : acc.delete(input.name), OrderedSet()),
    map(orderedSet => orderedSet.toArray()),
  );
  const midiMessages$ = midiInputs$.pipe(mergeMap(input => input.messages$), share());
  const parsedMessages$ = midiMessages$.pipe(parse());
  const keyboardKeyState$ = parsedMessages$.pipe(pressedKeys());

  const singleExercise$ = defer(() => of(createExercise()));
  const exercisesAndResults$ = singleExercise$.pipe(
    publish(
      exercise$ => merge(
        exercise$.pipe(packType(types.EXERCISE)),
        exercise$.pipe(
          switchMap(exercise => exercise.getResult(parsedMessages$)),
          first(),
          packType(types.RESULT),
        )
      )
    ),
    repeat(),
    share(),
  );

  return {
    allMidiInputNames$,
    keyboardKeyState$,
    exercise$: exercisesAndResults$.pipe(unpackOfType(types.EXERCISE)),
    solutions$: exercisesAndResults$.pipe(unpackOfType(types.RESULT)),
    onToggleWakeLock: () => toggleBehaviorSubject(wakeLockSubject),
    wakeLockActive$: from(wakeLockSubject),
  };
};
