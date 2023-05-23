import React from "react";
import { useState } from "react";

export const DateFetcher = () => {
  const [date, setDate] = useState("Unknown");

  const handleClick = () => {
    const utcDate = new Date().toUTCString();
    setDate(utcDate);
  };

  return (
    <div>
      <button onClick={() => handleClick()}>Push</button>
      UTC Date: {date}
    </div>
  );
};
