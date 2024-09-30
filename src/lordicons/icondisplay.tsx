import React, { useEffect, useRef, useState } from "react";
import { Player } from "@lordicon/react";
const speedometer = require("../lordicons/speedometer.json");
const clock = require("../lordicons/clock.json");
const handshake = require("../lordicons/handshake.json");
const threeavatars = require("../lordicons/threeavatars.json");
const puzzle = require("../lordicons/puzzle.json");
const checkbox = require("../lordicons/checkbox.json");

const IconDisplay = ({ iconType }) => {
  const playerRef = useRef<Player>(null);

  const animateMe = () => {
    playerRef.current?.playFromBeginning();
  };

  const getIcon = () => {
    switch (iconType) {
      case "clock":
        return clock;
      case "speedometer":
        return speedometer;
      case "puzzle":
        return puzzle;
      case "threeavatars":
        return threeavatars;
      case "checkbox":
        return checkbox;
      case "handshake":
        return handshake;
      default:
        return null;
    }
  };

  const icon = getIcon();

  return (
    <div onMouseEnter={animateMe}>
      {icon && <Player ref={playerRef} size={100} icon={icon} />}
    </div>
  );
};

export default IconDisplay;
