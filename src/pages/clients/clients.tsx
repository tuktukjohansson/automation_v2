import React from "react";

// Components
import Container from "../../components/container/container.tsx";
import Customer from "../../components/customer-case/customer.tsx";
import Sork1 from "../../images/component-images/sork1.png";
import Sork2 from "../../images/component-images/sork2.png";
import Sork3 from "../../images/component-images/sork3.png";
import { Fade } from "react-awesome-reveal";

// Images

import "./clients.scss";

const Clients = () => {
  return (
    <>
      {/* ----------------------------- Block One ----------------------------- */}
      <div className="clientpage">
        <Container>
          <h1 className="gradient-title">
            Kundcase
            <br />
          </h1>
          <div className="kundcases">
            <Fade delay={200} duration={1000}>
              <Customer
                href="clients/gothes"
                title="Gothes"
                description="We automated Gothes' entire inventory management system, reducing manual work, minimizing errors, and significantly boosting overall efficiency."
                img={Sork1}
                alt="Sork1"
              />
            </Fade>
            <Fade delay={300} duration={1000}>
              <Customer
                href="clients/debe"
                title="Debe"
                description="Our automation solutions transformed Debe's invoicing process, enabling automatic generation, processing, and tracking of invoices to streamline their financial operations."
                img={Sork2}
                alt="Sork2"
              />
            </Fade>
            <Fade delay={400} duration={1000}>
              <Customer
                href="clients/max"
                title="Max"
                description="We developed an AI-driven customer support system for Dirridoo, automating responses to common inquiries and freeing up their team to focus on complex issues."
                img={Sork3}
                alt="Sork3"
              />
            </Fade>
          </div>
        </Container>
      </div>
    </>
  );
};
export default Clients;
