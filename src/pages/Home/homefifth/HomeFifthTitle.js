import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const HomeFifthTitle = () => {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <>
      <div className="home_fifth_title">
        <div className="home_fifth_title_container">
          <span data-aos="fade-up">Our Course Benefits</span>
        </div>
      </div>
    </>
  );
};

export default HomeFifthTitle;
