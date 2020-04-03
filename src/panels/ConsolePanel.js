import React, { useContext, useRef, useLayoutEffect } from 'react';
import classNames from 'classnames';
import { Panel } from '../uiComponents/Panel';
import { ControllerContext } from '../controllerContext';
import { useObservable } from '../useObservable';
import styles from './ConsolePanel.module.css';
import moment from 'moment';

export const ConsolePanel = ({ className }) => {
  const scrollBottomRef = useRef();
  const controller = useContext(ControllerContext);
  const consoleMessages = useObservable(controller.allConsoleMessages$) || [];
  useLayoutEffect(() => {
    scrollBottomRef.current.scrollIntoView();
  }, [consoleMessages]);

  return (
    <Panel className={classNames(className, styles.consolePanel)}>
      <pre>
        { consoleMessages.map(({ value, timestamp }, index) => <React.Fragment key={index}>{`${moment(timestamp).format('LTS')}: ${value}`}{'\n'}</React.Fragment>) }
        <div ref={scrollBottomRef} />
      </pre>
    </Panel>
  );
};
