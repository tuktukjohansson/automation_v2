import React from "react";
import "./titleanddescription.scss";

const TAD = props => {
  return (
    <div className="titleanddescription">
      {props.title && <div className="title">{props.title}</div>}
      <div className="description">{props.description}</div>
      {props.description2 && (
        <div className="description">{props.description2}</div>
      )}
      {props.description3 && (
        <div className="description">{props.description3}</div>
      )}
      {props.description4 && (
        <div className="description">{props.description4}</div>
      )}
    </div>
  );
};

export default TAD;
