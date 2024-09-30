import React from "react";
import "./callecontainer.scss";
import Gradienttext from "../gradient-text/gradient-text.tsx";

const Callecontainer = props => {
  return (
    <div className="callecontainer">
      <img className="image" alt={props.alt} src={props.img} />
      <div className="text-overlay">
        <div className="gradienttitle">
          {props.titlepart1}{" "}
          <Gradienttext thirdGradient={true} text={props.titlepart2} />
        </div>
        <div className="gradientdescription">
          <Gradienttext
            secondGradient={true}
            text={props.gradientdescription}
          />
        </div>
        <div className="description">{props.description}</div>
        <div className="description">{props.description2}</div>
      </div>
    </div>
  );
};
export default Callecontainer;
