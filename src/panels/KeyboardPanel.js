import React, { useContext } from 'react';
import { ControllerContext } from '../controllerContext';
import { useObservable } from '../useObservable';
import { Keyboard } from '../Keyboard';
import { Panel } from '../uiComponents/Panel';

export const KeyboardPanel = ({ className }) => {
  const controller = useContext(ControllerContext);
  const keyboardKeyState = useObservable(controller.keyboardKeyState$);

  return (
    <Panel className={className}>
      <Keyboard keyState={keyboardKeyState} />
    </Panel>
  )
};
