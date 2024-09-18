// Libraries and styles
import "./toggle-view.scss";
import React, { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";

// Logos
import automationImage1 from "../../images/components/slideimage1.webp";
import automationImage2 from "../../images/components/slideimage2.webp";
import automationImage3 from "../../images/components/slideimage3.webp";
import automationImage4 from "../../images/components/slideimage4.webp";
import automationImage5 from "../../images/components/slideimage5.webp";

// Components

function ToggleButton({ onSelect }) {
  const [selectedButton, setSelectedButton] = useState("01");
  const intervalRef = useRef<number | null>(null); // Use number type for the interval ID

  const handleToggle = buttonName => {
    setSelectedButton(buttonName);
    onSelect(buttonName);

    // Clear the interval when a button is clicked
    if (intervalRef.current !== null) {
      clearInterval(intervalRef.current);
    }
  };

  useEffect(() => {
    intervalRef.current = window.setInterval(() => {
      // Use window.setInterval for correct typing
      setSelectedButton(prev => {
        const next = (parseInt(prev) % 5) + 1;
        return `0${next}`;
      });
    }, 8000);

    return () => {
      if (intervalRef.current !== null) {
        clearInterval(intervalRef.current); // Clear interval on unmount
      }
    };
  }, []);

  return (
    <div className="button-wrapper">
      <button
        className={`toggle-button ${selectedButton === "01" ? "selected" : ""}`}
        onClick={() => handleToggle("01")}
      >
        01
      </button>
      <div className="toggle-button-spacer"></div>
      <button
        className={`toggle-button ${selectedButton === "02" ? "selected" : ""}`}
        onClick={() => handleToggle("02")}
      >
        02
      </button>
      <div className="toggle-button-spacer"></div>
      <button
        className={`toggle-button ${selectedButton === "03" ? "selected" : ""}`}
        onClick={() => handleToggle("03")}
      >
        03
      </button>
      <div className="toggle-button-spacer"></div>
      <button
        className={`toggle-button ${selectedButton === "04" ? "selected" : ""}`}
        onClick={() => handleToggle("04")}
      >
        04
      </button>
      <div className="toggle-button-spacer"></div>
      <button
        className={`toggle-button ${selectedButton === "05" ? "selected" : ""}`}
        onClick={() => handleToggle("05")}
      >
        05
      </button>
    </div>
  );
}
function ToggleView() {
  const { t } = useTranslation();
  const [selectedContent, setSelectedContent] = useState("01");
  const [animationClass, setAnimationClass] = useState("slide-in");
  const intervalRef = useRef<number | null>(null); // Use ref to store the interval ID

  const handleSelectContent = content => {
    setAnimationClass("slide-out");
    setTimeout(() => {
      setSelectedContent(content);
      setAnimationClass("slide-in");
    }, 200); // Duration of the slide-out animation

    // Clear the interval when a button is clicked
    if (intervalRef.current !== null) {
      clearInterval(intervalRef.current);
    }
  };

  useEffect(() => {
    intervalRef.current = window.setInterval(() => {
      setAnimationClass("slide-out");
      setTimeout(() => {
        setSelectedContent(prev => {
          const next = (parseInt(prev) % 5) + 1;
          return `0${next}`;
        });
        setAnimationClass("slide-in");
      }, 200);
    }, 8000); // 12000 Original

    return () => {
      if (intervalRef.current !== null) {
        clearInterval(intervalRef.current); // Clear interval on unmount
      }
    };
  }, []);

  const renderSelectedContent = () => {
    switch (selectedContent) {
      case "01":
        return (
          <div className={`selected-content ${animationClass}`}>
            <div className="flex-flow-container">
              <div className="flow-text-container">
                <p className="flow-title">01.</p>
                <p className="flow-text">
                  {t("orderflowsales.toggleview.text1")}
                </p>
              </div>
              <img className="flow-img" src={automationImage1} alt="Product1" />
            </div>
          </div>
        );
      case "02":
        return (
          <div className={`selected-content ${animationClass}`}>
            <div className="flex-flow-container">
              <div className="flow-text-container">
                <p className="flow-title">02.</p>
                <p className="flow-text">
                  {t("orderflowsales.toggleview.text2")}
                </p>
              </div>
              <img className="flow-img" src={automationImage2} alt="Product2" />
            </div>
          </div>
        );
      case "03":
        return (
          <div className={`selected-content ${animationClass}`}>
            <div className="flex-flow-container">
              <div className="flow-text-container">
                <p className="flow-title">03.</p>
                <p className="flow-text">
                  {t("orderflowsales.toggleview.text3")}
                </p>
              </div>
              <img
                className="flow-img"
                src={automationImage3}
                alt="Product3a"
              />
            </div>
          </div>
        );
      case "04":
        return (
          <div className={`selected-content ${animationClass}`}>
            <div className="flex-flow-container">
              <div className="flow-text-container">
                <p className="flow-title">04.</p>
                <p className="flow-text">
                  {t("orderflowsales.toggleview.text4")}
                </p>
              </div>
              <img className="flow-img" src={automationImage4} alt="Product4" />
            </div>
          </div>
        );
      case "05":
        return (
          <div className={`selected-content ${animationClass}`}>
            <div className="flex-flow-container">
              <div className="flow-text-container">
                <p className="flow-title">05.</p>
                <p className="flow-text">
                  {t("orderflowsales.toggleview.text5")}
                </p>
              </div>
              <img className="flow-img" src={automationImage5} alt="Product5" />
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="toggle-view-container">
      <p className="toggle-view-title">
        {t("orderflowsales.toggleview.title")}
      </p>
      <p className="toggle-view-description">
        {t("orderflowsales.toggleview.description")}
      </p>
      <ToggleButton onSelect={handleSelectContent} />
      {renderSelectedContent()}
    </div>
  );
}

export default ToggleView;
