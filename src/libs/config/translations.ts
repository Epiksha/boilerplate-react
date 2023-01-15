import i18next from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import EN_home from "../../translations/en/home.json";
import { Languages } from "@Types/translation";

const i18nSettings = {
  interpolation: { escapeValue: false },
  fallbackLng: Languages.English,
  supportedLngs: [
    Languages.English,
  ],
  resources: {
    en: {
      home: EN_home,
    },
  },
};

export const enableTranslations = (): void => {
  i18next
    .use(LanguageDetector)
    .init(i18nSettings, error => error && console.error(error));
};