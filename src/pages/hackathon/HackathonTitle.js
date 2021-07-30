import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const HackathonTitle = () => {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <div className="hackathon_title" data-aos="zoom-in">
      Hackathon
    </div>
  );
};

export default HackathonTitle;
