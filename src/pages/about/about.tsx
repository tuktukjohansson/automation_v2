import React from "react";
import "./about.scss";

// Components
import Container from "../../components/container/container.tsx";
import Aboutbox from "../../components/aboutbox/aboutbox.tsx";
import Aboutboxcenter from "../../components/aboutboxcenter/aboutboxcenter.tsx";
import TAD from "../../components/titleanddescription/titleanddescription.tsx";
import ImageTextSideBox from "../../components/imagetextsidebox/imagetextsidebox.tsx";
import { useTranslation } from "react-i18next";

// Images
import Optimus_prime from "../../images/components/optimus_prime.webp";
import About_us_banner from "../../images/violet/banners/stockholm.webp";
import Violet_logo from "../../images/violet/logo/violet_automation_gradient_white.png";
import Ai_banner from "../../images/violet/banners/about_us_banner.webp";
import Patrikview from "../../components/patrikview/patrikview.tsx";

const About = () => {
  const { t } = useTranslation();
  return (
    <>
      {/* ----------------------------- Block One ----------------------------- */}
      <div className="companypage">
        {/* ----------------------------- Container ----------------------------- */}
        <Container>
          <Aboutbox
            text={t("about.title")}
            img={About_us_banner}
            img2={Violet_logo}
          />
          <TAD description={t("about.description")} />
        </Container>
        {/* ----------------------------- Container ----------------------------- */}
        <Container>
          <Aboutboxcenter
            title={t("about.textinimagebox.title")}
            description={t("about.textinimagebox.description")}
            img={Ai_banner}
          />
        </Container>
        {/* ----------------------------- Container ----------------------------- */}
        <Container>
          <ImageTextSideBox
            img={Optimus_prime}
            title={t("about.sideimagebox1.title")}
            description={t("about.sideimagebox1.description")}
          />
        </Container>
        {/* ----------------------------- Container ----------------------------- */}
        <Container>
          <Patrikview />
        </Container>
      </div>
    </>
  );
};

export default About;
