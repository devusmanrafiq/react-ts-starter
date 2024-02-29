import { Language } from 'interfaces';

import { supportedLanguageFlags } from '../supportedLanguageFlags';
import { supportedLanguages } from '../supportedLanguages';

export const getSupportedLanguages = (): Language[] =>
  Object.keys(supportedLanguages).reduce((languagesList: Language[], locale: string) => {
    languagesList.push({
      name: supportedLanguages[locale],
      image: supportedLanguageFlags[locale],
      dir: ['he_IL', 'ar_SA'].includes(locale) ? 'rtl' : 'ltr',
      locale,
    });
    return languagesList;
  }, []);
