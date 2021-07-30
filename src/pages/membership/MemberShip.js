import React from "react";
import MemberShipOne from "./membership_one/MemberShipOne";
import MemberShipTwo from "./membership_two/MemberShipTwo";
import MemberShipThree from "./membership_three/MemberShipThree";
import MemberShipFour from "./membership_four/MemberShipFour";

const MemberShip = () => {
  return (
    <div className="membership">
      <div className="membership_container">
        <MemberShipOne />
        <MemberShipTwo />
        <MemberShipThree />
        <MemberShipFour />
      </div>
    </div>
  );
};

export default MemberShip;
