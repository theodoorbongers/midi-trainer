import React, { useContext } from 'react';
import { useObservable } from '../useObservable';
import { ControllerContext } from '../controllerContext';
import { Panel } from './Panel';

export const MainPanel = ({ className }) => {
  const controller = useContext(ControllerContext);
  const exercise = useObservable(controller.exercise$);
  const lastSolution = useObservable(controller.solutions$);

  return (
    <Panel className={className}>
      <svg
        viewBox="0 0 160 45"
        preserveAspectRatio="xMidYMid meet"
        onClick={controller.onToggleWakeLock}
      >
        <svg x="6%" y="6%" width="88%" height="88%">
          <text x="50%" y="50%" dominantBaseline="central" textAnchor="middle" style={{ fontSize: 25 }}>{exercise?.displayName}</text>
          { lastSolution !== null && <rect x="0" y="95%" width="100%" height="5%" fill={lastSolution ? 'green' : 'red'} /> }
        </svg>
      </svg>
    </Panel>
  );
}
