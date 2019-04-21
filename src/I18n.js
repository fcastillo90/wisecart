import I18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { reactI18nextModule } from "react-i18next";
import en_US from "./resources/locales/en-US";
import es_CL from "./resources/locales/es-CL";
/**
 * Builds, sets up and exports the I18n object created with the i18next library.
 *
 * In the resources option there's a map that sets the different language and
 * country options to the existing language translations files.
 */
export default I18n.use(LanguageDetector)
  .use(reactI18nextModule)
  .init({
    ns: ["common"],
    defaultNS: "common",
    fallbackLng: "es",
    resources: {
      en: en_US,
      "en-CL": en_US,
      "en-US": en_US,
      es: es_CL,
      "es-CL": es_CL,
      "es-US": es_CL
    },
    keySeparator: false,
    debug: false,
    interpolation: {
      escapeValue: false
    },
    react: {
      wait: true
    }
  });
