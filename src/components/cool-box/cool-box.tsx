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
          <div className="title">
            {t("orderflowsales.computerbox.titlepart1")}
          </div>
          <Gradienttext text={t("orderflowsales.computerbox.titlepart2")} />
        </div>
        <div className="description">
          {t("orderflowsales.computerbox.description")}
        </div>
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
