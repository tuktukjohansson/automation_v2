import React from "react";

// Components
import Container from "../../components/container/container.tsx";
import Gradienttext from "../../components/gradient-text/gradient-text.tsx";
import Slideshow from "../../components/slideshow/slideshow.tsx";
import ImageTextBox from "../../components/image-text-container/image-text.tsx";
import ThreeBoxes from "../../components/three-boxes/three-boxes.tsx";
import Customer from "../../components/customer-case/customer.tsx";

// Images
import Sork from "../../images/component-images/sork.png";
import Sork1 from "../../images/component-images/sork1.png";
import Sork2 from "../../images/component-images/sork2.png";
import Sork3 from "../../images/component-images/sork3.png";

import "./home.scss";

const Home = () => {
  return (
    <>
      {/* ----------------------------- Block One ----------------------------- */}
      <div className="gradient-one" />
      <Container>
        <h1 className="block-one-title">
          Real-time
          <br />
          <Gradienttext text="sork-only" /> management
        </h1>
        <div className="block-one-description">
          Voles are known for their strong social bonds and affectionate nature,
          providing companionship and emotional support, which can reduce stress
          and promote overall well-being.
        </div>
      </Container>
      <Container>
        <Slideshow />
      </Container>
      {/* ----------------------------- Block Two ----------------------------- */}
      <Container>
        <ImageTextBox
          img={Sork}
          description={"Collabosorking and Sharing"}
          description2={
            "Users can share sorks or collaborate with sork members, assigning sorks, leaving sorks, or sharing sorks."
          }
        />
      </Container>
      {/* ----------------------------- Block Three ----------------------------- */}
      <Container>
        <ThreeBoxes
          box1title="Analys"
          box1description="Sorkar facilitate clearer and more effective communication among team members, reducing misunderstandings and increasing productivity."
          box2title="Utveckling"
          box2description="With Sorkar, teamwork is streamlined as these tools allow for seamless sharing of ideas and resources, fostering a more collaborative environment."
          box3title="Automation"
          box3description="Sorkar automate repetitive tasks and provide intelligent solutions, freeing up time for employees to focus on more strategic and creative work."
        />
      </Container>
      {/* ----------------------------- Block Four ----------------------------- */}
      <Container>
        <div className="flex-container">
          <Customer
            title="Gothes"
            description="We automated Gothes' entire inventory management system, reducing manual work, minimizing errors, and significantly boosting overall efficiency."
            img={Sork1}
          />
          <Customer
            title="Debe"
            description="Our automation solutions transformed Debe's invoicing process, enabling automatic generation, processing, and tracking of invoices to streamline their financial operations."
            img={Sork2}
          />
          <Customer
            title="Dirridoo"
            description="We developed an AI-driven customer support system for Dirridoo, automating responses to common inquiries and freeing up their team to focus on complex issues."
            img={Sork3}
          />
        </div>
      </Container>
    </>
  );
};

export default Home;
