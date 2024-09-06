import React from "react";
import { useTranslation } from "react-i18next";

// Components
import Container from "../../../components/container/container.tsx";
import InformationBox from "../../../components/information-box/information-box.tsx";

// Images

import "./analytics.scss";
import AdminTaskImage from "../../../images/other/admin-task.webp";

const Analytics = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="analyticsPage">
        {/* ----------------------------- Container ----------------------------- */}
        <Container>
          <div className="gradient-container">
            <div className="analytics-title">
              {t("analytics.title")}
              <br />
            </div>
            <div className="analytics-description1">
              {t("analytics.description1")}
            </div>
            <div className="analytics-description2">
              {t("analytics.description2")}
            </div>
          </div>
        </Container>
        {/* ----------------------------- Container ----------------------------- */}
        <Container>
          <InformationBox
            reverse={true}
            title={t("analytics.infobox1.title")}
            description={t("analytics.infobox1.description")}
            img={AdminTaskImage}
            point1title={t("analytics.infobox1.tableleft.title")}
            point1text1={t("analytics.infobox1.tableleft.row1")}
            point1text2={t("analytics.infobox1.tableleft.row2")}
            point1text3={t("analytics.infobox1.tableleft.row3")}
            point2title={t("analytics.infobox1.tableright.title")}
            point2text1={t("analytics.infobox1.tableright.row1")}
            point2text2={t("analytics.infobox1.tableright.row2")}
            point2text3={t("analytics.infobox1.tableright.row3")}
            point2text4={t("analytics.infobox1.tableright.row4")}
          />
        </Container>
        {/* ----------------------------- Container ----------------------------- */}
        <Container>
          <InformationBox
            reverse={false}
            title={t("analytics.infobox2.title")}
            description={t("analytics.infobox2.description1")}
            description2={t("analytics.infobox2.description2")}
            description3={t("analytics.infobox2.description3")}
            img={AdminTaskImage}
            point1title={t("analytics.infobox2.tableleft.title")}
            point1text1={t("analytics.infobox2.tableleft.row1")}
            point1text2={t("analytics.infobox2.tableleft.row2")}
            point1text3={t("analytics.infobox2.tableleft.row3")}
            point2title={t("analytics.infobox2.tableright.title")}
            point2text1={t("analytics.infobox2.tableright.row1")}
            point2text2={t("analytics.infobox2.tableright.row2")}
            point2text3={t("analytics.infobox2.tableright.row3")}
            point2text4={t("analytics.infobox2.tableright.row4")}
          />
        </Container>
      </div>
    </>
  );
};

export default Analytics;
