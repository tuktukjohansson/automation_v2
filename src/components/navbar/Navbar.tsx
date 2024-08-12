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
              <Link
                onClick={toggleMenu}
                className="products-link"
                to="/offers/analytics"
              >
                Analys
              </Link>
              <Link
                onClick={toggleMenu}
                className="products-link"
                to="/offers/Automation"
              >
                Automation
              </Link>
              <Link
                onClick={toggleMenu}
                className="products-link"
                to="/offers/orderflow"
              >
                OrderFlow
              </Link>
            </div>
          </div>
          <Link className="sublink" onClick={toggleMenu} to="/clients">
            Kunder
          </Link>
          <Link className="sublink" onClick={toggleMenu} to="/company">
            Företag
          </Link>
          <Link className="sublink" onClick={toggleMenu} to="/contact">
            Kontakt
          </Link>
          <Link className="demo-button-2" onClick={toggleMenu} to="/demo">
            Boka möte
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
              <a>Erbjudande</a>
              <div className="dropdown">
                <a href="/offers/analytics">Analys</a>
                <a href="/offers/Automation">Automation</a>
                <a href="/offers/orderflow">OrderFlow</a>
              </div>
            </li>
            <Link className="nav-link" to="/knowledge">
              Kunskap
            </Link>
            <Link className="nav-link" to="/clients">
              Kunder
            </Link>
            <Link className="nav-link" to="/company">
              Företag
            </Link>
            <Link className="nav-link" to="/contact">
              Kontakt
            </Link>
          </div>
          <Link className="demo-button" to="/demo">
            Boka möte
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
