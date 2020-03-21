import { useEffect, useRef } from 'react';

const getNewColor = (() => {
  let colorsIssued = 0;

  return () => {
    const newColor = `hsl(${120 + (colorsIssued * 360 * (3 / 7))}, 100%, 40%)`;
    colorsIssued += 1;
    return newColor;
  };
})();

/**
 * This test helper hook logs changes to values to the console. For usage, a new color is picked, so it is easy to correlate changes
 * to the same value in the console.
 * @param {*} value The value being observed
 * @param {string} description A description string that will be written to the console, beside the value itself
 * @param {string} [style] An optional CSS string to override the default styling, which automatically assigns colors for every usage
 */
export const useChangeLogger = (value, description, style) => {
  const styleRef = useRef();
  useEffect(() => {
    styleRef.current = style || `color: ${getNewColor()}; background-color: #EEE; font-weight: bold;`;
  }, [style]);

  useEffect(() => {
    console.log(`%c${description}`, styleRef.current, value); // eslint-disable-line no-console
  }, [description, style, value]);
};
