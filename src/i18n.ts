'use client'
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from '../i18n/en/translation.json'
import ru from '../i18n/ru/translation.json'
import uz from '../i18n/uz/translation.json'

i18n.use(initReactI18next).init({
  debug: true,
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
  resources: {
    en: {
      translation: en,
    },
    ru: {
      translation: ru,
    },
    uz: {
      translation: uz,
    }
  }
  // resources: {
  //   en: {
  //     translation: {
  //       welcome: 'Welcome',
  //       About: 'About',
  //     },
  //   },
  //   de: {
  //     translation: {
  //       welcome: "Willkommen",
  //       About: 'Abbb',
  //     }
  //   }
  // }
})

export default i18n;