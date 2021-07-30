import React from "react";
import HomeTop from "./HomeTop";
import HomeSecond from "./HomeSecond";
import HomeThird from "./HomeThird";
import HomeFourth from "./homefourth/HomeFourth";
import HomeFifth from "./homefifth/HomeFifth";
import HomeSix from "./homesix/HomeSix";
import HomeSeven from "./HomeSeven";

const Home = () => {
  return (
    <div className="home">
      <div className="home_container">
        <HomeTop />
        <HomeSecond />
        <HomeThird />
        <HomeFourth />
        <HomeFifth />
        <HomeSix />
        <HomeSeven />
      </div>
    </div>
  );
};

export default Home;
