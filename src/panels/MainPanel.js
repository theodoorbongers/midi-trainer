import React, { useContext } from 'react';
import { useObservable } from '../useObservable';
import { ControllerContext } from '../controllerContext';
import { Panel } from '../uiComponents/Panel';

export const MainPanel = ({ className }) => {
  const controller = useContext(ControllerContext) ;
  const exercise = useObservable(controller.exercises$);
  const lastSolution = useObservable(exercise?.result$);

  return (
    <Panel className={className}>
      <svg
        viewBox="0 0 160 30"
        width="100%"
        height="100%"
        preserveAspectRatio="xMidYMid meet"
      >
        <text x="50%" y="50%" dominantBaseline="central" textAnchor="middle" style={{ fontSize: 25 }}>{exercise?.displayName}</text>
        { lastSolution !== null && <rect x="0" y="95%" width="100%" height="5%" fill={lastSolution ? 'green' : 'red'} /> }
      </svg>
    </Panel>
  );
}
