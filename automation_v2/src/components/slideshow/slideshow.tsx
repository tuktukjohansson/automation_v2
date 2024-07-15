import React from "react";
import "./slideshow.scss";
import debe_logo from "../../images/customer-logos/debe_logo.png";
import gothes_logo from "../../images/customer-logos/gothes_logo.png";
import dirridoo_logo from "../../images/customer-logos/dirridoo_logo.png";
import elbogen_logo from "../../images/customer-logos/elbogen_logo.png";
import hsb_logo from "../../images/customer-logos/hsb_logo.png";
import maxm_logo from "../../images/customer-logos/maxm_logo.png";
import xr_logo from "../../images/customer-logos/xr_logo.png";
import apt_logo from "../../images/customer-logos/apt_logo.png";
import byggbeslag_logo from "../../images/customer-logos/byggbeslag_logo.png";
import evidensia_logo from "../../images/customer-logos/evidensia_logo.png";
import nordfarm_logo from "../../images/customer-logos/nordfarm_logo.png";
import abus_logo from "../../images/customer-logos/abus_logo.png";
import ah_logo from "../../images/customer-logos/ah_logo.png";

const Slideshow = () => {
  return (
    <div>
      <div className="slider">
        <div className="slide-track">
          {/* Slide module 1 */}
          <div className="slide">
            <img src={debe_logo} alt="" />
          </div>
          <div className="slide">
            <img src={gothes_logo} alt="" />
          </div>
          <div className="slide">
            <img src={dirridoo_logo} alt="" />
          </div>
          <div className="slide">
            <img src={elbogen_logo} alt="" />
          </div>
          <div className="slide">
            <img src={hsb_logo} alt="" />
          </div>
          <div className="slide">
            <img src={maxm_logo} alt="" />
          </div>
          <div className="slide">
            <img src={xr_logo} alt="" />
          </div>
          <div className="slide">
            <img src={apt_logo} alt="" />
          </div>
          <div className="slide">
            <img src={evidensia_logo} alt="" />
          </div>
          <div className="slide">
            <img src={nordfarm_logo} alt="" />
          </div>
          <div className="slide">
            <img src={abus_logo} alt="" />
          </div>
          <div className="slide">
            <img src={ah_logo} alt="" />
          </div>
          {/* Slide module 2 */}
          <div className="slide">
            <img src={debe_logo} alt="" />
          </div>
          <div className="slide">
            <img src={gothes_logo} alt="" />
          </div>
          <div className="slide">
            <img src={dirridoo_logo} alt="" />
          </div>
          <div className="slide">
            <img src={elbogen_logo} alt="" />
          </div>
          <div className="slide">
            <img src={hsb_logo} alt="" />
          </div>
          <div className="slide">
            <img src={maxm_logo} alt="" />
          </div>
          <div className="slide">
            <img src={xr_logo} alt="" />
          </div>
          <div className="slide">
            <img src={apt_logo} alt="" />
          </div>
          <div className="slide">
            <img src={evidensia_logo} alt="" />
          </div>
          <div className="slide">
            <img src={nordfarm_logo} alt="" />
          </div>
          <div className="slide">
            <img src={abus_logo} alt="" />
          </div>
          <div className="slide">
            <img src={ah_logo} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slideshow;
