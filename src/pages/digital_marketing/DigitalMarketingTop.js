import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const DigitalMarketingTop = () => {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <div className="entrepreneurship_top digital">
      <div className="entrepreneurship_top_title digital" data-aos="fade-up">
        Digital Marketing
      </div>
      <div className="entrepreneurship_top_content digital" data-aos="fade-up">
        Suyash Gupta
      </div>
    </div>
  );
};

export default DigitalMarketingTop;
