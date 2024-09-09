import React from "react";
import { Analytics } from "@vercel/analytics/react";
import { useTranslation } from "react-i18next";

// Components
import Container from "../../../components/container/container.tsx";
import CoolBox from "../../../components/cool-box/cool-box.tsx";
import BusinessSoftwares from "../../../components/business-softwares/business-softwares.tsx";
import ToggleView from "../../../components/toggle-view/toggle-view.tsx";
import Benefits from "../../../components/benefits/benefits.tsx";

// Styling
import "./orderflow.scss";
import Form from "../../../components/form/form.tsx";

const Orderflowsales = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="orderflowpage">
        {/* ----------------------------- Container ----------------------------- */}
        <Container>
          <CoolBox
            titlepart1={t("orderflowsales.computerbox.titlepart1")}
            titlepart2={t("orderflowsales.computerbox.titlepart2")}
            description={t("orderflowsales.computerbox.description")}
          />
          <BusinessSoftwares description={t("orderflowsales.softwarestext")} />
        </Container>
        {/* ----------------------------- Container ----------------------------- */}
        <Container>
          <div className="toggleviewcontainer">
            <ToggleView />
          </div>
        </Container>
        {/* ----------------------------- Container ----------------------------- */}
        <Container>
          <Benefits />
        </Container>
        {/* ----------------------------- Container ----------------------------- */}
        <Container>
          <Form />
        </Container>
        <Analytics />
      </div>
    </>
  );
};

export default Orderflowsales;
