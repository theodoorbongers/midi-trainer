import { useState, useEffect } from 'react';

export const useObservable = (observable$) => {
  const [lastValue, setLastValue] = useState(null);
  useEffect(() => {
    if (observable$) {
      const subscription = observable$.subscribe(setLastValue);
      return () => subscription.unsubscribe();
    } 
  }, [observable$]);

  return lastValue;
};
