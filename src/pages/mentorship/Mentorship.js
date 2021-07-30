import React from "react";
import MentorShipOne from "./mentorship_one/MentorShipOne";
import MentorShipTwo from "./mentorship_two/MentorShipTwo";
import MentorShipThree from "./mentorship_three/MentorShipThree";
import MentorShipFour from "./mentorship_four/MentorShipFour";

const Mentorship = () => {
  return (
    <div className="mentorship">
      <div className="mentorship_container">
        <div className="mentorship_title">Mentorship</div>
        <MentorShipOne />
        <MentorShipTwo />
        <MentorShipThree />
        <MentorShipFour />
      </div>
    </div>
  );
};

export default Mentorship;
