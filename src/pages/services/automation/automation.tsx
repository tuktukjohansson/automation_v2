import React from "react";
import "./automation.scss";
import { useTranslation } from "react-i18next";

// Components
import Container from "../../../components/container/container.tsx";
import InformationBox from "../../../components/information-box/information-box.tsx";

// Images
import AdminTaskImage from "../../../images/other/admin-task.png";

const Automation = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="automationPage">
        {/* ----------------------------- Container ----------------------------- */}
        <Container>
          <div className="gradient-container">
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
            img={AdminTaskImage}
          />
        </Container>
        {/* ----------------------------- Container ----------------------------- */}
        <Container>
          <InformationBox
            reverse={false}
            title={t("automation.infobox2.title")}
            description={t("automation.infobox2.description1")}
            description2={t("automation.infobox2.description2")}
            img={AdminTaskImage}
          />
        </Container>
      </div>
    </>
  );
};

export default Automation;
