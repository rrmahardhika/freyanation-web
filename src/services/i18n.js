import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import i18nextHttpBackend from "i18next-http-backend";

i18n
  .use(i18nextHttpBackend)
  .use(initReactI18next)
  .init({
    lng: "id",
    fallbackLng: "id",
    backend: {
      loadPath: `${process.env.PUBLIC_URL}/locales/{{lng}}/{{ns}}.json`,
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;