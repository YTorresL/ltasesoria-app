import spanish from "@/i18n/locales/es.json"

const LANGUAGES = {
  SPANISH: "es",
}

export const getI18N = ({ currentLocale = "es" }) => {
  if (currentLocale === LANGUAGES.SPANISH) return spanish
  return spanish
}
