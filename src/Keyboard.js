import React from 'react';
import range from 'lodash.range';
import sortBy from 'lodash.sortby';

const WHITE_KEY_WIDTH = 9.0444307;
const WHITE_KEY_HEIGHT = 56.66114;
const BLACK_KEY_WIDTH = 5.575;
const OCTAVE_WIDTH = 7 * WHITE_KEY_WIDTH;

const KEY_X_OFFSETS = [
  0 * WHITE_KEY_WIDTH,
  5.414,
  1 * WHITE_KEY_WIDTH,
  15.837,
  2 * WHITE_KEY_WIDTH,
  3 * WHITE_KEY_WIDTH,
  31.859,
  4 * WHITE_KEY_WIDTH,
  42.282,
  5 * WHITE_KEY_WIDTH,
  52.705,
  6 * WHITE_KEY_WIDTH,
];

const PRESS_MASK_BLEND_MODE = 'hard-light';
const PRESS_MASK_COLOR = 'green';

export const Keyboard = ({ lowestKey = 21, highestKey = 108, keyState, x, y, width, height }) => (
  <svg version="1.1" x={x} y={y} width={width} height={height} viewBox={getViewBox(lowestKey, highestKey)} preserveAspectRatio="xMidYMin meet">
    <defs id="defs2">
      <linearGradient id="linearGradient3981">
        <stop id="stop3977" style={{ "stopColor": "#f2f2f2", "stopOpacity": "1" }} offset="0" />
        <stop id="stop3979" style={{ "stopColor": "#cccccc", "stopOpacity": "1" }} offset="1" />
      </linearGradient>
      <linearGradient id="linearGradient4915" gradientUnits="userSpaceOnUse" x1="107.723" x2="107.723" y1="131.52364" y2="129.08444" xlinkHref="#linearGradient3981" />
      <clipPath id="clipPath3812">
        <rect height="36.348648" id="rect3814" style={{ "display": "inline", "opacity": "0.17105264", "strokeWidth": "0.26458332" }} width="5.57514" x="107.723" y="125.41296" />
      </clipPath>
      <clipPath id="clipPath3973">
        <rect height="56.66114" id="rect3975" style={{ "display": "inline", "fill": "#808000", "strokeWidth": "0.26458332" }} width="9.0444307" x="102.62053" y="125.41296" />
      </clipPath>
      <g id="whiteKey" transform="translate(-102.62054,-125.41296)">
        <rect height="56.66114" id="rect3912-3-8" style={{ "display": "inline", "fill": "#1a1a1a", "strokeWidth": "0.26458332" }} width="9.0444307" x="102.62054" y="125.41296" />
        <rect height="56.472153" id="rect3912" style={{ "display": "inline", "fill": "#666666", "strokeWidth": "0.26075235" }} width="8.8138103" x="102.73585" y="125.41296" />
        <rect height="58.599155" id="rect3912-2" style={{ "display": "inline", "fill": "url(#linearGradient4915)", "fillOpacity": "1", "strokeWidth": "0.26452145" }} width="8.7103424" clipPath="url(#clipPath3973)" rx="0.2" ry="0.2" transform="matrix(0.96598043,0,0,0.99499097,3.6446156,0.62819669)" x="102.78758" y="123.2748" />
      </g>
      <rect height="56.66114" id="whiteKeyPressMask" style={{ "display": "inline", "fill": PRESS_MASK_COLOR, "mixBlendMode": PRESS_MASK_BLEND_MODE, "strokeWidth": "0.26458332" }} width="9.0444307" x="0" y="0" />
      <linearGradient id="linearGradient3883">
        <stop id="stop3879" style={{ "stopColor": "#000000", "stopOpacity": "1" }} offset="0" />
        <stop id="stop3881" style={{ "stopColor": "#1a1a1a", "stopOpacity": "1" }} offset="1" />
      </linearGradient>
      <linearGradient id="linearGradient3837">
        <stop id="stop3833" style={{ "stopColor": "#7d7d7d", "stopOpacity": "1" }} offset="0" />
        <stop id="stop3835" style={{ "stopColor": "#b2b2b2", "stopOpacity": "1" }} offset="1" />
      </linearGradient>
      <linearGradient id="linearGradient5265" gradientUnits="userSpaceOnUse" x1="110.46354" x2="110.46354" y1="145.41296" y2="153.55803" xlinkHref="#linearGradient3837" />
      <linearGradient id="linearGradient5267" gradientUnits="userSpaceOnUse" x1="110.3957" x2="113.298" y1="148.06406" y2="148.33133" xlinkHref="#linearGradient3883" />
      <clipPath id="clipPath3812">
        <rect height="36.348648" id="rect3814" style={{ "display": "inline", "opacity": "0.17105264", "strokeWidth": "0.26458332" }} width="5.57514" x="107.723" y="125.41296" />
      </clipPath>
      <clipPath id="clipPath3973">
        <rect height="56.66114" id="rect3975" style={{ "display": "inline", "fill": "#808000", "strokeWidth": "0.26458332" }} width="9.0444307" x="102.62053" y="125.41296" />
      </clipPath>
      <g id="blackKey" transform="matrix(0.99993528,0,0,1,-107.71603,-125.41296)">
        <rect height="36.348648" id="rect5255" style={{ "display": "inline", "opacity": "1", "fill": "#4d4d4d", "fillOpacity": "1", "strokeWidth": "0.26458332" }} width="5.57514" x="107.71603" y="125.41296" />
        <rect height="35.657352" id="rect5257" style={{ "fill": "url(#linearGradient5265)", "fillOpacity": "1", "strokeWidth": "0.23320046" }} width="4.0383401" clipPath="url(#clipPath3812)" rx="1.5" ry="1.5" transform="matrix(0.99992069,0,0,1,0.0087649,0)" x="108.49162" y="123.00336" />
        <path id="path5259" style={{ "strokeWidth": "0.26458332" }} d="m 112.96463,160.73864 c 0.10641,0.33021 0.19199,1.02296 0.19199,1.02296 -1.6,0 -1.79647,3.5e-4 -2.64612,4e-4 -0.84965,-5e-5 -1.04612,-4e-4 -2.64612,-4e-4 0,0 0.0856,-0.69275 0.19199,-1.02296 0.1363,-0.42296 0.22321,-0.9238 0.5654,-1.20731 0.49755,-0.4122 1.33085,-0.49564 1.88873,-0.50274 0.55788,0.007 1.39118,0.0905 1.88873,0.50274 0.34219,0.28351 0.4291,0.78435 0.5654,1.20731 z" />
        <path id="path5261" style={{ "fill": "url(#linearGradient5267)", "fillOpacity": "1", "strokeWidth": "0.05778855" }} d="m 107.723,125.41296 h 0.49315 c 0,0 0.0205,31.37403 0,32.46519 -0.0205,1.09117 -0.49315,3.88346 -0.49315,3.88346 z m 5.575,0 h -0.49315 c 0,0 -0.0205,31.37403 0,32.46519 0.0205,1.09117 0.49315,3.88346 0.49315,3.88346 z" />
      </g>
      <rect height="36.348648" id="blackKeyPressMask" style={{ "display": "inline", "opacity": "1", "fill": PRESS_MASK_COLOR, "mixBlendMode": PRESS_MASK_BLEND_MODE, "fillOpacity": "1", "strokeWidth": "0.26458332" }} width="5.57514" />
    </defs>
    { sortBy(range(lowestKey, highestKey + 1), isBlackKey).map(keyNumber => <Key key={keyNumber} keyNumber={keyNumber} isPressed={keyState.has(keyNumber)} />) }
  </svg>
);

const Key = ({ keyNumber, isPressed }) => (
  <>
    <use href={isBlackKey(keyNumber) ? '#blackKey' : '#whiteKey'} x={getXOffsetForKey(keyNumber)} />
    { isPressed && <use href={isBlackKey(keyNumber) ? '#blackKeyPressMask' : '#whiteKeyPressMask'} x={getXOffsetForKey(keyNumber)} /> }
  </>
);

const isBlackKey = keyNumber => [1, 3, 6, 8, 10].includes(keyNumber % 12);

const getXOffsetForKey = keyNumber => Math.floor(keyNumber / 12) * OCTAVE_WIDTH + KEY_X_OFFSETS[keyNumber % 12];

const getViewBox = (lowestKey, highestKey) => {
  const x = getXOffsetForKey(lowestKey);
  const y = 0;
  const width = getXOffsetForKey(highestKey) - getXOffsetForKey(lowestKey) + (isBlackKey(highestKey) ? BLACK_KEY_WIDTH : WHITE_KEY_WIDTH);
  const height = WHITE_KEY_HEIGHT;

  return `${x} ${y} ${width} ${height}`; 
};