'use client';
import { MutableRefObject } from 'react';
import styles from './onbording.module.scss';
import { ButtonArrow, ButtonText, LayoutOnbording } from '@/components';

export type TypePage4 = {
  text: string;
  professions: string[];
};

type Props = {
  data: TypePage4;
  dataAboutUser: MutableRefObject<{}>;
  handleNext: () => void;
  handleBack: () => void;
};

export const Page4 = ({ data, dataAboutUser, handleNext, handleBack }: Props) => {
  const { text, professions } = data;

  const handleProfession = (profession: string) => {
    dataAboutUser.current = { ...dataAboutUser.current, profession };
    handleNext();
  };
  return (
    <LayoutOnbording>
      <div className={styles.button__next}>
        <ButtonArrow callback={handleBack} />
      </div>
      <p>{text}</p>
      <ul className={styles.buttons}>
        {professions.map((i) => (
          <li key={i}>
            <ButtonText text={i} callback={() => handleProfession(i)} />
          </li>
        ))}
      </ul>
    </LayoutOnbording>
  );
};
