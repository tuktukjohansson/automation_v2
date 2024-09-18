import React from "react";
import { useTranslation } from "react-i18next";
import "./darkimgtextbox.scss";

const DarkImageTextBox = props => {
  const { t } = useTranslation();
  return (
    <div className="darktextbox-wrapper">
      <img className="image" src={props.img} alt={props.alt} />
      <div className="text-overlay">
        <div className="title">{props.title}</div>
        <div className="description">{props.description}</div>
        <a className="redirect" href="/contact">
          {props.button}
        </a>
      </div>
    </div>
  );
};

export default DarkImageTextBox;
