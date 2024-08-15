import React from "react";

// Components
import Container from "../../../components/container/container.tsx";
import { useTranslation, Trans } from "react-i18next";
import CoolBox from "../../../components/cool-box/cool-box.tsx";

// Images

// Styling
import "./orderflow.scss";

const Orderflow = () => {
  const { t } = useTranslation();
  return (
    <>
      {/* ----------------------------- Block One ----------------------------- */}
      <div className="orderflowpage">
        <Container>
          <CoolBox></CoolBox>
        </Container>
      </div>
    </>
  );
};

export default Orderflow;
