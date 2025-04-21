import { useTranslation } from "react-i18next";

function App() {
  const { t, i18n } = useTranslation();

  const welcomeText: JSX.Element = (
    <div>
      <strong>{t("hello")}</strong>
    </div>
  );

  return (
    <>
      <button
        onClick={() => {
          i18n.changeLanguage("en");
        }}
      >
        en
      </button>
      <button
        onClick={() => {
          i18n.changeLanguage("kr");
        }}
      >
        kr
      </button>
      <h1>{welcomeText}</h1>
    </>
  );
}

export default App;
