import { channel, controller, value } from './properties';
import { createMessageDefinition } from './createMessageDefinition';

export const controlChangeMIDIMessage = createMessageDefinition({
  displayName: 'Control Change',
  properties: { channel, controller, value },
  matcher: event => (event.data[0] & 0b11110000) === 0b10110000,
});
