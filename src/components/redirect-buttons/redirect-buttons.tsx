import React from "react";
import { Link } from "react-router-dom";
import "./redirect-buttons.scss";

const RedirectButtons = props => {
  return (
    <div className="redirect-container">
      <a href={props.href1} className="button1">
        <div className="text">{props.button1text}</div>
      </a>
      <a href={props.href2} className="button2">
        <div className="text">{props.button2text}</div>
      </a>
    </div>
  );
};

export default RedirectButtons;
