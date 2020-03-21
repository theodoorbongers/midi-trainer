import { useEffect, useState } from 'react';
import * as TrainerController from './TrainerController';

export const useTrainerController = () => {
  const [controller, setController] = useState(null);

  useEffect(() => {
    const createdController = TrainerController.create();
    setController(createdController);
  }, []);

  return controller;
};
