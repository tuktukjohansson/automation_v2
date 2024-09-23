import React, { useEffect, useRef, useState } from "react";
import { Player } from "@lordicon/react";
const ICON = require("../lordicons/clock.json");

const Clock = props => {
  const playerRef = useRef<Player>(null);

  const animateMe = () => {
    playerRef.current?.playFromBeginning();
  };

  return (
    <div onClick={animateMe}>
      <Player ref={playerRef} size={100} icon={ICON} />
    </div>
  );
};

export default Clock;
