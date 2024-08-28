import React from "react";
import "./slideshow.scss";
import debe_logo from "../../images/clients/logos/debe_logo.webp";
import gothes_logo from "../../images/clients/logos/gothes_logo.webp";
import dirridoo_logo from "../../images/clients/logos/dirridoo_logo.webp";
import elbogen_logo from "../../images/clients/logos/elbogen_logo.webp";
import hsb_logo from "../../images/clients/logos/hsb_logo.webp";
import maxm_logo from "../../images/clients/logos/maxm_logo.webp";
import xr_logo from "../../images/clients/logos/xr_logo.webp";
import apt_logo from "../../images/clients/logos/apt_logo.webp";
import byggbeslag_logo from "../../images/clients/logos/byggbeslag_logo.webp";
import evidensia_logo from "../../images/clients/logos/evidensia_logo.webp";
import nordfarm_logo from "../../images/clients/logos/nordfarm_logo.webp";
import abus_logo from "../../images/clients/logos/abus_logo.webp";
import ah_logo from "../../images/clients/logos/ah_logo.webp";

const Slideshow = () => {
  return (
    <div>
      <div className="slider">
        <div className="slide-track">
          {/* Slide module 1 */}
          <div className="slide">
            <img src={debe_logo} alt="Debe" />
          </div>
          <div className="slide">
            <img src={gothes_logo} alt="Gothes" />
          </div>
          <div className="slide">
            <img src={dirridoo_logo} alt="Didriksons" />
          </div>
          <div className="slide">
            <img src={elbogen_logo} alt="Elbogen" />
          </div>
          <div className="slide">
            <img src={hsb_logo} alt="HSB" />
          </div>
          <div className="slide">
            <img src={maxm_logo} alt="MaxM" />
          </div>
          <div className="slide">
            <img src={xr_logo} alt="XR" />
          </div>
          <div className="slide">
            <img src={apt_logo} alt="AP&T" />
          </div>
          <div className="slide">
            <img src={evidensia_logo} alt="Evidensia" />
          </div>
          <div className="slide">
            <img src={nordfarm_logo} alt="Nordfarm" />
          </div>
          <div className="slide">
            <img src={abus_logo} alt="Abus" />
          </div>
          <div className="slide">
            <img src={ah_logo} alt="AH" />
          </div>
          {/* Slide module 2 */}
          <div className="slide">
            <img src={debe_logo} alt="Debe" />
          </div>
          <div className="slide">
            <img src={gothes_logo} alt="Gothes" />
          </div>
          <div className="slide">
            <img src={dirridoo_logo} alt="Didriksons" />
          </div>
          <div className="slide">
            <img src={elbogen_logo} alt="Elbogen" />
          </div>
          <div className="slide">
            <img src={hsb_logo} alt="HSB" />
          </div>
          <div className="slide">
            <img src={maxm_logo} alt="MaxM" />
          </div>
          <div className="slide">
            <img src={xr_logo} alt="XR" />
          </div>
          <div className="slide">
            <img src={apt_logo} alt="AP&T" />
          </div>
          <div className="slide">
            <img src={evidensia_logo} alt="Evidensia" />
          </div>
          <div className="slide">
            <img src={nordfarm_logo} alt="Nordfarm" />
          </div>
          <div className="slide">
            <img src={abus_logo} alt="Abus" />
          </div>
          <div className="slide">
            <img src={ah_logo} alt="AH" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slideshow;
