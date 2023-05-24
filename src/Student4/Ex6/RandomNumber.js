import React, { useState } from "react";

export const RandomNumber = () => {
  let [number, setNumber] = useState(0);

  const makeRandomNumber = () => {
    setNumber(Math.floor(Math.random() * 10));
  };

  return (
    <div>
      <div>Random Number: {number}</div>
      <button onClick={() => makeRandomNumber()}>Generate</button>
    </div>
  );
};
