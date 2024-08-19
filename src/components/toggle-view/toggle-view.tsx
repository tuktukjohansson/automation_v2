// Libraries and styles
import "./toggle-view.scss";
import React, { useState, useEffect } from "react";

// Logos
import automationImage1 from "../../images/automation-steps-images/image-1.png";
import automationImage2 from "../../images/automation-steps-images/image-2.png";
import automationImage3 from "../../images/automation-steps-images/image-3.png";
import automationImage4 from "../../images/automation-steps-images/image-4.png";
import automationImage5 from "../../images/automation-steps-images/image-5.png";

// Components

function ToggleButton({ onSelect }) {
  const [selectedButton, setSelectedButton] = useState("01");
  const [cancelTimer, setCancelTimer] = useState(false);

  const handleToggle = buttonName => {
    setSelectedButton(buttonName);
    onSelect(buttonName);
    setCancelTimer(true);
  };

  useEffect(() => {
    const timer = setInterval(
      () => {
        console.log(cancelTimer);
        if (!cancelTimer) {
          console.log("ran");
          setSelectedButton(prev => {
            const next = (parseInt(prev) % 5) + 1;
            return `0${next}`;
          });
        }
      },

      12000
    ); // Change every 7 seconds

    return () => clearInterval(timer);
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
  const [selectedContent, setSelectedContent] = useState("01");
  const [animationClass, setAnimationClass] = useState("slide-in");

  const handleSelectContent = content => {
    setAnimationClass("slide-out");
    setTimeout(() => {
      setSelectedContent(content);
      setAnimationClass("slide-in");
    }, 200); // Duration of the slide-out animation
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setAnimationClass("slide-out");
      setTimeout(() => {
        setSelectedContent(prev => {
          const next = (parseInt(prev) % 5) + 1;
          return `0${next}`;
        });
        setAnimationClass("slide-in");
      }, 200);
    }, 12000); // Change every 3 seconds

    return () => clearInterval(timer);
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
                  Mailklienten installeras i Outlook eller annan mailprogram och
                  hämtar de mail som innehåller order.
                </p>
              </div>
              <img
                className="flow-img"
                src={automationImage1}
                alt="Product Image 1"
              />
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
                  En AI-modell tränas specifikt på era order och extraherar ut
                  all information som behövs från dokumenten.
                </p>
              </div>
              <img
                className="flow-img"
                src={automationImage2}
                alt="Product Image 2"
              />
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
                  Informationen registreras in till affärssystem enligt er
                  specifika regler.
                </p>
              </div>
              <img
                className="flow-img"
                src={automationImage3}
                alt="Product Image 3a"
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
                  Rapportering på avklarade order och order som avviker från
                  regler sker löpande.
                </p>
              </div>
              <img
                className="flow-img"
                src={automationImage4}
                alt="Product Image 4"
              />
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
                  Värdefull data från kund och leverantörers orderbeteende
                  sammanställs och analyseras.
                </p>
              </div>
              <img
                className="flow-img"
                src={automationImage5}
                alt="Product Image 5"
              />
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="toggle-view-container">
      <p className="toggle-view-title">Effektivisera era orderprocesser</p>
      <p className="toggle-view-description">
        Genom AI-driven automation frigörs tid för mer värdeskapande aktiviteter
      </p>
      <ToggleButton onSelect={handleSelectContent} />
      {renderSelectedContent()}
    </div>
  );
}

export default ToggleView;
