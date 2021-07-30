import React, { useEffect } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import Aos from "aos";
import "aos/dist/aos.css";

const HiringSecond = ({ handleFirst }) => {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <>
      {/* img */}
      <div className="hiring_bottom_img_second" />
      {/* content */}
      <div className="hiring_bottom_content" data-aos="zoom-in-up">
        {/* title */}
        <div className="hiring_bottom_title2">Your Personal Information</div>

        {/* input-fields  */}
        <div className="hiring_bottom2_inputs">
          {/* first */}
          <div className="hiring_bottom2_inputs1">
            <div className="hiring_bottom2_field">
              <lable>First Name *</lable>
              <input type="text" required />
            </div>
            <div className="hiring_bottom2_field_email">
              <lable>Email *</lable>
              <input type="email" required />
            </div>
          </div>

          <div className="hiring_bottom2_inputs1">
            <div className="hiring_bottom2_field">
              <lable>Last Name *</lable>
              <input type="text" required />
            </div>
            <div className="hiring_bottom2_field">
              <lable>Mobile No *</lable>
              <input type="email" required />
            </div>
          </div>
        </div>

        {/* checkbox */}
        <div className="hiring_bottom2_checkbox_div">
          <label className="hiring_bottom2_checkbox">
            <input type="checkbox" />
            <span>I confirm that my registration payment is complete</span>
          </label>

          <ReCAPTCHA
            sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
            className="hiring_bottom_captcha"
          />

          <div className="hiring_bottom_mobile_email">
            <label>Email *</label>
            <input type="email" />
          </div>

          <div className="hiring_bottom2_btns">
            <div className="hiring_bottom2_btn1" onClick={handleFirst}>
              {"<"} Back
            </div>
            <div className="hiring_bottom2_btn2">Submit</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HiringSecond;
