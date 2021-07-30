import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const HackathonTwoRight = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className="hackathon_two_right">
      <div className="hackathon_two_right_one" data-aos="fade-right">
        What is TEN Hackathon?
      </div>
      <div
        className="hackathon_two_right_two"
        data-aos="fade-up"
        data-aos-delay="1500"
      >
        TEN Hackathon (or the TEN Hack, as it is called) is an annual technical
        fest of The Entrepreneurship Network focused on bringing out the
        technical expertise in students, it is not only limited to the
        individuals with a sound technical knowhow. It is a confluence of
        innovation and creation wherein applicants not only try to impress
        others with their unique abilities but also contribute in passing down
        their knowledge to the younger, more hopeful applicants whose skills are
        at a nascent stage but have a proclivity towards gaining exposure to
        cutting-edge technology relevant in today’s world.
      </div>
      <div className="hackathon_two_right_three">
        <a href="#hackathon_six">
          <div className="hackathon_two_right_three_btn">REGISTER</div>
        </a>
        <a href="#hackathon_three">
          <div className="hackathon_two_right_three_btn">TECH HACK'20</div>
        </a>
      </div>
    </div>
  );
};

export default HackathonTwoRight;
