import React from "react";
import HackathonTitle from "./HackathonTitle";
import HackathonOne from "./hackathon_one/HackathonOne";
import HackathonTwo from "./hackathon_two/HackathonTwo";
import HackaThonThree from "./hackathon_three/HackathonThree";
import HackaThonFour from "./hackathon_four/HackathonFour";
import HackaThonFive from "./hackathon_five/HackathonFive";
import HackaThonSix from "./hackathon_six/HackaThonSix";

const Hackathon = () => {
  return (
    <div className="hackathon">
      <div className="hackathon_container">
        <HackathonTitle />
        <HackathonOne />
        <HackathonTwo />
        <HackaThonThree />
        <HackaThonFour />
        <HackaThonFive />
        <HackaThonSix />
      </div>
    </div>
  );
};

export default Hackathon;
