import React from 'react';
import styles from './Button.module.css'

const Button = ({onClick, className, children}) => (
  <div
    className={`${styles.button} ${className}`}
    onClick={onClick}
  >
    {children}
  </div>
)

export default Button
