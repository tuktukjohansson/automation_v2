import React from "react";
import "./Navbar.scss";

// Images
import violet_gradient_logo from "../../images/logos/violet_automation_gradient.png";

const Navbar = () => {
  return (
    <div className="footer">
      <div className="line"></div>
      <div className="logo_wrapper">
        <img className="logo" src={violet_gradient_logo} />
      </div>
    </div>
  );
};

export default Navbar;
