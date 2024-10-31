import { NavBar, Onbording } from '@/components';
import styles from './page.module.scss';
import { unstable_setRequestLocale } from 'next-intl/server';
import { getTranslations } from 'next-intl/server';

type Props = {
  params: {
    locale: string;
  };
};

export default async function Home({ params: { locale } }: Props) {
  unstable_setRequestLocale(locale);
  const t = await getTranslations('');
  const pg1 = await getTranslations('onBoardingItems.pageOne');
  const pg2 = await getTranslations('onBoardingItems.pageTwo');
  const pg3 = await getTranslations('onBoardingItems.pageGender');
  const pg4 = await getTranslations('onBoardingItems.pageCareer');
  const pg4_bt = await getTranslations('onBoardingItems.pageCareer.profession.titles');
  const pg4_tx = await getTranslations('onBoardingItems.pageCareer.profession.texts');
  const pg6_1 = await getTranslations('onBoardingItems.pageEarn');
  const pg6_2 = await getTranslations('onBoardingItems.pageUse');
  const bt = await getTranslations('onBoardingItems.buttonText');

  const dataPage1 = await (async () => ({
    title: pg1('title'),
    text: pg1('text'),
    button_text: bt('start'),
  }))();

  const dataPage2 = await (async () => ({
    text: pg2('text'),
    boy: pg3('boy'),
    girl: pg3('girl'),
  }))();

  const dataPage3 = await (async () => ({
    textBoy: pg3('textBoy'),
    textGirl: pg3('textGirl'),
    button_text: bt('next'),
  }))();

  const dataPage4 = await (async () => ({
    text: pg4('text'),
    professions: [
      pg4_bt('title_1'),
      pg4_bt('title_2'),
      pg4_bt('title_3'),
      pg4_bt('title_4'),
      pg4_bt('title_5'),
    ],
  }))();

  const dataPage5 = await (async () => ({
    subTitle1: pg4('profession.subTitle.title_1'),
    subTitle2: pg4('profession.subTitle.title_2'),
    button_text: bt('next'),
    texts: [
      {
        description: pg4_tx('text_1.description'),
        path: pg4_tx('text_1.path'),
      },
      {
        description: pg4_tx('text_2.description'),
        path: pg4_tx('text_2.path'),
      },
      {
        description: pg4_tx('text_3.description'),
        path: pg4_tx('text_3.path'),
      },
      {
        description: pg4_tx('text_4.description'),
        path: pg4_tx('text_4.path'),
      },
      {
        description: pg4_tx('text_5.description'),
        path: pg4_tx('text_5.path'),
      },
    ],
    professions: dataPage4.professions,
  }))();
  const dataLinks = [
    {
      name: 'Improve',
      link: '#'
    },
    {
      name: 'Map',
      link: '#'
    },
    {
      name: 'Friends',
      link: '#'
    },
    {
      name: 'Quests',
      link: '#'
    }
  ]

  const dataPage6_1 = await (async () => ({
    title: pg6_1('title'),
    text: pg6_1('text'),
    button_text: bt('next'),
  }))();

  const dataPage6_2 = await (async () => ({
    title: pg6_2('title'),
    text: pg6_2('text'),
    button_text: bt('start'),
  }))();

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Onbording
          page1={dataPage1}
          page2={dataPage2}
          page3={dataPage3}
          page4={dataPage4}
          page5={dataPage5}
          page6_1={dataPage6_1}
          page6_2={dataPage6_2}
        />
        <NavBar dataLinks={dataLinks}/>
      </main>
    </div>
  );
}
