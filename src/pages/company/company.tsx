import React from "react";
import { useTranslation, Trans } from "react-i18next";

// Components
import Container from "../../components/container/container.tsx";
import ImageTextSideBox from "../../components/imagetextsidebox/imagetextsidebox.tsx";

// Images
import violetoffice from "../../images/component-images/violetoffice.jpg";
import "./company.scss";

const Company = () => {
  const { t } = useTranslation();
  return (
    <>
      {/* ----------------------------- Block One ----------------------------- */}
      <div className="companypage">
        <Container>
          <h1 className="gradient-title">
            Company
            <br />
          </h1>
          <div className="blockone">
            <ImageTextSideBox
              alt="violetoffice"
              img={violetoffice}
              title="Sup"
              reverse={false}
              description={t("vole-o-meter.text1")}
              description2={t("vole-o-meter.text2")}
              description3={t("vole-o-meter.text3")}
              description4={t("vole-o-meter.text4")}
            />
          </div>
        </Container>
      </div>
    </>
  );
};

export default Company;
