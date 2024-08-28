import React from "react";
import { Analytics } from "@vercel/analytics/react";

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
import Form from "../../../components/form/form.tsx";

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
        <Container>
          <Form />
        </Container>

        <Analytics />
      </div>
    </>
  );
};

export default Orderflow;
