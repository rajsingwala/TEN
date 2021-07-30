import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const EntrepreneurshipTop = () => {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <div className="entrepreneurship_top">
      <div className="entrepreneurship_top_title" data-aos="fade-up">
        Entrepreneurship
      </div>
      <div className="entrepreneurship_top_content" data-aos="fade-up">
        Suyash Gupta
      </div>
    </div>
  );
};

export default EntrepreneurshipTop;
