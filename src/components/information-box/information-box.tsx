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
  point1title = "",
  point2title = "",
  point1text1 = "",
  point1text2 = "",
  point1text3 = "",
  point1text4 = "",
  point2text1 = "",
  point2text2 = "",
  point2text3 = "",
  point2text4 = "",
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
        <div className="point-lists">
          <div className="point-list">
            <div className="title">{point1title}</div>
            <ul>
              {point1text1 && <li>{point1text1}</li>}
              {point1text2 && <li>{point1text2}</li>}
              {point1text3 && <li>{point1text3}</li>}
              {point1text4 && <li>{point1text4}</li>}
            </ul>
          </div>
          <div className="point-list">
            <div className="title">{point2title}</div>
            <ol>
              {point2text1 && <li>{point2text1}</li>}
              {point2text2 && <li>{point2text2}</li>}
              {point2text3 && <li>{point2text3}</li>}
              {point2text4 && <li>{point2text4}</li>}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};
export default InformationBox;
