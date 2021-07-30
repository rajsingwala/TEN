import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const DigitalMarketingLeft = () => {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <div className="entrepreneurship_bottom_left">
      <div className="entrepreneurship_bottom_left_title" data-aos="fade-up">
        My Story
      </div>
      <div className="entrepreneurship_bottom_left_subtitle" data-aos="fade-up">
        7 years of experience into technology, product, startups ,leadership and
        entrepreneurship.
      </div>

      <div className="entrepreneurship_bottom_left_content" data-aos="fade-up">
        <div className="entrepreneurship_bottom_left_content_title">
          Specialities :
        </div>

        <ul className="entrepreneurship_bottom_left_content_container">
          <li>
            Creating and scaling Technology and Product of 3 startups from
            scratch.
          </li>
          <li>
            Domain expertise of creating Insurance aggregators , lending systems
            from scratch.
          </li>
          <li>
            Deep understanding/experience of the tech/internet eco-system,
            building and scaling start-ups from scratch.
          </li>
          <li>
            JAVA,Springboot ,Node js , Spring, Hibernate, Python , PHP ,
            Angular, No-SQL, Big Data, MYSQL/PGSQL Databases .
          </li>
          <li>
            Currently obsessed with leveraging Machine learning to solve real
            world problems.
          </li>
          <li> Passionate about UX and Product oriented engineering.</li>
          <li>
            Proven track record of working in Growth hacking , Lead generation
            and management , Data analytics.
          </li>
          <li>Areas of Interest: Artificial Intelligence , Blockchain , IOT</li>
          <li>
            MOTTO IN LIFE : "The mind is everything .What you think you become."{" "}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DigitalMarketingLeft;
