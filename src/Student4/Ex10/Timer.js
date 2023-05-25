import React, { useState } from "react";

export const Timer = () => {
  let [text, setText] = useState("Stopped");
  let [startTime, setStartTime] = useState("");
  let [elapsed, setElapsed] = useState(null);

  const handleClick = () => {
    if (text === "Stopped") {
      setStartTime(new Date());
      setText("Started...");
    } else {
      let endTime = new Date();
      let time = endTime.getTime() - startTime.getTime();
      setElapsed(time / 1000);
      setText("Stopped");
    }
  };

  return (
    <div>
      <button onClick={() => handleClick()}>{text}</button>
      <div>Elapsed Time: {elapsed}</div>
    </div>
  );
};
