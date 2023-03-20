import React from 'react';
import styles from './input.module.css'

function Input({type, label, onChange, onBlur, value, error}) {
    return (
      <div className={styles.wrapper}>
        <label className={styles.label} htmlFor={label}>{label}</label>
        <input
        className={styles.input}
          type={type}
          value={value}
          name={label}
          id={label}
          onChange={onChange}
          onBlur={onBlur}
        />
        {error && <p className={styles.error}>{error}</p>}
      </div>
    );
}

export default Input;