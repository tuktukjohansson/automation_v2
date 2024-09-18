import React from "react";
import { useTranslation } from "react-i18next";
import "./notfound.scss";

// Components
import Container from "../../components/container/container.tsx";

// Images

const Clients = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="notfound">
        <Container>
          <div className="flexcontainer">
            <div className="gradtitle">404</div>
            <div className="description">{t("404.title")}</div>
            <a href="/" className="button">
              {t("404.button")}
            </a>
          </div>
        </Container>
      </div>
    </>
  );
};
export default Clients;
