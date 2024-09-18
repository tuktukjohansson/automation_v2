import React from "react";
import "./analytics.scss";
import { useTranslation } from "react-i18next";

// Components
import Container from "../../../components/container/container.tsx";
import InformationBox from "../../../components/information-box/information-box.tsx";
import Expert from "../../../components/expert/expert.tsx";

// Images
import Smartboard from "../../../images/components/analytics/smartboard.png";
import Meeting from "../../../images/components/analytics/meeting.png";
import AnalyticsImg from "../../../images/components/analytics.png";
import Samuel from "../../../images/violet/us/samuel.png";

const Analytics = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="analyticsPage">
        {/* ----------------------------- Container ----------------------------- */}
        <Container>
          <div className="analyticstitlecontainer">
            <img className="image" src={AnalyticsImg} />
            <div className="analytics-title">
              {t("analytics.title")}
              <br />
            </div>
            <div className="analytics-description1">
              {t("analytics.description1")}
            </div>
          </div>
        </Container>
        {/* ----------------------------- Container ----------------------------- */}
        <Container>
          <InformationBox
            reverse={true}
            title={t("analytics.infobox1.title")}
            description={t("analytics.infobox1.description")}
            description2={t("analytics.infobox1.description2")}
            img={Smartboard}
            button="Boka Introduktionsmöte"
            buttonhref="https://calendly.com/patrik-violetautomation"
          />
        </Container>
        {/* ----------------------------- Container ----------------------------- */}
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
            title={t("analytics.infobox2.title")}
            description={t("analytics.infobox2.description1")}
            description2={t("analytics.infobox2.description2")}
            img={Meeting}
            button="Vill du veta mer?"
            buttonhref="https://calendly.com/patrik-violetautomation"
          />
        </Container>
      </div>
    </>
  );
};

export default Analytics;
