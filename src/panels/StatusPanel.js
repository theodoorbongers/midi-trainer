import React, { useContext } from 'react';
import classNames from 'classnames';
import { Panel } from '../uiComponents/Panel';
import { ControllerContext } from '../controllerContext';
import { useObservable } from '../useObservable';
import { Switch } from '../uiComponents/Switch';
import styles from './StatusPanel.module.css';

export const StatusPanel = ({ className }) => {
  const controller = useContext(ControllerContext);
  const midiInputNames = useObservable(controller.allMidiInputNames$);
  const wakeLockActive = useObservable(controller.wakeLockActive$);
  const consoleVisible = useObservable(controller.consoleVisible$);

  return (
    <Panel className={classNames(className, styles.statusPanel)}>
      <div className={styles.midiInputs}>Connected MIDI input(s): { midiInputNames?.length ? midiInputNames.join(', ') : <i>none</i> }</div>
      <div className={styles.toggle}><Switch label="show console" value={!!consoleVisible} onChange={controller.setConsoleVisible} /></div>
      <div className={styles.toggle}><Switch label="prevent sleep mode" value={!!wakeLockActive} onChange={controller.setWakeLock} /></div>
    </Panel>
  );
};
