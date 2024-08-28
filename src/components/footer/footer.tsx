import React from "react";
import { Link } from "react-router-dom";
import "./footer.scss";
import Container from "../../components/container/container.tsx";
import { useTranslation } from "react-i18next";

// Images
import violet_gradient_logo from "../../images/violet/logo/violet_automation_gradient.webp";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <div className="footer">
      <Container>
        <div className="content">
          <div className="left-content">
            <div className="description">
              <img alt="Violet Automation" src={violet_gradient_logo} />
            </div>
          </div>
          <div className="middle-content">
            <div className="linkwrapper">
              <Link to="/offers/analytics" className="link">
                {t("nav.products.product1")}
              </Link>
              <Link to="/offers/automation" className="link">
                {t("nav.products.product2")}
              </Link>
              <Link to="/offers/orderflow" className="link">
                {t("nav.products.product3")}
              </Link>
            </div>
          </div>
          <div className="middle-content">
            <div className="linkwrapper">
              <Link to="/clients" className="link">
                {t("nav.customers")}
              </Link>
              <Link to="/about" className="link">
                {t("nav.about")}
              </Link>{" "}
              <Link to="/contact" className="link">
                {t("nav.contact")}
              </Link>
            </div>
          </div>
          <div className="right-content">
            <div className="description">
              <div>{t("footer.text1")}</div>
              <div>{t("footer.text2")}</div>
              <a className="mail" href="mailto:support@violet.ai">
                support@violet.ai
              </a>
              <a
                className="linkedinlink"
                href="https://www.linkedin.com/company/violet-ai"
              >
                <img
                  className="linkedin"
                  src="https://cdn.prod.website-files.com/6397169c23b54d0da1cd5447/639c72812f8b5fd3409e0fe2_Frame.svg"
                  alt="LinkedIn"
                ></img>
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
