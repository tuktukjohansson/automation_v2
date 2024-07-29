import React from "react";
import { Link } from "react-router-dom";
import "./redirect-buttons.scss";

const RedirectButtons = props => {
  return (
    <div className="redirect-container">
      <Link to="/" className="button1">
        <div className="text">{props.button1text}</div>
      </Link>
      <Link to="/" className="button2">
        <div className="text">{props.button2text}</div>
      </Link>
    </div>
  );
};

export default RedirectButtons;
