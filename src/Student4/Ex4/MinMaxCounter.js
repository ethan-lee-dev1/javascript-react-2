import React from "react";
import { useState } from "react";

export const MinMaxCounter = () => {
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(0);
  let [counter, setCounter] = useState(0);

  const handleClick = (direction) => {
    if (direction === "Up") {
      setCounter(++counter);
      if (counter >= max) {
        setMax(counter);
      }
    } else {
      setCounter(--counter);
      if (counter <= min) {
        setMin(counter);
      }
    }
  };

  return (
    <div>
      <div>
        <button onClick={() => handleClick("Down")}>Down</button>
        <span>{counter}</span>
        <button onClick={() => handleClick("Up")}>Up</button>
        <div>Min: {min}</div>
        <div>Max: {max}</div>
      </div>
    </div>
  );
};
