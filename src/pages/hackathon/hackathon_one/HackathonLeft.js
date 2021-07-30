import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const HackathonLeft = () => {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);
  return (
    <div
      className="hackathon_one_left"
      data-aos="fade-down"
      data-aos-delay="1000"
    />
  );
};

export default HackathonLeft;
