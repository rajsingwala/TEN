import React from "react";
import { Radio } from "antd";

const HackaThonSixBottom2 = ({ handleNext }) => {
  return (
    <div className="hackathon_six_bottom2">
      {/* one */}
      <div className="hackathon_six_bottom2_one">
        <label>Have you done Hackathon before? *</label>
        <Radio.Group>
          <Radio value="yes">Yes</Radio>
          <Radio value="no">No</Radio>
        </Radio.Group>
      </div>

      {/* two */}
      <div className="hackathon_six_bottom2_one">
        <label>
          Are you currently pursuing or did you pursue an academic or
          professional degree ? *
        </label>
        <Radio.Group>
          <Radio value="yesam">Yes, I am</Radio>
          <Radio value="yesdid">Yes, I did</Radio>
          <Radio value="no">No, I am not</Radio>
        </Radio.Group>
      </div>

      {/* three */}
      <div className="hackathon_six_bottom2_three">
        <label>Is there anything else you would like to share ?</label>
        <textarea placeholder="Share them with us" type="text" />
      </div>

      {/* four */}
      <div className="hackathon_six_bottom2_four">
        <p>
          Scan the QR code below to pay your group's registration fees. before
          submitting
        </p>
        <div className="hackathon_six_bottom2_four_img">
          <img src="images/18.webp" alt="QR_CODE" />
        </div>
      </div>

      {/* five */}
      <div className="hackathon_six_bottom2_five">
        <div className="hackathon_six_bottom2_five_btn1" onClick={handleNext}>
          Back
        </div>
        <div className="hackathon_six_bottom2_five_btn2">Submit</div>
      </div>
    </div>
  );
};

export default HackaThonSixBottom2;
