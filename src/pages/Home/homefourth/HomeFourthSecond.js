import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Explore from "../button/Explore";
import Aos from "aos";
import "aos/dist/aos.css";

const HomeFourthSecond = () => {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <div className="home_fourth_second">
      <div className="home_fourth_second_left" />
      <div className="home_fourth_second_mid">
        <div className="home_fourth_second_mid_top" data-aos="fade-up">
          <Link
            to="/product-page/digital-marketing-1"
            target="_blank"
            rel="noreferrer"
          >
            <p>Digital </p>
            <p>Marketing</p>
          </Link>
        </div>
        <div data-aos="fade-up" className="home_fourth_second_mid_top_mobile">
          <Link
            to="/product-page/digital-marketing-1"
            target="_blank"
            rel="noreferrer"
          >
            <p>Digital Marketing</p>
          </Link>
        </div>
        <Explore link="/product-page/digital-marketing-1" />
      </div>
      <div className="home_fourth_second_right" />
    </div>
  );
};

export default HomeFourthSecond;
