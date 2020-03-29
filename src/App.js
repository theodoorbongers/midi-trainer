import React from 'react';
import { useTrainerController } from './useTrainerController';
import { useObservable } from './useObservable';
import { Keyboard } from './Keyboard';
import './App.css';

const App = () => {
  const controller = useTrainerController();

  return controller && (
    <MainPanel controller={controller} />
  );
};

const MainPanel = ({ controller }) => {
  const keyboardKeyState = useObservable(controller.keyboardKeyState$);
  const exercise = useObservable(controller.exercise$);
  const lastSolution = useObservable(controller.solutions$);
  const isWakeLockActive = useObservable(controller.wakeLockActive$);

  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 160 90"
      preserveAspectRatio="xMidYMid meet"
      onClick={controller.onToggleWakeLock}
      style={{
        backgroundColor: isWakeLockActive ? 'hsl(120, 5%, 30%)' : 'hsl(120, 5%, 60%)',
      }}>
      <filter id="dropShadow" height="130%">
        <feGaussianBlur in="SourceAlpha" stdDeviation="1"/>
        <feOffset dx="1" dy="1" result="offsetblur"/>
        <feComponentTransfer>
          <feFuncA type="linear" slope="0.5"/>
        </feComponentTransfer>
        <feMerge> 
          <feMergeNode/>
          <feMergeNode in="SourceGraphic"/>
        </feMerge>
      </filter>
      <rect x="5%" y="5%" width="90%" height="90%" fill="white" stroke="black" strokeWidth="0.1" style={{ filter: 'url(#dropShadow)' }} />
      <svg x="6%" y="6%" width="88%" height="88%">
        <Keyboard keyState={keyboardKeyState} x="0%" y="0%" width="100%" />
        <text x="50%" y="50%" dominantBaseline="central" textAnchor="middle" style={{ fontSize: 25 }}>{exercise?.displayName}</text>
        { lastSolution !== null && <rect x="0" y="95%" width="100%" height="5%" fill={lastSolution ? 'green' : 'red'} /> }
      </svg>
    </svg>
  );
}

export default App;
