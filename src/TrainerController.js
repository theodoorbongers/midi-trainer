import { midi$ } from './midi/midi$';
import { parse } from './midi/parse';
import { pressedKeys } from './midi/pressedKeys';
import { defer, of, merge, BehaviorSubject, from } from 'rxjs';
import { first, switchMap, share, repeat, publish } from 'rxjs/operators';
import NoSleep from 'nosleep.js';
import { packType, unpackOfType } from './typedPackets';
import { createExercise } from './exercises/chords';
import { toggleBehaviorSubject } from './toggleBehaviorSubject';

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

  const parsedMessages$ = midi$.pipe(parse());
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
    keyboardKeyState$,
    exercise$: exercisesAndResults$.pipe(unpackOfType(types.EXERCISE)),
    solutions$: exercisesAndResults$.pipe(unpackOfType(types.RESULT)),
    onToggleWakeLock: () => toggleBehaviorSubject(wakeLockSubject),
    wakeLockActive$: from(wakeLockSubject),
  };
};
