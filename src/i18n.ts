'use client'
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import ru from '../i18n/ru/translation.json'
import uz from '../i18n/uz/translation.json'

i18n.use(initReactI18next).init({
  debug: true,
  fallbackLng: 'ru',
  interpolation: {
    escapeValue: false,
  },
  resources: {
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