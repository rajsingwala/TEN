import React from "react";
import EntrepreneurshipTop from "./EntrepreneurshipTop";
import EntrepreneurshipMid from "./EntrepreneurshipMid";
import EntrepreneurshipBottom from "./EntrepreneurshipBottom";

const Entrepreneurship = () => {
  return (
    <div className="entrepreneurship">
      <div className="entrepreneurship_container">
        <EntrepreneurshipTop />
        <EntrepreneurshipMid />
        <EntrepreneurshipBottom />
      </div>
    </div>
  );
};

export default Entrepreneurship;
