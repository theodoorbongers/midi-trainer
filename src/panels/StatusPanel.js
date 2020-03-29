import React, { useContext } from 'react';
import { Panel } from './Panel';
import { ControllerContext } from '../controllerContext';
import { useObservable } from '../useObservable';

export const StatusPanel = ({ className }) => {
  const controller = useContext(ControllerContext);
  const midiInputNames = useObservable(controller.allMidiInputNames$);
  return (
    <Panel className={className}>
      <div>Connected MIDI input(s): { midiInputNames?.length ? midiInputNames.join(', ') : <i>none</i> }</div>
    </Panel>
  );
};
