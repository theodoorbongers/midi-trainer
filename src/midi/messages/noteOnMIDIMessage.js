import { channel, key, velocity } from './properties';
import { createMessageDefinition } from './createMessageDefinition';

export const noteOnMIDIMessage = createMessageDefinition({
  displayName: 'Note On',
  properties: { channel, key, velocity },
  matcher: event => (event.data[0] & 0b11110000) === 0b10010000,
});
