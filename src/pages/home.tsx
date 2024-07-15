import React from "react";

// Components
import Container from "../components/container/container.tsx";
import Gradienttext from "../components/gradient-text/gradient-text.tsx";
import Slideshow from "../components/slideshow/slideshow.tsx";
import ImageTextBox from "../components/image-text-container/image-text.tsx";
import ThreeBoxes from "../components/three-boxes/three-boxes.tsx";

// Images
import Sork from "../images/component-images/sork.png";

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
    </>
  );
};

export default Home;
