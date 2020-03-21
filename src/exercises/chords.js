import random from 'lodash.random';
import { List } from 'immutable';
import { first, flatMap } from 'rxjs/operators';
import { pressedKeys } from '../midi/pressedKeys';
import * as i from '../intervals';
import sample from 'lodash.sample';

const NOTE_NAMES = ['C', 'D♭', 'D', 'E♭', 'E', 'F', 'F♯', 'G', 'A♭', 'A', 'B♭', 'B'];

const CHORD_TYPES = [
  [note => `${note}m9 (A)`, [i.MINOR_3RD, i.PERFECT_5TH, i.MINOR_7TH, i.MAJOR_9TH]],
  [note => `${note}m9 (B)`, [i.MINOR_7TH, i.MAJOR_9TH, i.OCTAVE + i.MINOR_3RD, i.OCTAVE + i.PERFECT_5TH]],
  [note => `${note}maj9 (A)`, [i.MAJOR_3RD, i.PERFECT_5TH, i.MAJOR_7TH, i.MAJOR_9TH]],
  [note => `${note}maj9 (B)`, [i.MAJOR_7TH, i.MAJOR_9TH, i.OCTAVE + i.MAJOR_3RD, i.OCTAVE + i.PERFECT_5TH]],
  [note => `${note}13 (A)`, [i.MAJOR_3RD, i.MAJOR_13TH - i.OCTAVE, i.MINOR_7TH, i.MAJOR_9TH]],
  [note => `${note}13 (B)`, [i.MINOR_7TH, i.MAJOR_9TH, i.OCTAVE + i.MAJOR_3RD, i.MAJOR_13TH]],
];

export const createExercise = () => {
  const rootNote = random(0, 11);
  const [getDisplayName, intervals] = sample(CHORD_TYPES);
  const chordIntervalsFromRoot = List(intervals).sort();
  const chordNotes = getChordNotes(rootNote, chordIntervalsFromRoot);
  
  const getResult = parsedMessages$ => parsedMessages$.pipe(
    pressedKeys(),
    flatMap(
      keys => {
        if (!keys.size) {
          return [];
        }
        if (!chordNotes.some((chordNote, index) =>
          (chordNote % 12 === keys.first() % 12) &&
          getChordNotesRelativeToFirstNote(chordNotes.slice(index)).isSuperset(getChordNotesRelativeToFirstNote(keys))
        )) {
          return [false];
        }

        if (chordNotes.size === keys.size) {
          return [true];
        }

        return [];
      }
    ),
    first(),
  );

  return {
    displayName: getDisplayName(NOTE_NAMES[rootNote]),
    getResult,
  }
};

const getChordNotes = (rootNote, intervals) => intervals.map(interval => rootNote + interval);

const getChordNotesRelativeToFirstNote = chord => chord.map(chordNote => chordNote - chord.first());
