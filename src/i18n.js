import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationEN from "./locales/en/translationLanding.json";
import translationID from "./locales/id/translationLanding.json";

const resources = {
  en: {
    translation: translationEN
  },
  id: {
    translation: translationID
  }
};

i18n.use(initReactI18next).init({
  resources,
  fallbackLng: "en",
  interpolation: {
    escapeValue: false
  }
});

export default i18n;
