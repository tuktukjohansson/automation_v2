import React from "react";
import { Analytics } from "@vercel/analytics/react";
import { useTranslation } from "react-i18next";

// Components
import Container from "../../components/container/container.tsx";
import CoolBox from "../../components/cool-box/cool-box.tsx";
import BusinessSoftwares from "../../components/business-softwares/business-softwares.tsx";
import ToggleView from "../../components/toggle-view/toggle-view.tsx";
import Benefits from "../../components/benefits/benefits.tsx";

// Styling
import "./orderflow.scss";

const Orderflowconfirmation = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="orderflowpage">
        {/* ----------------------------- Container ----------------------------- */}
        <Container>
          <CoolBox
            titlepart1={t("orderflowconfirmation.computerbox.titlepart1")}
            titlepart2={t("orderflowconfirmation.computerbox.titlepart2")}
            description={t("orderflowconfirmation.computerbox.description")}
          />
          <BusinessSoftwares
            description={t("orderflowconfirmation.softwarestext")}
          />
        </Container>
        {/* ----------------------------- Container ----------------------------- */}
        <div className="scrolltocomponent" id="howdoesitwork" />
        <Container>
          <div className="toggleviewcontainer">
            <ToggleView />
          </div>
        </Container>
        {/* ----------------------------- Container ----------------------------- */}
        <Container>
          <Benefits />
        </Container>
        <Analytics />
      </div>
    </>
  );
};

export default Orderflowconfirmation;
