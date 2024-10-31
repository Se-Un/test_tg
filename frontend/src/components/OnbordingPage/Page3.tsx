'use client';
import styles from './onbording.module.scss';
import { ButtonArrow, ButtonText, LayoutOnbording } from '@/components';
import Profile from '../Heroes.tsx/Profile';

export type TypePage3 = {
  textBoy: string;
  textGirl: string;
  button_text: string;
};

type Props = {
  data: TypePage3;
  gender: string;
  handleNext: () => void;
  handleBack: () => void;
};

export const Page3 = ({ data, gender, handleNext, handleBack }: Props) => {
  const { textBoy, textGirl, button_text } = data;

  return (
    <LayoutOnbording>
      <div className={styles.button__next}>
        <ButtonArrow callback={handleBack} />
      </div>
      <p>{gender == 'Boy' ? textBoy : textGirl}</p>
      <Profile gender={gender.toLowerCase()} prof='product' />
      <p className={styles.genderText}>{gender}</p>
      <ButtonText text={button_text} callback={handleNext} />
    </LayoutOnbording>
  );
};
