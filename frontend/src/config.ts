import { LocalePrefix } from 'next-intl/routing';

export const locales = ['en', 'ru'] as const;
export type Locales = (typeof locales)[number];

export const localePrefix = 'as-needed' satisfies LocalePrefix;
