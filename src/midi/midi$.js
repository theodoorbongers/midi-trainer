import { Observable } from 'rxjs';
import { share } from 'rxjs/operators';

export const midi$ = Observable.create((subscriber) => {
  
  const onMIDISuccess = midiAccess => {
    if (midiAccess.inputs.size === 0) {
      subscriber.error('No MIDI inputs available');
      return;
    }

    for(let [, input] of midiAccess.inputs) {
      input.onmidimessage = event => {
        subscriber.next(event);
      }
    }
  };

  navigator.requestMIDIAccess().then(onMIDISuccess, subscriber.error);

}).pipe(share());