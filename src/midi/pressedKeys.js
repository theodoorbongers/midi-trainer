import { scan } from 'rxjs/operators';
import { OrderedSet } from 'immutable';
import { noteOnMIDIMessage } from './messages/noteOnMIDIMessage';
import { noteOffMIDIMessage } from './messages/noteOffMIDIMessage';
import { onlyMessageTypes } from './onlyMessageTypes';

export const pressedKeys = () => observable$ => observable$.pipe(
  onlyMessageTypes(noteOnMIDIMessage.type, noteOffMIDIMessage.type),  
  scan(
    (acc, message) => (message.type === noteOnMIDIMessage.type && message.velocity
      ? acc.add(message.key)
      : acc.delete(message.key)
    ).sort(),
    OrderedSet(),
  ),
);