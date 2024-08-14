import React from "react";
import "./customer.scss";

const Customer = props => {
  return (
    <a href={props.href} className="customer">
      <div className="img-container">
        <img className="img" alt={props.alt} src={props.img} />
      </div>
      <div className="text-container">
        <div className="title">{props.title}</div>
        <div className="description">{props.description}</div>
      </div>
    </a>
  );
};

export default Customer;
