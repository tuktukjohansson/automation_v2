import React, { useState } from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";
import { Sling as Hamburger } from "hamburger-react";
import { IoMdArrowDropdownCircle } from "react-icons/io";
import { useTranslation } from "react-i18next";

// Images
import violet_gradient_logo from "../../images/violet/logo/violet_automation_gradient.webp";

const Navbar = () => {
  const { t } = useTranslation();
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
              <div className="dropdown-title">{t("nav.products.category")}</div>
              <div className={`arrow-icon ${isProductOpen ? "open" : ""}`}>
                <IoMdArrowDropdownCircle />
              </div>
            </div>
            <div className={`products-content ${isProductOpen ? "open" : ""}`}>
              <div className="product-category">PRODUKTER</div>
              <Link
                onClick={toggleMenu}
                className="products-link"
                to="/offers/orderflowsales"
              >
                {t("nav.products.product3.title")}
              </Link>
              <Link
                onClick={toggleMenu}
                className="products-link"
                to="/offers/orderflowpurchase"
              >
                {t("nav.products.product4.title")}
              </Link>
              <div className="product-category">INFO</div>
              <Link
                onClick={toggleMenu}
                className="products-link"
                to="/offers/analytics"
              >
                {t("nav.products.product1.title")}
              </Link>
              <Link
                onClick={toggleMenu}
                className="products-link"
                to="/offers/Automation"
              >
                {t("nav.products.product2.title")}
              </Link>
            </div>
          </div>
          <Link className="sublink" onClick={toggleMenu} to="/clients">
            {t("nav.clients")}
          </Link>
          <Link className="sublink" onClick={toggleMenu} to="/about">
            {t("nav.about")}
          </Link>
          <Link className="sublink" onClick={toggleMenu} to="/contact">
            {t("nav.contact")}
          </Link>
          {/* <Link className="demo-button-2" onClick={toggleMenu} to="/demo">
            Boka möte
          </Link> */}
        </div>
      </div>
      <div className="navbar-container">
        <div className="navbar">
          <Link className="logo-wrapper" to="/">
            <img
              className="logo-img"
              src={violet_gradient_logo}
              alt="Violet Automation"
            ></img>
          </Link>
          <div className={`navbar-content ${isOpen ? "open" : ""}`}>
            <li className="navbar-dropdown">
              <div className="dropping-item">{t("nav.products.category")}</div>
              <div className="dropdown">
                <div className="dropdown-container">
                  <a className="dropdown-item" href="/offers/orderflowsales">
                    <div className="image-container">
                      <img
                        className="image"
                        alt="Violet Automation"
                        src={violet_gradient_logo}
                      />
                    </div>
                    <div className="text-container">
                      <div className="title">
                        {t("nav.products.product3.title")}
                      </div>
                      <div className="description">
                        {t("nav.products.product3.description")}
                      </div>
                    </div>
                  </a>
                  <div className="line" />
                  <a className="dropdown-item" href="/offers/orderflowpurchase">
                    <div className="image-container">
                      <img
                        className="image"
                        alt="Violet Automation"
                        src={violet_gradient_logo}
                      />
                    </div>
                    <div className="text-container">
                      <div className="title">
                        {t("nav.products.product4.title")}
                      </div>
                      <div className="description">
                        {t("nav.products.product4.description")}
                      </div>
                    </div>
                  </a>
                </div>
                <div className="dropdown-container">
                  <a className="dropdown-item" href="/offers/analytics">
                    <div className="image-container">
                      <img
                        className="image"
                        alt="Violet Automation"
                        src={violet_gradient_logo}
                      />
                    </div>
                    <div className="text-container">
                      <div className="title">
                        {t("nav.products.product1.title")}
                      </div>
                      <div className="description">
                        {t("nav.products.product1.description")}
                      </div>
                    </div>
                  </a>
                  <div className="line" />
                  <a className="dropdown-item" href="/offers/automation">
                    <div className="image-container">
                      <img
                        className="image"
                        alt="Violet Automation"
                        src={violet_gradient_logo}
                      />
                    </div>
                    <div className="text-container">
                      <div className="title">
                        {t("nav.products.product2.title")}
                      </div>
                      <div className="description">
                        {t("nav.products.product2.description")}
                      </div>
                    </div>
                  </a>
                </div>
              </div>
              <div className="dropdown-arrow" />
            </li>
            <Link className="nav-link" to="/clients">
              {t("nav.clients")}
            </Link>
            <Link className="nav-link" to="/about">
              {t("nav.about")}
            </Link>
            <Link className="nav-link" to="/contact">
              {t("nav.contact")}
            </Link>
          </div>
          <Link className="demo-button" to="/demo">
            {t("nav.button")}
          </Link>
          <div className="hamburger-container">
            <Hamburger
              label="hamburger-button"
              toggled={isOpen}
              toggle={setOpen}
              size={40}
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default Navbar;
