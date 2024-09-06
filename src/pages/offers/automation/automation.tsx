import React from "react";
import "./automation.scss";
import { useTranslation } from "react-i18next";

// Components
import Container from "../../../components/container/container.tsx";
import InformationBox from "../../../components/information-box/information-box.tsx";

// Images
import AdminTaskImage from "../../../images/other/admin-task.webp";

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
            point1title={t("automation.infobox1.tableleft.title")}
            point1text1={t("automation.infobox1.tableleft.row1")}
            point1text2={t("automation.infobox1.tableleft.row2")}
            point1text3={t("automation.infobox1.tableleft.row3")}
            point2title={t("automation.infobox1.tableright.title")}
            point2text1={t("automation.infobox1.tableright.row1")}
            point2text2={t("automation.infobox1.tableright.row2")}
            point2text3={t("automation.infobox1.tableright.row3")}
            point2text4={t("automation.infobox1.tableright.row4")}
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
            point1title={t("automation.infobox2.tableleft.title")}
            point1text1={t("automation.infobox2.tableleft.row1")}
            point1text2={t("automation.infobox2.tableleft.row2")}
            point1text3={t("automation.infobox2.tableleft.row3")}
            point2title={t("automation.infobox2.tableright.title")}
            point2text1={t("automation.infobox2.tableright.row1")}
          />
        </Container>
      </div>
    </>
  );
};

export default Automation;
