import React from "react";
import "./three-boxes.scss";

const ThreeBoxes = props => {
  return (
    <div className="three-boxes-wrapper">
      <div className="box">
        <div className="title">{props.box1title}</div>
        <div className="description">{props.box1description}</div>
      </div>
      <div className="box">
        <div className="title">{props.box2title}</div>
        <div className="description">{props.box2description}</div>
      </div>
      <div className="box">
        <div className="title">{props.box3title}</div>
        <div className="description">{props.box3description}</div>
      </div>
    </div>
  );
};

export default ThreeBoxes;
