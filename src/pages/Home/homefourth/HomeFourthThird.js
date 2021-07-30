import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Explore from "../button/Explore";
import Aos from "aos";
import "aos/dist/aos.css";

const HomeFourthThird = () => {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <div className="home_fourth_third">
      <div className="home_fourth_third_left">
        <div className="home_fourth_third_left_top" data-aos="fade-up">
          <Link
            to="/product-page/product-management-1"
            target="_blank"
            rel="noreferrer"
          >
            <p>Product Management</p>
            <p>like a pro</p>
          </Link>
        </div>
        <div className="home_fourth_third_left_top_mobile" data-aos="fade-up">
          <Link
            to="/product-page/product-management-1"
            target="_blank"
            rel="noreferrer"
          >
            <p>Product Management like a</p>
            <p>pro</p>
          </Link>
        </div>
        <Explore link="/product-page/product-management-1" />
      </div>
      <div className="home_fourth_third_right"></div>
    </div>
  );
};

export default HomeFourthThird;
