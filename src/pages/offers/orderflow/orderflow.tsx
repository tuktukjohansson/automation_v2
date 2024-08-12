import React from "react";

// Components
import Container from "../../../components/container/container.tsx";

// Images

// Styling
import "./orderflow.scss";

const Orderflow = () => {
  return (
    <>
      {/* ----------------------------- Block One ----------------------------- */}
      <div className="orderflowpage">
        <Container>
          <h1 className="gradient-title">
            OrderFlow
            <br />
          </h1>
          <div className="block-one-description">
            OrderFlow OrderFlow OrderFlow OrderFlow OrderFlow OrderFlow
            OrderFlow OrderFlow OrderFlow OrderFlow OrderFlow OrderFlow
            OrderFlow OrderFlow OrderFlow OrderFlow OrderFlow OrderFlow
            OrderFlow OrderFlow OrderFlow OrderFlow OrderFlow OrderFlow
            OrderFlow OrderFlow OrderFlow OrderFlow OrderFlow OrderFlow
            OrderFlow OrderFlow OrderFlow OrderFlow OrderFlow OrderFlow
          </div>
        </Container>
      </div>
    </>
  );
};

export default Orderflow;
