import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import dataSwedish from "./translation/swedish.json";
import dataEnglish from "./translation/english.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    lng: "sv",
    fallbackLng: "sv",
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      en: {
        translation: dataEnglish,
      },
      sv: {
        translation: dataSwedish,
      },
    },
  });

export default i18n;
