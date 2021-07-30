import React from "react";
import HomeSixCarousle from "./HomeSixCarousle";

const HomeSix = () => {
  return (
    <div className="home_six">
      <div className="home_six_container">
        {/* title */}
        <div className="home_six_title">Testimonial</div>

        {/* carousel */}
        <HomeSixCarousle />
      </div>
    </div>
  );
};

export default HomeSix;
