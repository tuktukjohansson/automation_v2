import React from "react";
import "./five-props-container.scss";

const FivePropContainer = props => {
  return (
    <div className="FivePropContainer">
      <div className="flexrow1">
        <div className="flexitem1">
          <img src={props.img1} alt={props.alt1} />
          <div>{props.title1}</div>
        </div>
        <div className="flexitem2"></div>
      </div>
      <div className="flexrow2">
        <div className="flexitems">
          <div className="flexitem1"></div>
          <div className="flexitem2"></div>
        </div>
        <div className="flexitem">
          <img src={props.img5} alt={props.alt5} />
        </div>
      </div>
    </div>
  );
};

export default FivePropContainer;
