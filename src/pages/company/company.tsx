import React from "react";

// Components
import Container from "../../components/container/container.tsx";

// Images

import "./company.scss";

const Company = () => {
  return (
    <>
      {/* ----------------------------- Block One ----------------------------- */}
      <Container>
        <h1 className="gradient-title">
          Company
          <br />
        </h1>
        <div className="block-one-description">
          Company Company Company Company Company Company Company Company
          Company Company Company Company Company Company Company Company
          Company Company Company Company Company Company Company Company
          Company Company Company Company Company Company Company Company
          Company Company Company Company
        </div>
      </Container>
    </>
  );
};

export default Company;
