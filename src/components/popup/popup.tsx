import React from "react";
import "./popup.scss";

interface PopupProps {
  show: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Popup: React.FC<PopupProps> = ({ show, onClose, children }) => {
  if (!show) {
    return null;
  }

  return (
    <div className="popup-overlay">
      <div className="popup">
        <div className="popup-content">
          {children}
          <a href="/" className="home-button">
            Go back
          </a>
        </div>
      </div>
    </div>
  );
};

export default Popup;
