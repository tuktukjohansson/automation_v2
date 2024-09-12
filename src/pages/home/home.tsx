import React from "react";
import "./home.scss";

// Components
import { useTranslation } from "react-i18next";
import Container from "../../components/container/container.tsx";
import Gradienttext from "../../components/gradient-text/gradient-text.tsx";
import Slideshow from "../../components/slideshow/slideshow.tsx";
import ImageTextBox from "../../components/image-text-container/image-text.tsx";
import ThreeBoxes from "../../components/three-boxes/three-boxes.tsx";
import Customer from "../../components/customer-case/customer.tsx";
import RedirectButtons from "../../components/redirect-buttons/redirect-buttons.tsx";
import FivePropContainer from "../../components/five-props-container/five-props-container.tsx";
import DarkImageTextBox from "../../components/darkimgtextbox/darkimgtextbox.tsx";

// Images
import DarkComponentImg from "../../images/components/darkcomponentimg.webp";
import Gothes_logo from "../../images/clients/customs/gothes_logo_banner.webp";
import Hsb_logo from "../../images/clients/customs/hsb_logo_banner.webp";
import Maxm_logo from "../../images/clients/customs/maxm_logo_banner.webp";
import aitrain from "../../images/components/aitrain.png";
import aiglasses from "../../images/components/aiglasses.png";

const Home = () => {
  const { t } = useTranslation();
  return (
    <div className="homepage">
      <div className="gradient-one" />
      {/* ----------------------------- Container ----------------------------- */}
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
      {/* ----------------------------- Container ----------------------------- */}
      <Container>
        <RedirectButtons
          button1text={t("components.buttons.talk-to-us")}
          href1="/contact"
          button2text={t("components.buttons.how-does-it-work")}
          href2="#howitworks"
        ></RedirectButtons>
      </Container>
      {/* ----------------------------- Container ----------------------------- */}
      <Container>
        <Slideshow />
      </Container>
      {/* ----------------------------- Container ----------------------------- */}
      <Container>
        <ImageTextBox
          img={aiglasses}
          description={t("home.textimagebox.title")}
          description2={t("home.textimagebox.description")}
          alt="Ai Train"
        />
      </Container>
      {/* ----------------------------- Container ----------------------------- */}
      <Container>
        <h1 className="gradient-title">
          {t("home.fiveimageboxes.titlepart1")}{" "}
          <Gradienttext
            secondGradient={true}
            text={t("home.fiveimageboxes.titlepart2")}
          />{" "}
          {t("home.fiveimageboxes.titlepart3")}
        </h1>
        <FivePropContainer />
      </Container>
      {/* ----------------------------- Container ----------------------------- */}
      <Container>
        <h1 className="gradient-title-scrollto" id="howitworks">
          {t("home.titleandthreeboxes.gradienttitle.part1")}{" "}
          <Gradienttext
            secondGradient={true}
            text={t("home.titleandthreeboxes.gradienttitle.part2")}
          />
        </h1>
        <div className="description-left">
          <p>{t("home.titleandthreeboxes.description")}</p>
        </div>
        <ThreeBoxes
          box1title={t("home.titleandthreeboxes.threeboxes.box1.title")}
          box1description={t(
            "home.titleandthreeboxes.threeboxes.box1.description"
          )}
          box2title={t("home.titleandthreeboxes.threeboxes.box2.title")}
          box2description={t(
            "home.titleandthreeboxes.threeboxes.box2.description"
          )}
          box3title={t("home.titleandthreeboxes.threeboxes.box3.title")}
          box3description={t(
            "home.titleandthreeboxes.threeboxes.box3.description"
          )}
        />
      </Container>
      {/* ----------------------------- Container ----------------------------- */}
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
          <Customer
            href="clients"
            title={t("home.threeimageboxes.box1.title")}
            description={t("home.threeimageboxes.box1.description")}
            img={Gothes_logo}
            alt="Gothes"
          />
          <Customer
            href="clients"
            title={t("home.threeimageboxes.box2.title")}
            description={t("home.threeimageboxes.box2.description")}
            img={Hsb_logo}
            alt="HSB"
          />
          <Customer
            href="clients"
            title={t("home.threeimageboxes.box3.title")}
            description={t("home.threeimageboxes.box3.description")}
            img={Maxm_logo}
            alt="Max M"
          />
        </div>
      </Container>
      {/* ----------------------------- Container ----------------------------- */}
      <Container>
        <DarkImageTextBox
          img={DarkComponentImg}
          title={t("home.darkimgtextbox.title")}
          description={t("home.darkimgtextbox.description")}
          alt="Dark blob wallpaper"
        />
      </Container>
    </div>
  );
};

export default Home;
