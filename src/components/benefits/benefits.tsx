import React from "react";
import "./benefits.scss";

// Libs
import { useTranslation, Trans } from "react-i18next";

const Benefits = () => {
  const { t } = useTranslation();
  return (
    <div className="benefits-component">
      <div className="title">{t("offersPage.benefits.title")}</div>
      <div className="benefits">
        <div className="benefit">
          <img />
          <div className="title"></div>
          <div className="description"></div>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
