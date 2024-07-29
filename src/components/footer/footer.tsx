import React from "react";
import "./footer.scss";
import Container from "../../components/container/container.tsx";
import { useTranslation, Trans } from "react-i18next";

// Images
import violet_gradient_logo from "../../images/logos/violet_automation_gradient.png";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <div className="footer">
      <Container>
        <div className="content">
          <div className="left-content">
            <div className="description">
              {t("footer.titleRow1")}
              <br />
              {t("footer.titleRow2")}
            </div>
          </div>
          <div className="right-content">
            <div className="description">
              {t("footer.titleRow1")}
              <br />
              {t("footer.titleRow2")}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
