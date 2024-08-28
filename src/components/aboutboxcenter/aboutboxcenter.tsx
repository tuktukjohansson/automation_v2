import React from "react";
import "./aboutboxcenter.scss";

// Images

const Aboutboxcenter = props => {
  return (
    <div className="aboutbox">
      <div className="textcontainer">
        <div className="title">{props.title}</div>
        <div className="desc">{props.description}</div>
        <div className="desc">{props.description2}</div>
      </div>
      <img src={props.img} className="background" />
    </div>
  );
};

export default Aboutboxcenter;
