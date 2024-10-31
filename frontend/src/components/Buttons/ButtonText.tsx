'use client';
import React from 'react';
import styles from './buttonText.module.scss';

type ButtonTextProps = {
  text: string;
  callback?: () => void;
  type?: 'button' | 'submit';
  disabled?: boolean;
};

const ButtonText = ({ text, callback, disabled = false, type = 'button' }: ButtonTextProps) => {
  return (
    <button className={styles.buttonText} type={type} onClick={callback} disabled={disabled}>
      {text}
    </button>
  );
};

export default ButtonText;
