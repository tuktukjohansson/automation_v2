import { useEffect, useState } from "react";

const useKonamiCode = callback => {
  const [keys, setKeys] = useState([]);

  const konamiCode = [
    "ArrowUp",
    "ArrowUp",
    "ArrowDown",
    "ArrowDown",
    "ArrowLeft",
    "ArrowRight",
    "ArrowLeft",
    "ArrowRight",
    "b",
    "a",
  ];

  useEffect(() => {
    const handleKeyDown = event => {
      setKeys(prevKeys => [...prevKeys, event.key].slice(-10));
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    if (keys.join(" ").includes(konamiCode.join(" "))) {
      callback();
      setKeys([]);
    }
  }, [keys, callback]);
};

export default useKonamiCode;
