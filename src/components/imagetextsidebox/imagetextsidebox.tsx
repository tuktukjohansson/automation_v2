import React from "react";
import "./imagetextsidebox.scss";

const ImageTextSideBox = props => {
  return (
    <div className={`imagetextsidebox ${props.reverse ? "reverse" : ""}`}>
      <img className="image" alt={props.alt} src={props.img} />
      <div className="text-overlay">
        <div className="title">{props.title}</div>
        <div className="description">{props.description}</div>
        <div className="description">{props.description2}</div>
        <div className="description">{props.description3}</div>
        <div className="description">{props.description4}</div>
      </div>
    </div>
  );
};

export default ImageTextSideBox;
