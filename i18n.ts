import NextI18Next from 'next-i18next';
import path from 'path';

const i18n = new NextI18Next({
    otherLanguages: ['nl', 'en'],
    defaultLanguage: 'nl',
    localeSubpaths: { en: 'en', nl: 'nl' },
    localePath: path.resolve('./public/static/locales'),
});

export const useTranslation = i18n.useTranslation;


export default i18n;