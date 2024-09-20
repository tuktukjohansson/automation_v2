import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import "./langSwitch.scss"; // Importing CSS file

function LanguageSwitcher() {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleLanguage = language => {
    i18n.changeLanguage(language);
    setIsOpen(false); // Close the menu after selecting a language
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen); // Toggle the dropdown menu
  };

  return (
    <div className="switch-container">
      <button className="language-toggle-button" onClick={toggleDropdown}>
        {i18n.language === "en" ? "English" : "Svenska"}
        <span className="arrow">▼</span>
      </button>
      {isOpen && (
        <div className="language-dropdown">
          <h2 className="title">{t("language.title")}</h2>
          <div className="language-option" onClick={() => toggleLanguage("en")}>
            English
          </div>
          <div className="language-option" onClick={() => toggleLanguage("sv")}>
            Svenska
          </div>
        </div>
      )}
    </div>
  );
}

export default LanguageSwitcher;
