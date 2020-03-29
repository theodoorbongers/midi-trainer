import React from 'react';
import classNames from 'classnames';
import panelStyles from './Panel.module.css';

export const Panel = ({ children, className }) => (
  <div className={classNames(panelStyles.panel, className)}>{ children }</div>
);
