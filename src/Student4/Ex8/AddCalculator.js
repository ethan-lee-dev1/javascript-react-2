import React, { useState } from "react";

export const AddCalculator = () => {
  let [total, setTotal] = useState(0);

  const handleClick = (number) => {
    setTotal(total + number);
  };

  return (
    <div>
      <div>
        <button onClick={() => handleClick(1)}>Add1</button>
        <button onClick={() => handleClick(2)}>Add2</button>
        <button onClick={() => handleClick(3)}>Add3</button>
      </div>
      <div>Total: {total} </div>
    </div>
  );
};
