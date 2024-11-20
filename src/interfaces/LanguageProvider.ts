import type { Resource } from 'i18next';

export interface LanguageProviderOptions {
  translations: Resource;
}

export interface Language {
  name: string;
  dir: 'rtl' | 'ltr';
  locale: string;
  image: string;
}
