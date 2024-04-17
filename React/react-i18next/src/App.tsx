import { useTranslation } from "react-i18next";

type LangType = "en" | "fr";

const curLang: { [key: string]: LangType } = {
  en: "en",
  fr: "fr",
};

function App() {
  const { t, i18n } = useTranslation();

  return (
    <>
      <button
        onClick={() => {
          i18n.changeLanguage(curLang.en);
        }}
      >
        EN
      </button>
      <button
        onClick={() => {
          i18n.changeLanguage(curLang.fr);
        }}
      >
        FR
      </button>
      <p>npm install -g vite</p>
      <p>npm create vite</p>
      <p>{t("Welcome to React")}</p>
    </>
  );
}

export default App;
