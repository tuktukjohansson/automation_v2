import React from "react";
import "./backgroundcontainer.scss";

const BackgroundContainer = props => {
  return (
    <div className="wrapper">
      <div className="backgroundcontainer">{props.children}</div>
    </div>
  );
};

export default BackgroundContainer;
