import { midi$ } from './midi/midi$';
import { parse } from './midi/parse';
import { pressedKeys } from './midi/pressedKeys';
import { defer, of, merge } from 'rxjs';
import { first, switchMap, share, repeat, publish } from 'rxjs/operators';
import { packType, unpackOfType } from './typedPackets';
import { createExercise } from './exercises/chords';

const types = {
  EXERCISE: Symbol('EXERCISE'),
  RESULT: Symbol('RESULT'),
};

export const create = () => {
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
  };
};

// const log = label => tap(v => { console.log(label, v); });