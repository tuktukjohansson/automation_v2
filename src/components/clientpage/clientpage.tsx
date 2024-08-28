import React from "react";
import "./clientpage.scss";

const Clientpage = props => {
  return (
    <div className="clientwrapper">
      <div className="overimgdescription">{props.overimgdescription}</div>
      <img className="clientimg" src={props.img} alt="Client" />
      <div className="underimgdescription">{props.underimgdescription}</div>
      <div className="textcontainers">
        <div className="containerone">
          <div className="textpoint">
            <div className="title">{props.challengetitle}</div>
            <div className="description">{props.challengedescription}</div>
          </div>
          <div className="textpoint">
            <div className="title">{props.solutiontitle}</div>
            <div className="description">{props.solutiondescription}</div>
          </div>
          <div className="textpoint">
            <div className="title">{props.resulttitle}</div>
            <div className="description">{props.resultdescription}</div>
          </div>
        </div>
        <div className="containertwo">
          <div className="quote">“{props.quote}“</div>
          <div className="techcontainer">
            <div className="text">{props.nameandposition}</div>
            <img className="imgtech" src={props.imgtech} alt="Technician" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clientpage;
