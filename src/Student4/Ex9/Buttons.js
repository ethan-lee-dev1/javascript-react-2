import React from "react";
import { useState } from "react";

export const Buttons = () => {
  const [clicked1, setClicked1] = useState(false);
  const [clicked2, setClicked2] = useState(false);

  const handleClick = (number) => {
    if (number === 1) {
      setClicked1(true);
    } else {
      setClicked2(true);
    }
  };
  const handleReset = () => {
    setClicked1(false);

    setClicked2(false);
  };

  return (
    <div>
      <div>
        <button onClick={() => handleClick(1)}>
          {clicked1 ? "Pushed" : "Push"}
        </button>
      </div>
      <div>
        <button onClick={() => handleClick(2)}>
          {clicked2 ? "Pushed" : "Push"}
        </button>
      </div>
      <div>
        <button onClick={() => handleReset()}>Reset</button>
      </div>
    </div>
  );
};
