import React from "react";
import "./clients.scss";
import { Fade } from "react-awesome-reveal";
import { useTranslation } from "react-i18next";

// Components
import Container from "../../components/container/container.tsx";
import Customer from "../../components/customer-case/customer.tsx";

// Images
import Gothes_logo from "../../images/clients/customs/gothes_logo_banner.webp";
import Hsb_logo from "../../images/clients/customs/hsb_logo_banner.webp";
import Maxm_logo from "../../images/clients/customs/maxm_logo_banner.webp";
import Gradienttext from "../../components/gradient-text/gradient-text.tsx";

const Clients = () => {
  const { t } = useTranslation();
  return (
    <>
      {/* ----------------------------- Block One ----------------------------- */}
      <div className="clientpage">
        {/* ----------------------------- Container ----------------------------- */}
        <Container>
          <h1 className="gradient-title">
            {t("clients.titlepart1")}{" "}
            <Gradienttext
              secondGradient={true}
              text={t("clients.titlepart2")}
            />
          </h1>
          <p className="clientdescription">{t("clients.description")}</p>
          <div className="kundcases">
            <Fade delay={200} duration={1000}>
              <Customer
                href="clients/gothes"
                title={t("clients.gothes.clientname")}
                description={t("clients.gothes.result.description")}
                img={Gothes_logo}
                alt="Gothes"
              />
            </Fade>
            <Fade delay={300} duration={1000}>
              <Customer
                href="clients/hsb"
                title={t("clients.hsb.clientname")}
                description={t("clients.gothes.result.description")}
                img={Hsb_logo}
                alt="Didriksons"
              />
            </Fade>
            <Fade delay={400} duration={1000}>
              <Customer
                href="clients/maxm"
                title={t("clients.maxm.clientname")}
                description={t("clients.maxm.result.description")}
                img={Maxm_logo}
                alt="MaxM"
              />
            </Fade>
          </div>
        </Container>
      </div>
    </>
  );
};
export default Clients;
