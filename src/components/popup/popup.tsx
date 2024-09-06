import React from "react";
import "./popup.scss";
import { useTranslation } from "react-i18next";

interface PopupProps {
  show: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Popup: React.FC<PopupProps> = ({ show, onClose, children }) => {
  const { t } = useTranslation();
  if (!show) {
    return null;
  }

  return (
    <div className="popup-overlay">
      <div className="popup">
        <div className="popup-content">
          {children}
          <a href="/" className="home-button">
            {t("components.buttons.goback")}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Popup;
