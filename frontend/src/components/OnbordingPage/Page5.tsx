'use client';
import styles from './onbording.module.scss';
import { ButtonArrow, ButtonText, LayoutOnbording } from '@/components';

type TextObj = {
  description: string;
  path: string;
};

export type TypePage5 = {
  subTitle1: string;
  subTitle2: string;
  button_text: string;
  texts: TextObj[];
  professions: string[];
};

type Props = {
  data: TypePage5;
  profession: string;
  handleNext: () => void;
  handleBack: () => void;
};

export const Page5 = ({ data, profession, handleNext, handleBack }: Props) => {
  const { subTitle1, subTitle2, texts, professions, button_text } = data;

  return (
    <LayoutOnbording>
      <div className={styles.button__next}>
        <ButtonArrow callback={handleBack} />
      </div>
      {professions.map((item, i) => {
        if (item == profession) {
          return (
            <div key={item}>
              <h2>{item}</h2>
              <p>
                <span>{`${subTitle1}: `}</span>
                {texts[i].description}
              </p>
              <p>
                <span>{`${subTitle2}: `}</span>
                {texts[i].path}
              </p>
            </div>
          );
        }
      })}
      <ButtonText text={button_text} callback={handleNext} />
    </LayoutOnbording>
  );
};
