import React from "react";

// Components
import Container from "../../components/container/container.tsx";

// Images

import "./thank-you.scss";

const Thanks = () => {
  return (
    <>
      {/* ----------------------------- Block One ----------------------------- */}
      <Container>
        <h1 className="gradient-title">
          Thank You
          <br />
        </h1>
        <div className="block-one-description">Thank You!</div>
      </Container>
    </>
  );
};

export default Thanks;
