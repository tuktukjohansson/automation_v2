import React from "react";

// Components
import Container from "../../../components/container/container.tsx";

// Images

import "./analytics.scss";

const Analytics = () => {
  return (
    <>
      {/* ----------------------------- Block One ----------------------------- */}
      <div className="analytics-double-gradient">
        <div className="gradient-left" />
        <div className="gradient-right" />
      </div>
      <div className="analyticsPage">
        <div className="section-one">
          <Container>
            <div className="analytics-title">
              Analys
              <br />
            </div>
            <div className="analytics-description1">
              Vet ni att ni vill komma igång med generativ AI och automation men
              undrar vad som är första steget? Tvekar ni på om ni ska sätta
              igång med förändringsresan nu eller vänta ett tag till?
            </div>
            <div className="analytics-description2">
              Analys är Violet Automations konsulttjänster som analyserar och
              rådger företag på AI-resan och kommer i två tappningar Strategisk
              kartläggning och Processkartläggning.
            </div>
          </Container>
        </div>
      </div>
    </>
  );
};

export default Analytics;
