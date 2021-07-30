import React from "react";

const CampusProgramOne = () => {
  return (
    <div className="campus_program_one">
      <div className="campus_program_one_title">
        Campus Ambassador Registration
      </div>

      <div className="campus_program_one_img">
        <img src="images/24.webp" alt="Campus Ambassadors" />
      </div>

      <div className="campus_program_one_bottom">
        {/* btns */}
        <div className="campus_program_one_bottom_btns">
          <div className="campus_program_one_bottom_btns_top">
            <a href="#campus_program_two">
              <div className="campus_program_one_btn">Skill required {">"}</div>
            </a>
            <a href="#campus_program_three">
              <div className="campus_program_one_btn">Rewards {">"}</div>
            </a>
          </div>
          <div className="campus_program_one_bottom_btns_bottom">
            <a href="#campus_program_four">
              <div className="campus_program_one_bottom_btn">Apply Now</div>
            </a>
          </div>
        </div>

        {/* img */}
        <div className="campus_program_one_bottom_img">
          <img src="images/25.webp" alt="img" />
        </div>
      </div>

      {/* mobile */}
      <div className="campus_program_one_mobile_two">
        <div className="campus_program_one_mobile_two_top">
          <img src="images/24.webp" alt="Campus Ambassadors" />
        </div>
        <div className="campus_program_one_mobile_two_bottom">
          <img src="images/25.webp" alt="img" />
        </div>
      </div>

      <div className="campus_program_one_mobile_btns">
        <a href="#campus_program_two">
          <div className="campus_program_one_mobile_btn1">
            Skill required {">"}
          </div>
        </a>
        <a href="#campus_program_three">
          <div className="campus_program_one_mobile_btn2">Rewards {">"}</div>
        </a>
        <a href="#campus_program_four">
          <div className="campus_program_one_mobile_btn3">Apply Now</div>
        </a>
      </div>
    </div>
  );
};

export default CampusProgramOne;
