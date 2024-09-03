import React from "react";
import "./five-props-container.scss";
import { useTranslation } from "react-i18next";

// Images
import o_sv from "../../images/components/o_sv.png";
import oe_sv from "../../images/components/oe_sv.png";
import o_en from "../../images/components/o_en.png";
import oe_en from "../../images/components/oe_en.png";
import office from "../../images/components/ai-office-tinted.png";
import intelligentautomation_sv from "../../images/components/intelligentautomation-sv.png";
import intelligentautomation_en from "../../images/components/intelligentautomation-en.png";
import us from "../../images/violet/about_us/us.png";
import blob from "../../images/components/blob1.png";
import blob2 from "../../images/components/blob2.png";

const FivePropContainer = () => {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;
  const orderFlowImages =
    currentLanguage === "sv" ? [o_sv, oe_sv] : [o_en, oe_en];
  const intelligentAutomationImage =
    currentLanguage === "sv"
      ? intelligentautomation_sv
      : intelligentautomation_en;
  console.log(currentLanguage);
  return (
    <div className="FivePropContainer">
      <div className="flexrow1">
        <a className="flexitem1" href="/home">
          <img src={office} alt="office" />
          <div>Upptäck hur ni kan öka er produktivitet med AI</div>
        </a>
        <a className="flexitem2" href="/home">
          <div className="textcontainer">
            <div className="title">OrderFlow</div>
            <div className="description">
              Automatisk registrering av PDF-data ger mer tid till kunderna
            </div>
          </div>
          <div className="imagecontainer">
            {orderFlowImages.map((image, index) => (
              <img key={index} src={image} alt={`order image ${index}`} />
            ))}
          </div>
        </a>
      </div>
      <div className="flexrow2">
        <div className="flexitems">
          <a className="flexitem1" href="/home">
            <div className="textcontainer">
              <div className="title">Intelligent Automation</div>
              <div className="description">
                Med Violet Automation är det enkelt och riskfritt att komma
                igång med AI och eliminera admin
              </div>
            </div>
            <img
              className="blob"
              src={intelligentAutomationImage}
              alt="intelligent automation"
            />
          </a>
          <a className="flexitem2" href="/home">
            <div className="textcontainer">
              <div className="title">Kontakta oss</div>
              <div className="description">
                Våra experter har erfarenhet från flera branscher och
                funktioner. Boka en kartläggning idag - automatisera er
                verksamhet imorgon.
              </div>
            </div>
            <img className="blob" src={blob} alt="intelligent automation" />
            <img className="blob2" src={blob2} alt="intelligent automation" />
          </a>
        </div>
        <a className="flexitem" href="/home">
          <img src={us} alt="ngt" />
        </a>
      </div>
    </div>
  );
};

export default FivePropContainer;
