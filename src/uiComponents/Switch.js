import React from 'react';
import classNames from 'classnames';
import styles from './Switch.module.css';

export const Switch = ({ label, checked, onChange }) => (
  <label className={classNames(styles.switch, { [styles.checked]: checked })}>
    {label}
    <input type="checkbox" checked={checked} onChange={e => onChange(e.target.checked)} />
  </label>
);
