import React from "react";
import "./information-box.scss";

const InformationBox = ({
  reverse = false,
  alt = "",
  img,
  title,
  description,
  description2 = "",
  description3 = "",
  description4 = "",
  button = "",
  buttonhref = "",
}) => {
  return (
    <div className={`informationbox ${reverse ? "reverse" : ""}`}>
      <img className="image" alt={alt} src={img} />
      <div className="text-overlay">
        <div className="title">{title}</div>
        {description && <div className="description">{description}</div>}
        {description2 && <div className="description">{description2}</div>}
        {description3 && <div className="description">{description3}</div>}
        {description4 && <div className="description">{description4}</div>}
        <div className="buttoncontainer">
          {button && (
            <a target="_blank" href={buttonhref} className="button">
              {button}
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
export default InformationBox;
