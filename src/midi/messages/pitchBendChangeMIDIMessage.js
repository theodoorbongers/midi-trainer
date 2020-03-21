import { channel, pitchBendValue } from './properties';
import { createMessageDefinition } from './createMessageDefinition';

export const pitchBendChangeMIDIMessage = createMessageDefinition({
  displayName: 'Pitch Bend Change',
  properties: { channel, value: pitchBendValue },
  matcher: event => (event.data[0] & 0b11110000) === 0b11100000,
});
