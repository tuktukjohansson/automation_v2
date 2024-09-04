import React from "react";
import { Link } from "react-router-dom";
import "./redirect-buttons.scss";

const RedirectButtons = props => {
  return (
    <div className="redirect-container">
      <Link to={props.href1} className="button1">
        <div className="text">{props.button1text}</div>
      </Link>
      <Link to={props.href2} className="button2">
        <div className="text">{props.button2text}</div>
      </Link>
    </div>
  );
};

export default RedirectButtons;
