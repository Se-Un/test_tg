import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.scss';
import { getMessages, unstable_setRequestLocale } from 'next-intl/server';
import { NextIntlClientProvider } from 'next-intl';
import { locales } from '@/config';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'TON',
  description: 'game for TON',
};

type Props = {
  children: React.ReactNode;
  params: { locale: string };
};

export default async function RootLayout({ children, params: { locale } }: Props) {
  unstable_setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <NextIntlClientProvider messages={messages}>
        <body className={`${inter.className} sf-pro-text`}>{children}</body>
      </NextIntlClientProvider>
    </html>
  );
}
