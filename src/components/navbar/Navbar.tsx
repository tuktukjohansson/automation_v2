import React, { useState } from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";
import { Sling as Hamburger } from "hamburger-react";
import { IoMdArrowDropdownCircle } from "react-icons/io";

// Images
import violet_gradient_logo from "../../images/logos/violet_automation_gradient.png";

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  const [isProductOpen, setProductOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!isOpen);
  };

  const toggleProducts = () => {
    setProductOpen(!isProductOpen);
  };

  return (
    <>
      <div className={`dropdown-content-mobile ${isOpen ? "open" : ""}`}>
        <div className="dropdown-links-wrapper">
          <div className="dropdown-link" onClick={toggleProducts}>
            <div className="dropdown-text">
              <div className="dropdown-title">Erbjudande</div>
              <div className={`arrow-icon ${isProductOpen ? "open" : ""}`}>
                <IoMdArrowDropdownCircle />
              </div>
            </div>
            <div className={`products-content ${isProductOpen ? "open" : ""}`}>
              <Link onClick={toggleMenu} className="products-link" to="/">
                Analys
              </Link>
              <Link onClick={toggleMenu} className="products-link" to="/">
                Workshop
              </Link>
              <Link onClick={toggleMenu} className="products-link" to="/">
                OrderFlow
              </Link>
            </div>
          </div>
          <Link className="sublink" onClick={toggleMenu} to="/">
            Kunder
          </Link>
          <Link className="sublink" onClick={toggleMenu} to="/">
            Företag
          </Link>
          <Link className="sublink" onClick={toggleMenu} to="/">
            Kontakt
          </Link>
          <Link className="demo-button-2" onClick={toggleMenu} to="/demo">
            Boka demo
          </Link>
        </div>
      </div>
      <div className="navbar-container">
        <div className="navbar">
          <Link className="logo-wrapper" to="/">
            <img
              className="logo-img"
              src={violet_gradient_logo}
              alt="Violet "
            ></img>
          </Link>
          <div className={`navbar-content ${isOpen ? "open" : ""}`}>
            <li className="navbar-dropdown">
              <a href="#">Erbjudande</a>
              <div className="dropdown">
                <a href="#">Analys</a>
                <a href="#">Workshop</a>
                <a href="#">OrderFlow</a>
              </div>
            </li>
            <Link className="nav-link" to="/demo">
              Kunder
            </Link>
            <Link className="nav-link" to="/demo">
              Företag
            </Link>
            <Link className="nav-link" to="/demo">
              Kontakt
            </Link>
          </div>
          <Link className="demo-button" to="/demo">
            Boka demo
          </Link>
          <div className="hamburger-container">
            <Hamburger toggled={isOpen} toggle={setOpen} size={40} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
