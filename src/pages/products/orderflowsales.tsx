import React from "react";
import { Analytics } from "@vercel/analytics/react";
import { useTranslation } from "react-i18next";

// Components
import Container from "../../components/container/container.tsx";
import Backgroundcontainer from "../../components/backgroundcontainer/backgroundcontainer.tsx";
import CoolBox from "../../components/cool-box/cool-box.tsx";
import BusinessSoftwares from "../../components/business-softwares/business-softwares.tsx";
import ToggleView from "../../components/toggle-view/toggle-view.tsx";
import Benefits from "../../components/benefits/benefits.tsx";
import Callecontainer from "../../components/callecontainer/callecontainer.tsx";
import Customerservice from "../../images/violet/employees/customerservice.png";

// Styling
import "./orderflow.scss";
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
        <Backgroundcontainer>
          <Callecontainer
            titlepart1={t("components.callecontainer.titlepart1")}
            titlepart2={t("components.callecontainer.titlepart2")}
            gradientdescription={t(
              "components.callecontainer.gradientdescription"
            )}
            description={t("components.callecontainer.description1")}
            description2={t("components.callecontainer.description2")}
            img={Customerservice}
          />
        </Backgroundcontainer>
        <Analytics />
      </div>
    </>
  );
};

export default Orderflowsales;
