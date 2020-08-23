import NextI18Next from 'next-i18next';
import path from 'path';

export default new NextI18Next({
    otherLanguages: ['nl', 'en'],
    defaultLanguage: 'nl',
    localeSubpaths: { en: 'en', nl: 'nl' },
    localePath: path.resolve('./public/static/locales'),
});
