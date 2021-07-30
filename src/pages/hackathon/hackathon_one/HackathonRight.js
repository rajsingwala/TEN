import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const HackathonRight = () => {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);
  return (
    <div className="hackathon_one_right">
      <div
        className="hackathon_one_right_top"
        data-aos="fade-left"
        data-aos-delay="1000"
      >
        A problem is a chance for you to do your best.
      </div>
      <div
        className="hackathon_one_right_bottom"
        data-aos="fade-left"
        data-aos-delay="1000"
      >
        {" "}
        --Duke Ellington
      </div>
    </div>
  );
};

export default HackathonRight;
