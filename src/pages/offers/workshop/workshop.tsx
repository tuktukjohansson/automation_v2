import React from "react";

// Components
import Container from "../../../components/container/container.tsx";

// Images

import "./workshop.scss";

const Workshop = () => {
  return (
    <>
      {/* ----------------------------- Block One ----------------------------- */}
      <Container>
        <h1 className="block-one-title">
          Workshop
          <br />
        </h1>
        <div className="block-one-description">
          Workshop Workshop Workshop Workshop Workshop Workshop Workshop
          Workshop Workshop Workshop Workshop Workshop Workshop Workshop
          Workshop Workshop Workshop Workshop Workshop Workshop Workshop
          Workshop Workshop Workshop Workshop Workshop Workshop Workshop
          Workshop Workshop Workshop Workshop Workshop Workshop Workshop
          Workshop
        </div>
      </Container>
    </>
  );
};

export default Workshop;
