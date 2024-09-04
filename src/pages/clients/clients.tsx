import React from "react";
import "./clients.scss";
import { Fade } from "react-awesome-reveal";

// Components
import Container from "../../components/container/container.tsx";
import Customer from "../../components/customer-case/customer.tsx";

// Images
import Gothes_logo from "../../images/clients/customs/gothes_logo_banner.webp";
import Hsb_logo from "../../images/clients/customs/hsb_logo_banner.webp";
import Maxm_logo from "../../images/clients/customs/maxm_logo_banner.webp";
import Gradienttext from "../../components/gradient-text/gradient-text.tsx";

const Clients = () => {
  return (
    <>
      {/* ----------------------------- Block One ----------------------------- */}
      <div className="clientpage">
        <Container>
          <h1 className="gradient-title">
            Läs mer om våra{" "}
            <Gradienttext secondGradient={true} text="kundcases" />
          </h1>
          <p className="clientdescription">
            Här kan ni läsa mer om några av våra kunders fall där vi sorkar
            loss, sorkar och sorkar ännu mer. Men viktigast av allt så sorkar
            vi.
          </p>
          <div className="kundcases">
            <Fade delay={200} duration={1000}>
              <Customer
                href="clients/gothes"
                title="Gothes"
                description="We automated Gothes' entire inventory management system, reducing manual work, minimizing errors, and significantly boosting overall efficiency."
                img={Gothes_logo}
                alt="Gothes"
              />
            </Fade>
            <Fade delay={300} duration={1000}>
              <Customer
                href="clients/hsb"
                title="HSB"
                description="Our automation solutions transformed Debe's invoicing process, enabling automatic generation, processing, and tracking of invoices to streamline their financial operations."
                img={Hsb_logo}
                alt="Didriksons"
              />
            </Fade>
            <Fade delay={400} duration={1000}>
              <Customer
                href="clients/maxm"
                title="Max Matthiessen"
                description="We developed an AI-driven customer support system for Dirridoo, automating responses to common inquiries and freeing up their team to focus on complex issues."
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
