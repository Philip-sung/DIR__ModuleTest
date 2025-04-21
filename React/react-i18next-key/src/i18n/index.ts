import i18next from "i18next";
import { resources } from "./locales";

export const defaultNS = "lang";

i18next.init({
  resources,
  defaultNS,
  ns: ["lang"],
  lng: "en",
});
