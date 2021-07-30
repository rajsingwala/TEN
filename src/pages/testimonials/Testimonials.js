import React, { useEffect } from "react";
import { Carousel } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import Aos from "aos";
import "aos/dist/aos.css";

const Testimonials = () => {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <div className="testimonials">
      <div className="testimonials_container">
        <div className="testimonials_title" data-aos="fade-up">
          Testimonials
        </div>
        <div className="testimonials_content">
          <Carousel
            dots={false}
            effect="scrollx"
            arrows
            nextArrow={<RightOutlined />}
            prevArrow={<LeftOutlined />}
          >
            <div className="testimonials_carousel">
              <video src="video/video2.mp4" autoPlay loop muted />
              <div className="testimonials_carousel_content">
                <div
                  className="testimonials_carousel_content2"
                  data-aos="fade-up"
                  data-aos-delay="1000"
                >
                  <p>
                    Working with TEN is a great opportunity for the students who
                    want to extend their career in digital marketing!{" "}
                  </p>
                  <p> -Aakriti Malik, DM Intern</p>​
                </div>
              </div>
            </div>
            <div className="testimonials_carousel">
              <video src="video/video2.mp4" autoPlay loop muted />
              <div className="testimonials_carousel_content">
                <div
                  className="testimonials_carousel_content3"
                  data-aos="fade-up"
                  data-aos-delay="1000"
                >
                  <p>
                    Working with TEN as a digital marketing intern has been a
                    great experience. I learnt a lot of new stuff and worked on
                    different tasks which helped me understand the marketing
                    field better. ​
                  </p>
                  <p>-Harsh Rajput,General Management Intern</p>​
                </div>
              </div>
            </div>
            <div className="testimonials_carousel">
              <video src="video/video2.mp4" autoPlay loop muted />
              <div className="testimonials_carousel_content">
                <div
                  className="testimonials_carousel_content4"
                  data-aos="fade-up"
                  data-aos-delay="1000"
                >
                  <p>
                    TEN was my first ever experience into internship. Even
                    though I didn't have much of an idea about my
                    responsibilities, my mentors at TEN and fellow colleagues
                    helped me a lot in making me understand my roles and were
                    very cooperative throughout. ​ ​
                  </p>
                  <p> -Anjali Srivastava, Content Intern​</p>​
                </div>
              </div>
            </div>
            <div className="testimonials_carousel">
              <video src="video/video2.mp4" autoPlay loop muted />
              <div className="testimonials_carousel_content">
                <div
                  className="testimonials_carousel_content5"
                  data-aos="fade-up"
                  data-aos-delay="1000"
                >
                  <p>
                    I thoroughly enjoyed my internship during this pandemic
                    situation and gained valuable experience under my belt. I
                    know this internship will be instrumental in getting myself
                    a job and it would be glowing reference on my CV. I was very
                    hesitant at the time of joining TEN due to my inexperience,
                    but now I feel so happy that I was able to be a part of it
                    as it has made me so much more confident and empowered. As
                    much as this organization changes, I hope that it’s class
                    remains constant. ​
                  </p>
                  <p className="testimonials_carousel_content5_thanks">
                    Thank you team TEN!
                  </p>
                  <p className="testimonials_carousel_content5_author">
                    {" "}
                    -Kshema Unni, Business Development Intern​
                  </p>
                </div>
              </div>
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
