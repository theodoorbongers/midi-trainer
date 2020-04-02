import React from 'react';
import { useNewTrainerController } from './useNewTrainerController';
import styles from './App.module.css';
import { ControllerContext } from './controllerContext';
import { MainPanel } from './panels/MainPanel';
import { KeyboardPanel } from './panels/KeyboardPanel';
import { StatusPanel } from './panels/StatusPanel';
import { ConsolePanel } from './panels/ConsolePanel';
import { useObservable } from './useObservable';

const App = () => {
  const controller = useNewTrainerController();
  const consoleVisible = useObservable(controller?.consoleVisible$);

  return controller && (
    <ControllerContext.Provider value={controller}>
      <div className={styles.app}>
        <StatusPanel className={styles.status} />
        <div className={styles.middleRow}>
          <MainPanel className={styles.main} />
          { consoleVisible && <ConsolePanel className={styles.console} /> }
        </div>
        <KeyboardPanel className={styles.keyboard} />
      </div>
    </ControllerContext.Provider>
  );
};

export default App;
