import React from "react";
import "./gradient-text.scss";

const Gradienttext = props => {
  return props.secondGradient ? (
    <span className="gradient-text-2">{props.text}</span>
  ) : (
    <span className="gradient-text">{props.text}</span>
  );
};
export default Gradienttext;
