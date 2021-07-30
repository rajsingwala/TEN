import React from "react";
import CampusProgramOne from "./campus_program_one/CampusProgramOne";
import CampusProgramTwo from "./campus_program_two/CampusProgramTwo";
import CampusProgramThree from "./campus_program_three/CampusProgramThree";
import CampusProgramFour from "./campus_program_four/CampusProgramFour";

const CampusProgram = () => {
  return (
    <div className="campus_program">
      <div className="campus_program_container">
        <CampusProgramOne />
        <CampusProgramTwo />
        <CampusProgramThree />
        <CampusProgramFour />
      </div>
    </div>
  );
};

export default CampusProgram;
