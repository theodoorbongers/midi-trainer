import React from 'react';
import classNames from 'classnames';
import { useNewTrainerController } from './useNewTrainerController';
import { useObservable } from './useObservable';
import styles from './App.module.css';
import { ControllerContext } from './controllerContext';
import { MainPanel } from './panels/MainPanel';
import { KeyboardPanel } from './panels/KeyboardPanel';
import { StatusPanel } from './panels/StatusPanel';

const App = () => {
  const controller = useNewTrainerController();
  const isWakeLockActive = useObservable(controller?.wakeLockActive$);

  return controller && (
    <ControllerContext.Provider value={controller}>
      <div className={classNames(styles.app, { [styles.wakeLocked]: isWakeLockActive })}>
        <StatusPanel className={styles.status} />
        <div className={styles.middleRow}>
          <MainPanel className={styles.main} />
        </div>
        <KeyboardPanel className={styles.keyboard} />
      </div>
    </ControllerContext.Provider>
  );
};

export default App;
