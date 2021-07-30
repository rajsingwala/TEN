import React from "react";
import { Link } from "react-router-dom";

const HomeSecond = () => {
  return (
    <div className="home_second">
      <div className="home_second_title">
        <span>About Us</span>
      </div>
      <div className="home_second_container">
        <div className="home_second_left">
          <div className="home_second_left_content">
            <p>Learning Together</p>
            <p>From the Comfort</p>
            <p>of Your Home</p>
          </div>
          <Link to="/about" target="_blank" rel="noreferrer">
            <div className="home_second_left_button">
              <span>Learn More</span>
            </div>
          </Link>
        </div>
        <div className="home_second_right">
          <img
            src="/images/3.webp"
            alt="about us"
          />
        </div>
      </div>
    </div>
  );
};

export default HomeSecond;
