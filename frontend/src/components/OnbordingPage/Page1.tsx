'use client';
import { ButtonText, LayoutOnbording } from '@/components';
import Battery from '../Battery/Battery';

export type DataForPage1 = {
  title: string;
  text: string;
  button_text: string;
};

type Props = {
  data: DataForPage1;
  handleNext: () => void;
};

export const Page1 = ({ data, handleNext }: Props) => {
  const { title, text, button_text } = data;

  return (
    <LayoutOnbording>
      <h2>{title}</h2>
      <p>{text}</p>
      <Battery />
      <ButtonText text={button_text} callback={handleNext} />
    </LayoutOnbording>
  );
};
