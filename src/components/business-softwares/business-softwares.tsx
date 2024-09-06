import React from "react";
import "./business-softwares.scss";

// Images
import MonitorLogo from "../../images/softwares/monitor-logo.webp";
import JeevesLogo from "../../images/softwares/jeeves-logo.webp";
import PyramidLogo from "../../images/softwares/pyramid-logo.webp";
import BisonLogo from "../../images/softwares/bison-logo.webp";
import MsNavLogo from "../../images/softwares/msnav-logo.webp";
import SapLogo from "../../images/softwares/sap-logo.webp";
import Unit4Logo from "../../images/softwares/unit4-logo.webp";
import EpicorLogo from "../../images/softwares/epicor-logo.webp";

// Libs
import { useTranslation } from "react-i18next";

const BusinessSoftwares = () => {
  const { t } = useTranslation();

  return (
    <div className="softwares-component">
      <div className="software-container">
        <div className="partner-logo-box">
          <img src={MonitorLogo} alt="Monitor Logo" />
        </div>
        <div className="partner-logo-box">
          <img src={JeevesLogo} alt="Jeeves Logo" />
        </div>
        <div className="partner-logo-box">
          <img src={PyramidLogo} alt="Pyramid Logo" />
        </div>
        <div className="partner-logo-box">
          <img src={BisonLogo} alt="Bison Logo" />
        </div>
        <div className="partner-logo-box">
          <img src={MsNavLogo} alt="Ms Nav Logo" />
        </div>
        <div className="partner-logo-box">
          <img src={SapLogo} alt="SAP Logo" />
        </div>
        <div className="partner-logo-box">
          <img src={Unit4Logo} alt="Unit4 Logo" />
        </div>
        <div className="partner-logo-box">
          <img src={EpicorLogo} alt="Epicor Logo" />
        </div>
      </div>
      <div className="text-container">
        <div className="text">{t("orderflowsales.softwarestext")}</div>
      </div>
    </div>
  );
};

export default BusinessSoftwares;
