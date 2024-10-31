'use client';
import React from 'react';
import Image from 'next/image';
import styles from './buttonArrow.module.scss';

type ButtonArrowProps = {
  callback?: () => void;
  type?: 'button' | 'submit';
  disabled?: boolean;
};

const ButtonArrow = ({ callback, disabled = false, type = 'button' }: ButtonArrowProps) => {
  return (
    <button className={styles.buttonArrow} type={type} onClick={callback} disabled={disabled}>
      <Image src='/images/arrow.svg' alt='arrow' width={8} height={16} className={styles.arrow} />
    </button>
  );
};

export default ButtonArrow;
