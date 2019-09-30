const NextI18Next = require('next-i18next').default

//const { localeSubpaths } = require('next/config').default().publicRuntimeConfig;

const NextI18NextInstance = new NextI18Next({
  defaultLanguage: 'en',
  otherLanguages: ['ru'],
  localeSubpaths: {
      ru: 'ru',
      en: 'en'
  }
});

module.exports = NextI18NextInstance;