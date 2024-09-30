import React from "react";
import "./gradient-text.scss";

const Gradienttext = props => {
  let className = "gradient-text";

  if (props.secondGradient) {
    className = "gradient-text-2";
  } else if (props.thirdGradient) {
    className = "gradient-text-3";
  }

  return <span className={className}>{props.text}</span>;
};

export default Gradienttext;
