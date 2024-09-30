import React from "react";
import "./about.scss";

// Components
import Container from "../../components/container/container.tsx";
import Aboutbox from "../../components/aboutbox/aboutbox.tsx";
import TAD from "../../components/titleanddescription/titleanddescription.tsx";
import { useTranslation } from "react-i18next";

// Images
import About_us_banner from "../../images/violet/banners/stockholm.webp";
import Violet_logo from "../../images/violet/logo/violet_automation_gradient_white.png";

const About = () => {
  const { t } = useTranslation();
  return (
    <>
      {/* ----------------------------- Block One ----------------------------- */}
      <div className="companypage">
        {/* ----------------------------- Container ----------------------------- */}
        <Container>
          <Aboutbox img={About_us_banner} img2={Violet_logo} />
          <TAD
            description={t("about.titleanddescription1.description")}
            description2={t("about.titleanddescription1.description2")}
          />
          <div style={{ marginBottom: "40px" }} />
          <TAD
            title={t("about.titleanddescription2.title")}
            description={t("about.titleanddescription2.description")}
          />
          <div style={{ marginBottom: "40px" }} />
          <TAD
            title={t("about.titleanddescription3.title")}
            description={t("about.titleanddescription3.description")}
            description2={t("about.titleanddescription3.description2")}
            description3={t("about.titleanddescription3.description3")}
            description4={t("about.titleanddescription3.description4")}
          />
        </Container>
      </div>
    </>
  );
};

export default About;
