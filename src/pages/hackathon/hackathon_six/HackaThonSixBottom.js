import React from "react";

const HackaThonSixBottom = ({ handleNext }) => {
  return (
    <div className="hackathon_six_bottom">
      {/* one */}
      <div className="hackathon_six_bottom_one">
        <div className="hackathon_six_bottom_one_left">
          <label>First Name * </label>
          <input type="text" />
        </div>
        <div className="hackathon_six_bottom_one_mid">
          <label>Last Name * </label>
          <input type="text" />
        </div>
        <div className="hackathon_six_bottom_one_right">
          <label>Email Name * </label>
          <input type="email" />
        </div>
      </div>

      {/* two */}
      <div className="hackathon_six_bottom_two">
        <div className="hackathon_six_bottom_two_left">
          <label>Phone No * </label>
          <input type="text" />
        </div>
        <div className="hackathon_six_bottom_two_mid">
          <label>Team Name * </label>
          <input type="text" />
        </div>
        <div className="hackathon_six_bottom_two_right">
          <label>Address * </label>
          <input type="text" />
        </div>
      </div>

      {/* three */}
      <div className="hackathon_six_bottom_three">
        <div className="hackathon_six_bottom_three_left">
          <label>What is your Idea? * </label>
          <input type="text" />
        </div>
      </div>

      {/* btn */}
      <div className="hackathon_six_bottom_four">
        <div className="hackathon_six_bottom_four_btn" onClick={handleNext}>
          Continue
        </div>
      </div>
    </div>
  );
};

export default HackaThonSixBottom;
