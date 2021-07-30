import React from "react";
import DigitalMarketingTop from "./DigitalMarketingTop";
import DigitalMarketingMid from "./DigitalMarketingMid";
import DigitalMarketingBottom from "./DigitalMarketingBottom";

const DigitalMarketing = () => {
  return (
    <div className="entrepreneurship">
      <div className="entrepreneurship_container">
        <DigitalMarketingTop />
        <DigitalMarketingMid />
        <DigitalMarketingBottom />
      </div>
    </div>
  );
};

export default DigitalMarketing;
