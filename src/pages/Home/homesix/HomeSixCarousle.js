import React from "react";
import { Carousel } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";

const HomeSixCarousle = () => {
  return (
    <div className="home_six_content">
      <Carousel
        dots={false}
        autoplay
        effect="scrollx"
        arrows
        nextArrow={<RightOutlined />}
        prevArrow={<LeftOutlined />}
      >
        <div className="home_six_carousel">
          <img src="images/12.webp" alt="carousel" />
          <div className="home_six_carousel_content1">
            I thoroughly enjoyed my internship during this pandemic situation
            and gained valuable experience under my belt. I know this internship
            will be instrumental in getting myself a job and it would be glowing
            reference on my CV. I was very hesitant at the time of joining TEN
            due to my inexperience, but now I feel so happy that I was able to
            be a part of it as it has made me so much more confident and
            empowered. As much as this organization changes, I hope that it’s
            class remains constant.
            <p className="home_six_carousel_p1">Thank you team TEN!</p>
          </div>
          <p className="home_six_carousel_auth1">
            {" "}
            -Kshema Unni, Business Development Intern
          </p>
        </div>
        <div className="home_six_carousel">
          <img src="images/12.webp" alt="carousel" />
          <div className="home_six_carousel_content2">
            Working with TEN is a great opportunity for the students who want to
            extend their career in digital marketing! ​
          </div>
          <p className="home_six_carousel_auth2"> -Aakriti Malik, DM Intern</p>
        </div>
        <div className="home_six_carousel">
          <img src="images/12.webp" alt="carousel" />
          <div className="home_six_carousel_content3">
            Working with TEN as a digital marketing intern has been a great
            experience. I learnt a lot of new stuff and worked on different
            tasks which helped me understand the marketing field better.
          </div>
          <p className="home_six_carousel_auth3">
            {" "}
            -Harsh Rajput, General Management Intern
          </p>
        </div>
        <div className="home_six_carousel">
          <img src="images/12.webp" alt="carousel" />
          <div className="home_six_carousel_content4">
            TEN was my first ever experience into internship. Even though I
            didn't have much of an idea about my responsibilities, my mentors at
            TEN and fellow colleagues helped me a lot in making me understand my
            roles and were very cooperative throughout.
          </div>
          <p className="home_six_carousel_auth4">
            {" "}
            -Anjali Srivastava, Content Intern
          </p>
        </div>
      </Carousel>
    </div>
  );
};

export default HomeSixCarousle;
