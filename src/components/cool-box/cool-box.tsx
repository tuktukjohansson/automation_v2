import React from "react";
import "./cool-box.scss";
import { useTranslation } from "react-i18next";
import Gradienttext from "../gradient-text/gradient-text.tsx";

// Images
import OrderFlowComputer from "../../images/components/orderflowmacbook.webp";

const CoolBox = props => {
  const { t } = useTranslation();

  return (
    <div className="oscar-är-sämst">
      <div className="textbox">
        <div className="titlecontainer">
          <div className="title">Experience the Power of</div>
          <Gradienttext text="Sork" />
        </div>
        <div className="description">
          We believe in harnessing the potential of Sorks to provide you with
          tools that empower your finacial decisions, so you can live life on
          your terms .
        </div>
        <a className="contactusbutton" href="/contact">
          Sork with us
        </a>
      </div>
      <div className="imagecontainer">
        <img
          src={OrderFlowComputer}
          alt="OrderFlow Computer"
          className="image"
        />
      </div>
    </div>
  );
};

export default CoolBox;
