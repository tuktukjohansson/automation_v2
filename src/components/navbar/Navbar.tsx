import React, { useState, useEffect } from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";
import { Sling as Hamburger } from "hamburger-react";

import { useTranslation } from "react-i18next";

// Images
import violet_gradient_logo from "../../images/violet/logo/violet_automation_gradient.webp";
import violet_confirmation from "../../images/violet/products/orderflow_confirmation.png";
import violet_sales from "../../images/violet/products/orderflow_sales.png";
import arrow from "../../images/components/arrow.png";

const Navbar = () => {
  const { t } = useTranslation();
  const [isOpen, setOpen] = useState(false);
  const [isProductOpen, setProductOpen] = useState(false);
  const [isServiceOpen, setServiceOpen] = useState(false);
  const toggleMenu = () => {
    setOpen(!isOpen);
  };

  const toggleProducts = () => {
    setProductOpen(!isProductOpen);
  };

  const toggleServices = () => {
    setServiceOpen(!isServiceOpen);
  };

  return (
    <>
      <div className={`dropdown-content-mobile ${isOpen ? "open" : ""}`}>
        <div className="dropdown-links-wrapper">
          <div className="dropdown-link" onClick={toggleServices}>
            <div className="dropdown-text">
              <div className="dropdown-title">{t("nav.products.category")}</div>
              <img
                src={arrow}
                className={`arrow-icon ${isServiceOpen ? "open" : ""}`}
                alt="arrow"
              ></img>
            </div>
            <div className={`products-content ${isServiceOpen ? "open" : ""}`}>
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
                to="/offers/orderflowconfirmation"
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
          <div className="dropdown-link" onClick={toggleProducts}>
            <div className="dropdown-text">
              <div className="dropdown-title">{t("nav.products.category")}</div>
              <img
                src={arrow}
                className={`arrow-icon ${isProductOpen ? "open" : ""}`}
                alt="arrow"
              ></img>
            </div>
            <div className={`products-content ${isProductOpen ? "open" : ""}`}>
              <div className="product-category">PRODUKTER</div>
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
              <div className="dropping-item">{t("nav.services.category")}</div>
              <div className="dropdown">
                <div className="dropdown-container">
                  <a className="dropdown-item" href="/services/analytics">
                    <div className="image-container">
                      <lord-icon
                        style={{ width: "60px", height: "60px" }}
                        src="https://cdn.lordicon.com/pagmnkiz.json"
                        stroke="bold"
                        trigger="hover"
                        colors="primary:#545454,secondary:#848484"
                      ></lord-icon>
                    </div>

                    <div className="text-container">
                      <div className="title">
                        {t("nav.services.product1.title")}
                      </div>
                      <div className="description">
                        {t("nav.services.product1.description")}
                      </div>
                    </div>
                  </a>
                </div>
                <div className="dropdown-container">
                  <a className="dropdown-item" href="/services/automation">
                    <div className="image-container">
                      <lord-icon
                        style={{ width: "60px", height: "60px" }}
                        src="https://cdn.lordicon.com/tmfbpplq.json"
                        stroke="bold"
                        trigger="hover"
                        colors="primary:#545454,secondary:#848484"
                      ></lord-icon>
                    </div>
                    <div className="text-container">
                      <div className="title">
                        {t("nav.services.product2.title")}
                      </div>
                      <div className="description">
                        {t("nav.services.product2.description")}
                      </div>
                    </div>
                  </a>
                </div>
              </div>
              <div className="dropdown-arrow" />
            </li>
            <li className="navbar-dropdown">
              <div className="dropping-item">{t("nav.products.category")}</div>
              <div className="dropdown">
                <div className="dropdown-container">
                  <a className="dropdown-item" href="/products/orderflowsales">
                    <div className="image-container">
                      <img
                        className="image"
                        alt="Violet Automation"
                        src={violet_sales}
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
                </div>
                <div className="dropdown-container">
                  <a
                    className="dropdown-item"
                    href="/products/orderflowconfirmation"
                  >
                    <div className="image-container">
                      <img
                        className="image"
                        alt="Violet Automation"
                        src={violet_confirmation}
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
