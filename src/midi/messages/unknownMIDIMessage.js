import { status, data1, data2 } from './properties';
import { createMessageDefinition } from './createMessageDefinition';

export const unknownMIDIMessage = createMessageDefinition({
  displayName: 'Unknown',
  properties: { status, data1, data2 },
  matcher: () => true,
});
