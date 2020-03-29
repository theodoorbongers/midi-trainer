import { fromEvent, from, defer, merge } from 'rxjs';
import { share, map, switchMap, filter, distinct, distinctUntilChanged, publishBehavior, refCount } from 'rxjs/operators';

export const midiInputs$ = defer(() => navigator.requestMIDIAccess()).pipe(
  switchMap(midiAccess => merge(
    from(midiAccess.inputs.values()),
    fromEvent(midiAccess, 'statechange').pipe(
      map(e => e.port),
      filter(port => port.type === 'input' && port.state === 'connected'),
    ),
  ).pipe(
    distinct(input => input.id),
    map(input => ({
      name: input.name,
      connected$: fromEvent(midiAccess, 'statechange').pipe(
        filter(e => e.port.id === input.id),
        map(e => e.port.state === 'connected'),
        publishBehavior(true),
        refCount(),
        distinctUntilChanged(),
      ),
      messages$: createMessagesObservable(input),
    })),
  )),
  share(),
);

const createMessagesObservable = input => fromEvent(input, 'midimessage').pipe(
  share(),
);
