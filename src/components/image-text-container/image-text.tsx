import React from "react";
import "./image-text.scss";

const ImageTextBox = props => {
  return (
    <div className="imagetextbox-wrapper">
      <img className="image" src={props.img} />
      <div className="text-overlay">
        <div className="description">{props.description}</div>
        <div className="small-description">{props.description2}</div>
      </div>
    </div>
  );
};

export default ImageTextBox;
