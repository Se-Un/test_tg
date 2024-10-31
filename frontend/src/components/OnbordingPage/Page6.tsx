'use client';
import styles from './onbording.module.scss';
import { ButtonArrow, ButtonText, LayoutOnbording } from '@/components';
import { DataForPage1 } from './Page1';

type Props = {
  data: DataForPage1;
  handleNext: () => void;
  handleBack: () => void;
};

export const Page6 = ({ data, handleNext, handleBack }: Props) => {
  const { title, text, button_text } = data;

  return (
    <LayoutOnbording>
      <div className={styles.button__next}>
        <ButtonArrow callback={handleBack} />
      </div>
      <h2>{title}</h2>
      <p>{text}</p>
      <ButtonText text={button_text} callback={handleNext} />
    </LayoutOnbording>
  );
};
