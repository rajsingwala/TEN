import React from "react";

const MentorShipFour = () => {
  return (
    <div id="mentorship_four">
      <div className="membership_four_top mentorship">
        {/* title */}
        <div className="membership_four_top_title">
          Career Forum Registration
        </div>

        {/* subtitle */}
        <div className="membership_four_top_subtitle">
          If you would like to be a part of TEN, please fill in your details in
          the form bellow and you will be automatically registered.
        </div>

        {/* form */}
        <div className="membership_four_top_form mentorship">
          <div className="membership_four_top_form_one">
            <div className="membership_four_top_form_one_box mentorship">
              <label>
                Name <span>*</span>
              </label>
              <input type="text" placeholder="First" />
            </div>
            <div className="membership_four_top_form_one_box2 mentorship">
              <input type="text" placeholder="Last" />
            </div>
          </div>

          <div className="membership_four_top_form_one">
            <div className="membership_four_top_form_two_box mentorship">
              <label>
                Email <span>*</span>
              </label>
              <input type="email" />
            </div>
          </div>

          <div className="membership_four_top_form_one">
            <div className="membership_four_top_form_two_box mentorship">
              <label>
                Phone <span>*</span>
              </label>
              <input type="text" placeholder="### ### ####" />
            </div>
          </div>

          <div className="membership_four_top_form_one">
            <div className="membership_four_top_form_four_box mentorship">
              <label>Comments or questions</label>
              <textarea />
            </div>
          </div>
        </div>

        <div className="membership_four_top_form_two mentorship">
          <div className="membership_four_top_form_two_btn mentorship">
            Register
          </div>
        </div>
      </div>

      {/* bottom */}

      <div className="membership_four_bottom mentorship">
        <div className="membership_four_bottom_title">
          To complete your registration, please scan and pay
        </div>
        <div className="membership_four_bottom_img">
          <img src="images/18.webp" alt="QR_CODE" />
        </div>
      </div>
    </div>
  );
};

export default MentorShipFour;
