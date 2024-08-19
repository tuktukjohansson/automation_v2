import React from "react";
import "./business-softwares.scss";

// Images
import MonitorLogo from "../../images/software-partner-logos/monitor-logo.png";
import JeevesLogo from "../../images/software-partner-logos/jeeves-logo.png";
import PyramidLogo from "../../images/software-partner-logos/pyramid-logo.png";
import BisonLogo from "../../images/software-partner-logos/bison-logo.png";
import MsNavLogo from "../../images/software-partner-logos/msnav-logo.png";
import SapLogo from "../../images/software-partner-logos/sap-logo.png";
import Unit4Logo from "../../images/software-partner-logos/unit4-logo.png";
import EpicorLogo from "../../images/software-partner-logos/epicor-logo.png";

// Libs
import { useTranslation } from "react-i18next";

const BusinessSoftwares = () => {
  const { t } = useTranslation();

  return (
    <div className="softwares-component">
      <div className="software-container">
        <div className="partner-logo-box">
          <img src={MonitorLogo} />
        </div>
        <div className="partner-logo-box">
          <img src={JeevesLogo} />
        </div>
        <div className="partner-logo-box">
          <img src={PyramidLogo} />
        </div>
        <div className="partner-logo-box">
          <img src={BisonLogo} />
        </div>
        <div className="partner-logo-box">
          <img src={MsNavLogo} />
        </div>
        <div className="partner-logo-box">
          <img src={SapLogo} />
        </div>
        <div className="partner-logo-box">
          <img src={Unit4Logo} />
        </div>
        <div className="partner-logo-box">
          <img src={EpicorLogo} />
        </div>
      </div>
      <div className="text-container">
        <div className="text">{t("offersPage.softwares-text")}</div>
      </div>
    </div>
  );
};

export default BusinessSoftwares;
