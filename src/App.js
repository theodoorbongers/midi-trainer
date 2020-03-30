import React from 'react';
import { useNewTrainerController } from './useNewTrainerController';
import styles from './App.module.css';
import { ControllerContext } from './controllerContext';
import { MainPanel } from './panels/MainPanel';
import { KeyboardPanel } from './panels/KeyboardPanel';
import { StatusPanel } from './panels/StatusPanel';

const App = () => {
  const controller = useNewTrainerController();

  return controller && (
    <ControllerContext.Provider value={controller}>
      <div className={styles.app}>
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
