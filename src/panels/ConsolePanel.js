import React, { useContext } from 'react';
import classNames from 'classnames';
import { Panel } from '../uiComponents/Panel';
import { ControllerContext } from '../controllerContext';
import { useObservable } from '../useObservable';
import styles from './ConsolePanel.module.css';
import moment from 'moment';

export const ConsolePanel = ({ className }) => {
  const controller = useContext(ControllerContext);
  const consoleMessages = useObservable(controller.allConsoleMessages$) || [];

  return (
    <Panel className={classNames(className, styles.consolePanel)}>
      <pre>
        { consoleMessages.map(({ value, timestamp }, index) => <React.Fragment key={index}>{`${moment(timestamp).format('LTS')}: ${value}`}<br /></React.Fragment>) }
      </pre>
    </Panel>
  );
};
