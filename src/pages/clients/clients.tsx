import React from "react";

// Components
import Container from "../../components/container/container.tsx";

// Images

import "./clients.scss";

const Clients = () => {
  return (
    <>
      {/* ----------------------------- Block One ----------------------------- */}
      <Container>
        <h1 className="gradient-title">
          Clients
          <br />
        </h1>
        <div className="block-one-description">
          Clients Clients Clients Clients Clients Clients Clients Clients
          Clients Clients Clients Clients Clients Clients Clients Clients
          Clients Clients Clients Clients Clients Clients Clients Clients
          Clients Clients Clients Clients Clients Clients Clients Clients
          Clients Clients Clients Clients
        </div>
      </Container>
    </>
  );
};

export default Clients;
