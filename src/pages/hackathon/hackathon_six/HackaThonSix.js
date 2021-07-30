import React, { useState } from "react";
import HackaThonSixTop from "./HackaThonSixTop";
import HackaThonSixMid from "./HackaThonSixMid";
import HackaThonSixBottom from "./HackaThonSixBottom";
import HackaThonSixBottom2 from "./HackaThonSixBottom2";

const HackathonSix = () => {
  const [next, setNext] = useState(false);

  const handleNext = () => {
    setNext(!next);
  };

  return (
    <div id="hackathon_six">
      <HackaThonSixTop />
      <HackaThonSixMid />
      {!next ? (
        <HackaThonSixBottom handleNext={handleNext} />
      ) : (
        <HackaThonSixBottom2 handleNext={handleNext} />
      )}
    </div>
  );
};

export default HackathonSix;
