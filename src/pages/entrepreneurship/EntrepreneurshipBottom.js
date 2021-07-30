import React from "react";
import EntrepreneurshipBottomLeft from "./EntrepreneurshipBottomLeft";
import EntrepreneurshipBottomRight from "./EntrepreneurshipBottomRight";

const EntrepreneurshipBottom = () => {
  return (
    <div className="entrepreneurship_bottom">
      {/* left */}
      <EntrepreneurshipBottomLeft />

      {/* right */}
      <EntrepreneurshipBottomRight />
    </div>
  );
};

export default EntrepreneurshipBottom;
