import React, { useState } from "react";
import HiringFirst from "./HiringFirst";
import HiringSecond from "./HiringSecond";

const HiringBottom = () => {
  const [first, setFirst] = useState(true);

  const handleFirst = () => {
    setFirst(!first);
  };

  return (
    <div className="hiring_bottom">
      <div className="hiring_bottom_container">
        {first ? (
          <HiringFirst handleFirst={handleFirst} />
        ) : (
          <HiringSecond handleFirst={handleFirst} />
        )}
      </div>
    </div>
  );
};

export default HiringBottom;
