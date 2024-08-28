import React from "react";
import "./patrikview.scss";

// Images

import Patrik from "../../images/violet/patrik/patrik_3.png";

const Patrikview = () => {
  return (
    <div className="patrikview">
      <div className="textbox">
        <div className="description">
          Vi är alltid på jakt efter talangfulla och drivna kollegor. Violet
          Automation är måna om ... kultur kultur kultur. Se våra lediga
          tjänster eller lämna in en spontan-ansökan!
        </div>
        <div className="buttoncontainer"></div>
      </div>
      <div className="patrikcontainer">
        <img className="patrik" src={Patrik} />
        <div className="namebadge">Patrik Nyström, CEO</div>
      </div>
    </div>
  );
};

export default Patrikview;
