import React from "react";
import "./expert.scss";

const Expert = ({
  alt = "",
  img,
  title,
  description,
  button = "",
  buttonhref = "",
}) => {
  return (
    <div className="expert">
      <div className="text-overlay">
        <div className="title">{title}</div>
        {description && <div className="description">{description}</div>}
        <div className="buttoncontainer">
          {button && (
            <a target="_blank" href={buttonhref} className="button">
              {button}
            </a>
          )}
        </div>
      </div>
      <img className="image" alt={alt} src={img} />
    </div>
  );
};
export default Expert;
