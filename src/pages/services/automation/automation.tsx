import React from "react";
import "./automation.scss";
import { useTranslation } from "react-i18next";

// Components
import Container from "../../../components/container/container.tsx";
import InformationBox from "../../../components/information-box/information-box.tsx";

// Images
import Adminwork from "../../../images/components/intelligent-automation/adminwork.png";
import Chess from "../../../images/components/intelligent-automation/chess.png";
import AutomationBanner from "../../../images/components/automationbanner.png";
import Samuel from "../../../images/violet/us/samuel.png";
import Expert from "../../../components/expert/expert.tsx";

const Automation = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="automationPage">
        {/* ----------------------------- Container ----------------------------- */}
        <Container>
          <div className="gradient-container">
            <img src={AutomationBanner} className="wallpaper" />
            <div className="automation-title">
              {t("automation.title")}
              <br />
            </div>
            <div className="automation-description1">
              {t("automation.description1")}
            </div>
            <div className="automation-description2">
              {t("automation.description2")}
            </div>
          </div>
        </Container>
        {/* ----------------------------- Container ----------------------------- */}
        <Container>
          <InformationBox
            reverse={true}
            title={t("automation.infobox1.title")}
            description={t("automation.infobox1.description1")}
            description2={t("automation.infobox1.description2")}
            img={Adminwork}
          />
        </Container>
        <Container>
          <Expert
            img={Samuel}
            title={t("components.experts.samuel.title")}
            description={t("components.experts.samuel.description")}
            button={t("components.experts.samuel.button")}
            buttonhref="/contact"
          />
        </Container>
        {/* ----------------------------- Container ----------------------------- */}
        <Container>
          <InformationBox
            reverse={false}
            title={t("automation.infobox2.title")}
            description={t("automation.infobox2.description1")}
            description2={t("automation.infobox2.description2")}
            img={Chess}
          />
        </Container>
      </div>
    </>
  );
};

export default Automation;
