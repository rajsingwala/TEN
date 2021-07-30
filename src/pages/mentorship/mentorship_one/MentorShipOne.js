import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

let settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slideToShow: 1,
  swipeToSlide: true,
  slideToScroll: 1,
  autoplay: true,
};

const MentorShipOne = () => {
  return (
    <div className="mentorship_one">
      <Slider {...settings}>
        {/* carousel-1 */}
        <div className="mentorship_one_car1">
          <img src="images/26.webp" alt="amazon_alexa" />
          <div className="mentorship_one_car1_content">
            <p>
              “The delicate balance of mentoring someone is not creating them in
              your own image, but giving them the opportunity to create
              themselves.”
            </p>
            <span> — Steven Spielberg</span>
          </div>
        </div>

        {/* carousel-2 */}
        <div className="mentorship_one_car2">
          <div className="mentorship_one_car2_box" />
          <div className="mentorship_one_car2_container">
            <div className="mentorship_one_car2_content_title">
              TEN: Revolutionising Mentorship
            </div>
            <div className="mentorship_one_car2_content">
              <p className="mentorship_one_car2_content1">
                What sets best of the institution like IITs in India and Ivy
                League in the US apart from any other educational institute?
              </p>
              <p className="mentorship_one_car2_content2">
                It is their close-knit network of Alumni who help the students
                of these institutes succeed in their career by mentoring them
                and providing guidance and help at different stages of their
                career, starting from their college years.
              </p>
            </div>
          </div>
        </div>

        {/* carousel-3 */}
        <div className="mentorship_one_car3">
          <div className="mentorship_one_box3" />
          <div className="mentorship_one_car3_content">
            <p className="mentorship_one_car3_content1">Get the best mentors</p>
            <p className="mentorship_one_car3_content2">
              TEN is making quality mentorship accessible to all
            </p>
            <a href="#mentorship_four">
              <div className="mentorship_one_car3_btn">Apply Now</div>
            </a>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default MentorShipOne;
