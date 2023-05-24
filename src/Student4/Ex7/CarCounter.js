import React, { useState } from "react";

export const CarCounter = () => {
  let [ford, setFord] = useState(0);
  let [toyota, setToyota] = useState(0);
  let [chevy, setChevy] = useState(0);
  let [total, setTotal] = useState(0);

  const handleClick = (carType) => {
    if (carType === "ford") {
      setFord(++ford);
      setTotal(++total);
    } else if (carType === "toyota") {
      setToyota(++toyota);
      setTotal(++total);
    } else if (carType === "chevy") {
      setChevy(++chevy);
      setTotal(++total);
    }
  };

  return (
    <div>
      <div>
        <button onClick={() => handleClick("ford")}>Ford</button>
        <button onClick={() => handleClick("toyota")}>Toyota</button>
        <button onClick={() => handleClick("chevy")}>Chevy</button>
      </div>
      <div>Ford: {ford}</div>
      <div>Toyota:{toyota} </div>
      <div>Chevy: {chevy} </div>
      <div>TOTAL: {total} </div>
    </div>
  );
};
