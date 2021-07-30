import React from "react";

const CampusProgramFour = () => {
  return (
    <div id="campus_program_four">
      <div className="campus_program_four_content">
        {/* title */}
        <div className="membership_four_top_title campus">
          Campus Ambassador Registration Form
        </div>

        {/* subtitle */}
        <div className="membership_four_top_subtitle campus">
          If you would like to be a part of TEN, please fill in your details in
          the form bellow and you will be automatically registered.
        </div>

        {/* form */}
        <div className="membership_four_top_form campus">
          <div className="membership_four_top_form_one">
            <div className="membership_four_top_form_one_box campus">
              <label>
                Name <span>*</span>
              </label>
              <input type="text" placeholder="First" />
            </div>
            <div className="membership_four_top_form_one_box2 campus">
              <input type="text" placeholder="Last" />
            </div>
          </div>

          <div className="membership_four_top_form_one">
            <div className="membership_four_top_form_two_box campus">
              <label>
                Email <span>*</span>
              </label>
              <input type="email" />
            </div>
          </div>

          <div className="membership_four_top_form_one">
            <div className="membership_four_top_form_two_box campus">
              <label>
                Phone <span>*</span>
              </label>
              <input type="text" placeholder="### ### ####" />
            </div>
          </div>

          <div className="membership_four_top_form_one">
            <div className="membership_four_top_form_four_box campus">
              <label>Comments or questions</label>
              <textarea />
            </div>
          </div>
        </div>

        {/* btn */}
        <div className="membership_four_top_form_two">
          <div className="membership_four_top_form_two_btn campus">
            Register
          </div>
        </div>
      </div>
    </div>
  );
};

export default CampusProgramFour;
