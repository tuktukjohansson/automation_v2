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
          <div className="title">{props.titlepart1}</div>
          <Gradienttext text={props.titlepart2} />
        </div>
        <div className="description">{props.description}</div>
        <a className="contactusbutton" href="/contact">
          {t("orderflowsales.computerbox.button")}
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
