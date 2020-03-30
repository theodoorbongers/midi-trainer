import React from 'react';
import styles from './Switch.module.css';
import ToggleButton from 'react-toggle-button';

export const Switch = ({ label, value, onChange }) => (
  <div className={styles.switch} onClick={() => onChange(!value)}>
    <span className={styles.label}>{label}</span>
    <ToggleButton value={!!value} onToggle={currentValue => { onChange(!currentValue); }} />
  </div>
);
