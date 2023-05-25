import React, { useState } from "react";
//import useState

export const RandomNumber = () => {
  //make a state to hold the random number
  let [randomNumber, setRandomNumber] = useState(0);

  //handle click function that generates a random number from 0-10
  const generateRandomNumber = () => {
    // console.log(Math.floor (Math.random() * 11));
    setRandomNumber(Math.floor(Math.random() * 11));
  };

  return (
    <div>
      <div>Random Number: {randomNumber}</div>
      <div>
        <button onClick={() => generateRandomNumber()}>Generate</button>
      </div>
    </div>
  );
};
