import React from "react";
import "./aboutbox.scss";

// Images

const Aboutbox = props => {
  return (
    <div className="aboutbox">
      <img src={props.img} className="background" />
      <img src={props.img2} className="logo" />
    </div>
  );
};

export default Aboutbox;
