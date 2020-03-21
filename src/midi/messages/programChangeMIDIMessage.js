import { channel, patch } from './properties';
import { createMessageDefinition } from './createMessageDefinition';

export const programChangeMIDIMessage = createMessageDefinition({
  displayName: 'Program Change',
  properties: { channel, patch },
  matcher: event => (event.data[0] & 0b11110000) === 0b11000000,
});
