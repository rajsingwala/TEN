import React from "react";

const MemberShipFourTop = () => {
  return (
    <div className="membership_four_top">
      {/* title */}
      <div className="membership_four_top_title">
        Membership Registration Form
      </div>

      {/* subtitle */}
      <div className="membership_four_top_subtitle">
        If you would like to be a part of TEN, please fill in your details in
        the form bellow and you will be automatically registered.
      </div>

      {/* form */}
      <div className="membership_four_top_form">
        <div className="membership_four_top_form_one">
          <div className="membership_four_top_form_one_box">
            <label>
              Name <span>*</span>
            </label>
            <input type="text" placeholder="First" />
          </div>
          <div className="membership_four_top_form_one_box2">
            <input type="text" placeholder="Last" />
          </div>
        </div>

        <div className="membership_four_top_form_one">
          <div className="membership_four_top_form_two_box">
            <label>
              Email <span>*</span>
            </label>
            <input type="email" />
          </div>
        </div>

        <div className="membership_four_top_form_one">
          <div className="membership_four_top_form_two_box">
            <label>
              Phone <span>*</span>
            </label>
            <input type="text" placeholder="### ### ####" />
          </div>
        </div>

        <div className="membership_four_top_form_one">
          <div className="membership_four_top_form_four_box">
            <label>Comments or questions</label>
            <textarea />
          </div>
        </div>
      </div>

      <div className="membership_four_top_form_two">
        <div className="membership_four_top_form_two_btn">Register</div>
      </div>
    </div>
  );
};

export default MemberShipFourTop;
