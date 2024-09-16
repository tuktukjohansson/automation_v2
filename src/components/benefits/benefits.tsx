import React from "react";
import "./benefits.scss";

// Libs
import { useTranslation, Trans } from "react-i18next";

import lottie from "lottie-web";
import { defineElement } from "@lordicon/element";
import Gradienttext from "../gradient-text/gradient-text.tsx";

defineElement(lottie.loadAnimation);

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "lord-icon": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      > & {
        src?: string;
        trigger?: string;
        colors?: string;
        [key: string]: any; // Allows additional custom attributes
      };
    }
  }
}

const Benefits = () => {
  const { t } = useTranslation();
  return (
    <div className="benefits-component">
      <h1 className="gradient-title-one">
        <Gradienttext text={t("orderflowsales.benefits.titlepart1")} />{" "}
        {t("orderflowsales.benefits.titlepart2")}
      </h1>
      <div className="benefits">
        <div className="benefit">
          <div className="lordi">
            <lord-icon
              style={{ width: "100px", height: "100px" }}
              src="https://cdn.lordicon.com/aqrzgjfy.json"
              stroke="bold"
              trigger="hover"
              colors="primary:#2516c7,secondary:#e83a30"
            ></lord-icon>
          </div>
          <div className="title">
            {t("orderflowsales.benefits.item1.title")}
          </div>
          <div className="description">
            {t("orderflowsales.benefits.item1.description")}
          </div>
        </div>
        <div className="benefit">
          <div className="lordi">
            <lord-icon
              style={{ width: "100px", height: "100px" }}
              src="https://cdn.lordicon.com/eackfddu.json"
              stroke="bold"
              trigger="hover"
              colors="primary:#2516c7,secondary:#e83a30"
            ></lord-icon>
          </div>
          <div className="title">
            {t("orderflowsales.benefits.item2.title")}
          </div>
          <div className="description">
            {t("orderflowsales.benefits.item2.description")}
          </div>
        </div>
        <div className="benefit">
          <div className="lordi">
            <lord-icon
              style={{ width: "100px", height: "100px" }}
              src="https://cdn.lordicon.com/vlrdqeoi.json"
              stroke="bold"
              trigger="hover"
              colors="primary:#2516c7,secondary:#e83a30"
            ></lord-icon>
          </div>
          <div className="title">
            {t("orderflowsales.benefits.item3.title")}
          </div>
          <div className="description">
            {t("orderflowsales.benefits.item3.description")}
          </div>
        </div>
        <div className="benefit">
          <div className="lordi">
            <lord-icon
              style={{ width: "100px", height: "100px" }}
              src="https://cdn.lordicon.com/txahugpp.json"
              stroke="bold"
              trigger="hover"
              colors="primary:#2516c7,secondary:#e83a30"
            ></lord-icon>
          </div>
          <div className="title">
            {t("orderflowsales.benefits.item4.title")}
          </div>
          <div className="description">
            {t("orderflowsales.benefits.item4.description")}
          </div>
        </div>
        <div className="benefit">
          <div className="lordi">
            <lord-icon
              style={{ width: "100px", height: "100px" }}
              src="https://cdn.lordicon.com/bypurkml.json"
              stroke="bold"
              trigger="hover"
              colors="primary:#2516c7,secondary:#e83a30"
            ></lord-icon>
          </div>
          <div className="title">
            {t("orderflowsales.benefits.item5.title")}
          </div>
          <div className="description">
            {t("orderflowsales.benefits.item5.description")}
          </div>
        </div>
        <div className="benefit">
          <div className="lordi">
            <lord-icon
              style={{ width: "100px", height: "100px" }}
              src="https://cdn.lordicon.com/ngfucofr.json"
              stroke="bold"
              trigger="hover"
              colors="primary:#2516c7,secondary:#e83a30"
            ></lord-icon>
          </div>
          <div className="title">
            {t("orderflowsales.benefits.item6.title")}
          </div>
          <div className="description">
            {t("orderflowsales.benefits.item6.description")}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
