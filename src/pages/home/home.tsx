import React from "react";

// Components
import Container from "../../components/container/container.tsx";
import Gradienttext from "../../components/gradient-text/gradient-text.tsx";
import Slideshow from "../../components/slideshow/slideshow.tsx";
import ImageTextBox from "../../components/image-text-container/image-text.tsx";
import ThreeBoxes from "../../components/three-boxes/three-boxes.tsx";
import Customer from "../../components/customer-case/customer.tsx";
import RedirectButtons from "../../components/redirect-buttons/redirect-buttons.tsx";

// Images
import Sork from "../../images/component-images/sork.png";
import Sork1 from "../../images/component-images/sork1.png";
import Sork2 from "../../images/component-images/sork2.png";
import Sork3 from "../../images/component-images/sork3.png";
import "./home.scss";
import { useTranslation, Trans } from "react-i18next";
import { Fade } from "react-awesome-reveal";

const Home = () => {
  const { t } = useTranslation();
  return (
    <div className="homepage">
      {/* ----------------------------- Block One ----------------------------- */}
      <div className="gradient-one" />
      <Fade delay={200} duration={1000}>
        <Container>
          <h1 className="gradient-title-one" style={{ marginTop: 200 }}>
            {t("home.textbox1.gradienttitle.part1")}
            <br />
            <Gradienttext text={t("home.textbox1.gradienttitle.part2")} />{" "}
            {t("home.textbox1.gradienttitle.part3")}
          </h1>

          <div className="block-one-description">
            {t("home.textbox1.description")}
          </div>
        </Container>
      </Fade>
      {/* ----------------------------- Block One and a half ----------------------------- */}
      <Fade delay={400} duration={1000}>
        <Container>
          <RedirectButtons
            button1text={t("components.buttons.talk-to-us")}
            button2text={t("components.buttons.how-does-it-work")}
          ></RedirectButtons>
        </Container>
      </Fade>
      <Container>
        <Slideshow />
      </Container>

      {/* ----------------------------- Block Two ----------------------------- */}
      <Fade delay={500} duration={1000}>
        <Container>
          <ImageTextBox
            img={Sork}
            description={"Collabosorking and Sharing"}
            description2={
              "Users can share sorks or collaborate with sork members, assigning sorks, leaving sorks, or sharing sorks."
            }
          />
        </Container>
      </Fade>
      {/* ----------------------------- Block Three ----------------------------- */}
      <Fade delay={500} duration={1000}>
        <Container>
          <h1 className="gradient-title">
            {t("home.textbox2.gradienttitle.part1")}{" "}
            <Gradienttext
              secondGradient={true}
              text={t("home.textbox2.gradienttitle.part2")}
            />
          </h1>
          <div className="description-left">
            <p>{t("home.textbox2.description")}</p>
          </div>
          <ThreeBoxes
            box1title="Analys"
            box1description="Sorkar facilitate clearer and more effective communication among team members, reducing misunderstandings and increasing productivity."
            box2title="Utveckling"
            box2description="With Sorkar, teamwork is streamlined as these tools allow for seamless sharing of ideas and resources, fostering a more collaborative environment."
            box3title="Automation"
            box3description="Sorkar automate repetitive tasks and provide intelligent solutions, freeing up time for employees to focus on more strategic and creative work."
          />
        </Container>
      </Fade>
      {/* ----------------------------- Block Four ----------------------------- */}
      <Container>
        <h1 className="gradient-title">
          {t("home.textbox3.gradienttitle.part1")}{" "}
          <Gradienttext
            secondGradient={true}
            text={t("home.textbox3.gradienttitle.part2")}
          />
        </h1>
        <div className="description-left">
          <p>{t("home.textbox3.description")}</p>
        </div>
        <div className="flex-container">
          <Fade delay={200} duration={1000}>
            <Customer
              href="clients"
              title="Gothes"
              description="We automated Gothes' entire inventory management system, reducing manual work, minimizing errors, and significantly boosting overall efficiency."
              img={Sork1}
              alt="Sork1"
            />
          </Fade>
          <Fade delay={300} duration={1000}>
            <Customer
              href="clients"
              title="Debe"
              description="Our automation solutions transformed Debe's invoicing process, enabling automatic generation, processing, and tracking of invoices to streamline their financial operations."
              img={Sork2}
              alt="Sork2"
            />
          </Fade>
          <Fade delay={400} duration={1000}>
            <Customer
              href="clients"
              title="Dirridoo"
              description="We developed an AI-driven customer support system for Dirridoo, automating responses to common inquiries and freeing up their team to focus on complex issues."
              img={Sork3}
              alt="Sork3"
            />
          </Fade>
        </div>
      </Container>
    </div>
  );
};

export default Home;
