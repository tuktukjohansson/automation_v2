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
              <div className="dropping-item">Erbjudande</div>
              <div className="dropdown">
                <div className="dropdown-container">
                  <a className="dropdown-item" href="/offers/orderflow">
                    <div className="image-container">
                      <img className="image" src={violet_gradient_logo} />
                    </div>
                    <div className="text-container">
                      <div className="title">OrderFlow (Sales)</div>
                      <div className="description">Analyse your workflow</div>
                    </div>
                  </a>
                  <div className="line" />
                  <a className="dropdown-item" href="/offers/orderflow">
                    <div className="image-container">
                      <img className="image" src={violet_gradient_logo} />
                    </div>
                    <div className="text-container">
                      <div className="title">OrderFlow (Purchase)</div>
                      <div className="description">Analyse your workflow</div>
                    </div>
                  </a>
                </div>
                <div className="dropdown-container">
                  <a className="dropdown-item" href="/offers/analytics">
                    <div className="image-container">
                      <img className="image" src={violet_gradient_logo} />
                    </div>
                    <div className="text-container">
                      <div className="title">Analys</div>
                      <div className="description">Analyse your workflow</div>
                    </div>
                  </a>
                  <div className="line" />
                  <a className="dropdown-item" href="/offers/automation">
                    <div className="image-container">
                      <img className="image" src={violet_gradient_logo} />
                    </div>
                    <div className="text-container">
                      <div className="title">Intelligent automation</div>
                      <div className="description">Analyse your workflow</div>
                    </div>
                  </a>
                </div>
              </div>
              <div className="dropdown-arrow" />
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
