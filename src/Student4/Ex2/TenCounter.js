import React, { useState } from "react";

export const TenCounter = () => {
  const [counter, setCounter] = useState(0);

  const handleClick = () => {
    if (counter >= 10) {
      setCounter(0);
    } else {
      setCounter(counter + 1);
    }
  };

  return (
    <div>
      <button onClick={() => handleClick()}>Push</button>
      <span>Counter: {counter}</span>
    </div>
  );
};
