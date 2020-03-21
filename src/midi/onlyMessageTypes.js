import { filter } from 'rxjs/operators';

export const onlyMessageTypes = (...messageTypes) => filter(message => messageTypes.includes(message.type));