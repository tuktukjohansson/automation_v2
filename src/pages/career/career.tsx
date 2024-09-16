import React from "react";
import "./career.scss";
import { Fade } from "react-awesome-reveal";
import { useTranslation } from "react-i18next";

// Components
import Container from "../../components/container/container.tsx";
import Customer from "../../components/customer-case/customer.tsx";

// Images
import Gothes_logo from "../../images/clients/customs/gothes_logo_banner.png";
import Hsb_logo from "../../images/clients/customs/hsb_logo_banner.webp";
import Didriksons_logo from "../../images/clients/customs/didriksons_logo_banner.png";
import Gradienttext from "../../components/gradient-text/gradient-text.tsx";

const CareerPage = () => {
  const { t } = useTranslation();
  return (
    <div className="careerpage">
      {/* ----------------------------- Container ----------------------------- */}
      <Container>
        <h1 className="gradient-title">
          {t("career.title.part1")}{" "}
          <Gradienttext secondGradient={true} text={t("career.title.part2")} />
        </h1>
        <p style={{ marginBottom: 20 }} className="clientdescription">
          {t("career.description")}
        </p>
        <div className="kundcases">
          <Fade delay={200} duration={1000}>
            <Customer
              href="clients/gothes"
              title={t("career.job1.title")}
              description={t("career.job1.description")}
              img={Gothes_logo}
              alt="Gothes"
            />
          </Fade>
          <Fade delay={300} duration={1000}>
            <Customer
              href="clients/hsb"
              title={t("career.job2.title")}
              description={t("career.job2.description")}
              img={Hsb_logo}
              alt="Didriksons"
            />
          </Fade>
          <Fade delay={400} duration={1000}>
            <Customer
              href="clients/didriksons"
              title={t("career.job3.title")}
              description={t("career.job3.description")}
              img={Didriksons_logo}
              alt="MaxM"
            />
          </Fade>
        </div>
      </Container>
    </div>
  );
};
export default CareerPage;
