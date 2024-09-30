import React from "react";
import "./benefits.scss";

// Libs
import { useTranslation, Trans } from "react-i18next";

import lottie from "lottie-web";
import { defineElement } from "@lordicon/element";
import Gradienttext from "../gradient-text/gradient-text.tsx";

import Clock from "../../lordicons/icondisplay.tsx";
import IconDisplay from "../../lordicons/icondisplay.tsx";

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
        {t("orderflowsales.benefits.titlepart1")}{" "}
        <Gradienttext
          secondGradient={true}
          text={t("orderflowsales.benefits.titlepart2")}
        />{" "}
        {t("orderflowsales.benefits.titlepart3")}
      </h1>
      <div className="benefits">
        <div className="benefit">
          <div className="lordi">
            <IconDisplay iconType={"clock"} />
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
            <IconDisplay iconType={"handshake"} />
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
            <IconDisplay iconType={"checkbox"} />
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
            <IconDisplay iconType={"puzzle"} />
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
            <IconDisplay iconType={"threeavatars"} />
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
            <IconDisplay iconType={"speedometer"} />
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
