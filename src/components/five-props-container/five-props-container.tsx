import React from "react";
import "./five-props-container.scss";
import { useTranslation } from "react-i18next";

// Images
import o_sv from "../../images/components/o_sv.png";
import oe_sv from "../../images/components/oe_sv.png";
import o_en from "../../images/components/o_en.png";
import oe_en from "../../images/components/oe_en.png";
import office from "../../images/components/analytics.png";
import us from "../../images/violet/about_us/us2.png";
import blob from "../../images/components/blob1.png";
import blob2 from "../../images/components/blob2.png";
import analyticsbanner from "../../images/components/analyticsbanner.png";
import halftorderflow from "../../images/violet/orderflow/halftorderflow.png";

const FivePropContainer = () => {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;
  const orderFlowImages =
    currentLanguage === "sv" ? [o_sv, oe_sv] : [o_en, oe_en];
  console.log(currentLanguage);
  return (
    <div className="FivePropContainer">
      <div className="flexrow1">
        <a className="flexitem1" href="/analytics">
          <img src={office} alt="office" />
          <div>
            <div className="title">
              {t("home.fiveimageboxes.imageboxes.imagebox1.title")}
            </div>
            <div className="description">
              {t("home.fiveimageboxes.imageboxes.imagebox1.description")}
            </div>
          </div>
        </a>
        <a className="flexitem2" href="/orderflowsales">
          <div className="textcontainer">
            <div className="title">
              {t("home.fiveimageboxes.imageboxes.imagebox2.title")}
            </div>
            <div className="description">
              {t("home.fiveimageboxes.imageboxes.imagebox2.description")}
            </div>
          </div>
          <div className="imagecontainer">
            {orderFlowImages.map((image, index) => (
              <img key={index} src={image} alt={`order image ${index}`} />
            ))}
          </div>
          <img className="orderflowimage" src={halftorderflow} />
        </a>
      </div>
      <div className="flexrow2">
        <div className="flexitems">
          <a className="flexitem1" href="/services/automation">
            <div className="textcontainer">
              <div className="title">
                {t("home.fiveimageboxes.imageboxes.imagebox3.title")}
              </div>
              <div className="description">
                {t("home.fiveimageboxes.imageboxes.imagebox3.description")}
              </div>
            </div>
            <img
              className="blob"
              src={analyticsbanner}
              alt="intelligent automation"
            />
          </a>
          <a className="flexitem2" href="/contact">
            <div className="textcontainer">
              <div className="title">
                {t("home.fiveimageboxes.imageboxes.imagebox4.title")}
              </div>
              <div className="description">
                {t("home.fiveimageboxes.imageboxes.imagebox4.description")}
              </div>
            </div>
            <img className="blob" src={blob} alt="intelligent automation" />
            <img className="blob2" src={blob2} alt="intelligent automation" />
          </a>
        </div>
        <a className="flexitem" href="/home">
          <div className="title">Om oss</div>
          <img src={us} alt="us" />
        </a>
      </div>
    </div>
  );
};

export default FivePropContainer;
