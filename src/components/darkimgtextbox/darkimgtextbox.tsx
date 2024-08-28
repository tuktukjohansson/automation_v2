import React from "react";
import "./darkimgtextbox.scss";

const DarkImageTextBox = props => {
  return (
    <div className="darktextbox-wrapper">
      <img className="image" src={props.img} alt={props.alt} />
      <div className="text-overlay">
        <div className="title">{props.title}</div>
        <div className="description">{props.description}</div>
        <a className="redirect" href="/contact">
          Kontakta oss
        </a>
      </div>
    </div>
  );
};

export default DarkImageTextBox;
