'use client';
import { Page1, Page2, Page3, Page4, Page5, Page6 } from '@/components';
import styles from './onbording.module.scss';
import { DataForPage1 } from './Page1';
import { useRef, useState } from 'react';
import { TypePage2 } from './Page2';
import { TypePage3 } from './Page3';
import { TypePage4 } from './Page4';
import { TypePage5 } from './Page5';

type Props = {
  page1: DataForPage1;
  page2: TypePage2;
  page3: TypePage3;
  page4: TypePage4;
  page5: TypePage5;
  page6_1: DataForPage1;
  page6_2: DataForPage1;
};

export default function Onbording({ page1, page2, page3, page4, page5, page6_1, page6_2 }: Props) {
  const dataAboutUser = useRef({ gender: '', profession: '', avatar: '' });
  const [step, setStep] = useState(0);
  const handleNext = () => setStep(step + 1);
  const handleBack = () => setStep(step - 1);
  const handleNextAndSave = () => {
    localStorage.setItem('dataAboutUser', JSON.stringify(dataAboutUser.current));
    setStep(step + 1);
  };

  return (
    <div className={styles.onbording}>
      {step == 0 && <Page1 data={page1} handleNext={handleNext} />}
      {step == 1 && (
        <Page2
          data={page2}
          handleNext={handleNext}
          handleBack={handleBack}
          dataAboutUser={dataAboutUser}
        />
      )}
      {step == 2 && (
        <Page3
          data={page3}
          handleNext={handleNext}
          handleBack={handleBack}
          gender={dataAboutUser.current.gender}
        />
      )}
      {step == 3 && (
        <Page4
          data={page4}
          handleNext={handleNext}
          handleBack={handleBack}
          dataAboutUser={dataAboutUser}
        />
      )}
      {step == 4 && (
        <Page5
          data={page5}
          handleNext={handleNext}
          handleBack={handleBack}
          profession={dataAboutUser.current.profession}
        />
      )}
      {step == 5 && <Page6 data={page6_1} handleNext={handleNext} handleBack={handleBack} />}
      {step == 6 && <Page6 data={page6_2} handleNext={handleNextAndSave} handleBack={handleBack} />}
    </div>
  );
}
