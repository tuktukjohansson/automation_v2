import React from "react";
import { useTranslation } from "react-i18next";

function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLanguage = i18n.language === "en" ? "sv" : "en";
    i18n.changeLanguage(newLanguage);
  };

  return (
    <button onClick={toggleLanguage}>
      {i18n.language === "en" ? "Switch to Swedish" : "Switch to English"}
    </button>
  );
}

export default LanguageSwitcher;
