import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import messages_az from "./translations/az.json";
import messages_en from "./translations/en.json";

// the translations
// (tip move them in a JSON file and import them)
const resources = {
  en: {
    translation: messages_en,
  },
  az: {
    translation: messages_az,
  },
};

const language = navigator.language.split(/[-_]/)[0];

console.log(navigator.language);

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: localStorage.getItem("language") || language,

    keySeparator: false, // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
