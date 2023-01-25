import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';

import en from './en';
import ru from './ru';

const LANGUAGES = {
  en,
  ru,
};
i18n.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  fallbackLng: 'ru',
  resources: LANGUAGES,
  react: {
    useSuspense: false,
  },
  interpolation: {
    escapeValue: false,
  },
  defaultNS: 'common',
});
