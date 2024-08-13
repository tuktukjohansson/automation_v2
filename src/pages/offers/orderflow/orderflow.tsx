import React from "react";

// Components
import Container from "../../../components/container/container.tsx";
import ImageTextSideBox from "../../../components/imagetextsidebox/imagetextsidebox.tsx";
import { useTranslation, Trans } from "react-i18next";

// Images
import sork5 from "../../../images/component-images/sork5.webp";
import sork6 from "../../../images/component-images/sork6.webp";

// Styling
import "./orderflow.scss";

const Orderflow = () => {
  const { t } = useTranslation();
  return (
    <>
      {/* ----------------------------- Block One ----------------------------- */}
      <div className="orderflowpage">
        <Container>
          <h1 className="gradient-title">
            OrderFlow
            <br />
          </h1>
          <div className="blockone">
            <ImageTextSideBox
              img={sork5}
              alt="sork"
              title={t("vole.title")}
              description={t("vole.text1")}
              description2={t("vole.text2")}
              description3={t("vole.text3")}
              description4={t("vole.text4")}
            />
            <ImageTextSideBox
              alt="sork"
              img={sork6}
              title={t("vole-o-meter.title")}
              reverse={true}
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

export default Orderflow;
