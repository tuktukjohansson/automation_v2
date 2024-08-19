import React from "react";

// Components
import Container from "../../../components/container/container.tsx";
import CoolBox from "../../../components/cool-box/cool-box.tsx";
import BusinessSoftwares from "../../../components/business-softwares/business-softwares.tsx";
import ToggleView from "../../../components/toggle-view/toggle-view.tsx";
import Benefits from "../../../components/benefits/benefits.tsx";

// Images

// Libs
import { useTranslation, Trans } from "react-i18next";

// Styling
import "./orderflow.scss";

const Orderflow = () => {
  const { t } = useTranslation();
  return (
    <>
      {/* ----------------------------- Block One ----------------------------- */}
      <div className="orderflowpage">
        <Container>
          <CoolBox />
          <BusinessSoftwares />
        </Container>
        <Container>
          <ToggleView />
        </Container>
        <Container>
          <Benefits />
        </Container>
      </div>
    </>
  );
};

export default Orderflow;
