import React from "react";

const MentorShipTwo = () => {
  return (
    <div className="mentorship_two">
      <div className="mentorship_two_content">
        {/* left */}
        <div className="mentorship_two_left">
          <div className="mentorship_two_left_title">
            GET INSTANT ACCESS TO THESE EXCLUSIVE LESSONS AND 100's MORE...
          </div>
          <div className="mentorship_two_left_img">
            <img src="images/27.webp" alt="img" />
          </div>
        </div>

        {/* right */}
        <div className="mentorship_two_right">
          <p>The new way of learning.</p>
          <p>
            If you're like most of our members you believe in expanding your
            knowledge and leveling up your skillsets, but you just don't have
            the time to read the books that you know will get you there.
          </p>
          <p>
            We engineered a new, fun and engaging way to learn directly from the
            highest level authors and thinkers...
          </p>
        </div>
      </div>

      {/* bottom */}
      <div className="mentorship_two_right_bottom">
        <a href="#mentorship_four">
          <div className="mentorship_two_right_btn">
            TRY TEN MENTORSHIP @ INR 500
          </div>
        </a>
      </div>
    </div>
  );
};

export default MentorShipTwo;
