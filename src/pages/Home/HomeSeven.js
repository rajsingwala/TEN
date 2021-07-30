import React from "react";

const HomeSeven = () => {
  return (
    <div className="home_seven">
      <video src="/video/video1.mp4" autoPlay loop muted />
      <div className="home_seven_content">
        <div className="home_seven_title">
          Power of <span>TEN </span>Consulting
        </div>
        <a
          href="https://www.consulting.entrepreneurshipnetwork.net/"
          target="_blank"
          rel="noreferrer"
        >
          <div className="home_seven_btn">
            Explore Here <span>{">"}</span>
          </div>
        </a>
      </div>
    </div>
  );
};

export default HomeSeven;
