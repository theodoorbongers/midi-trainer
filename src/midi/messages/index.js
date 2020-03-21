import { noteOffMIDIMessage } from './noteOffMIDIMessage';
import { noteOnMIDIMessage } from './noteOnMIDIMessage';
import { unknownMIDIMessage } from './unknownMIDIMessage';
import { controlChangeMIDIMessage } from './controlChangeMIDIMessage';
import { programChangeMIDIMessage } from './programChangeMIDIMessage';
import { pitchBendChangeMIDIMessage } from './pitchBendChangeMIDIMessage';

export default [
  noteOffMIDIMessage,
  noteOnMIDIMessage,
  controlChangeMIDIMessage,
  programChangeMIDIMessage,
  pitchBendChangeMIDIMessage,
  unknownMIDIMessage,
];
