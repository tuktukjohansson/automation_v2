import React from "react";
import "./notfound.scss";

// Components
import Container from "../../components/container/container.tsx";

// Images

const Clients = () => {
  return (
    <>
      <div className="notfound">
        <Container>
          <div className="flexcontainer">
            <div className="gradtitle">404</div>
            <div className="description">
              Looks like we are missing some page, or you typed something wrong
              in the URL, heres a way to get back
            </div>
            <a href="/" className="button">
              Get back home
            </a>
          </div>
        </Container>
      </div>
    </>
  );
};
export default Clients;
