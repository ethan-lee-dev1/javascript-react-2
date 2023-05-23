import React, { useState } from "react";

export const UpDownCounter = () => {
  const [counter, setCounter] = useState(0);

  const handleClickUp = () => {
    setCounter(counter + 1);
  };

  const handleClickDown = () => {
    setCounter(counter - 1);
  };

  return (
    <div>
      <button onClick={() => handleClickDown()}>Down</button>
      <span>{counter}</span>
      <button onClick={() => handleClickUp()}>Up</button>
    </div>
  );
};
