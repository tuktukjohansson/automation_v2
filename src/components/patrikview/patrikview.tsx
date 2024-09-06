import React from "react";
import { useTranslation } from "react-i18next";
import "./patrikview.scss";

// Images

import Patrik from "../../images/violet/patrik/patrik_3.png";

const Patrikview = () => {
  const { t } = useTranslation();
  return (
    <div className="patrikview">
      <div className="textbox">
        <div className="description">{t("about.patrikview.description")}</div>
      </div>
      <div className="patrikcontainer">
        <img className="patrik" src={Patrik} />
        <div className="namebadge">{t("about.patrikview.name")}</div>
      </div>
    </div>
  );
};

export default Patrikview;
