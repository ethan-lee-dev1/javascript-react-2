import React, { useState } from "react";

export const NumberBuilder = () => {
  let [numbers, setNumbers] = useState("");
  let [counter, setCounter] = useState(0);

  const handleAdd = () => {
    setCounter(++counter);
    setNumbers(numbers + counter);
  };

  const handleReset = () => {
    setCounter(0);
    setNumbers("");
  };

  return (
    <div>
      <div>
        <button
          onClick={() => {
            handleAdd();
          }}
        >
          Add Number
        </button>
        <button onClick={() => handleReset()}>Reset</button>
      </div>
      <div>Numbers: {numbers}</div>
    </div>
  );
};
