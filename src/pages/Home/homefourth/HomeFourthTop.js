import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
import Explore from "../button/Explore";

const HomeFourthTop = () => {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <div className="home_fourth_top">
      <div className="home_fourth_top_left">
        <div className="home_fourth_top_left_content">
          <div className="home_fourth_top_left_content_top">
            <Link to="/courses" target="_blank" rel="noreferrer">
              Our Courses
            </Link>
          </div>
          <div
            data-aos="fade-up"
            className="home_fourth_top_left_content_bottom"
          >
            <p>Your New</p>
            <p>Journey Begins Here,</p>
            <p>Today</p>
          </div>
        </div>
      </div>
      <div className="home_fourth_top_right">
        <div className="home_fourth_top_right_top">
          <p>
            <Link
              to="/product-page/entrepreneurship"
              target="_blank"
              rel="noreferrer"
            >
              Entrepreneurship
            </Link>
          </p>
          <p>
            <Link
              to="/product-page/entrepreneurship"
              target="_blank"
              rel="noreferrer"
            >
              made fun
            </Link>
          </p>
        </div>
        <Explore link="/product-page/entrepreneurship" />
      </div>
    </div>
  );
};

export default HomeFourthTop;
