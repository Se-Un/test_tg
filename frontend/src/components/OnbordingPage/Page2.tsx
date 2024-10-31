'use client';
import Link from 'next/link';
import styles from './onbording.module.scss';
import { ButtonArrow, LayoutOnbording } from '@/components';
import Hero from '../Heroes.tsx/Hero';
import { MutableRefObject } from 'react';
import { GENDERS } from '@/constants/HEROES';

export type TypePage2 = {
  text: string;
  boy: string;
  girl: string;
};

type Props = {
  data: TypePage2;
  dataAboutUser: MutableRefObject<{}>;
  handleNext: () => void;
  handleBack: () => void;
};

export const Page2 = ({ data, dataAboutUser, handleNext, handleBack }: Props) => {
  const { text, boy, girl } = data;

  const handleGender = (gender: string) => {
    dataAboutUser.current = { ...dataAboutUser.current, gender };
    handleNext();
  };
  return (
    <LayoutOnbording>
      <div className={styles.button__next}>
        <ButtonArrow callback={handleBack} />
      </div>
      <p>{text}</p>
      <Link href='#' onClick={() => handleGender(boy)}>
        <Hero image={GENDERS.boy} />
        <p>{boy}</p>
      </Link>
      <Link href='#' onClick={() => handleGender(girl)}>
        <Hero image={GENDERS.girl} />
        <p>{girl}</p>
      </Link>
    </LayoutOnbording>
  );
};
