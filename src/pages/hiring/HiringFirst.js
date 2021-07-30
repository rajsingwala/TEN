import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const options = [
  "Digital Marketing",
  "Market Research",
  "Sales",
  "Text Content Preparation",
  "Graphic Content Preparation",
  "Video Content Preparation",
  "Audio Content Preparation",
  "Angular Developer",
  "React Developer",
  "Java Developer",
  "SpringBoot Developer",
  "WordPress Developer",
  "Product Manager",
  "Project Manager",
  "Program Management",
  "Strategic RelationShip Management",
  "Entrepreneur in residence",
  "Technical Program Management",
];

const HiringFirst = ({ handleFirst }) => {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <>
      {/* img */}
      <div className="hiring_bottom_img" />

      {/* content */}
      <div className="hiring_bottom_content" data-aos="zoom-in-up">
        {/* title */}
        <div className="hiring_bottom_title">Application Form</div>

        {/* subtitle */}
        <div className="hiring_bottom_subtitle">Registration Fee Rs. 100/-</div>

        {/* input-field */}
        <div className="hiring_bottom_field">
          {/* internship */}
          <div className="hiring_bottom_field_one">
            <label>Choose relevant internship opening *</label>
            <select required>
              <option
                selected
                disabled
                className="hiring_bottom_field_one_disable"
              />
              {options.map((op, i) => (
                <option
                  key={i}
                  className="certification_mid_content_left_option"
                >
                  {op}
                </option>
              ))}
            </select>
          </div>

          {/* employment*/}
          <div className="hiring_bottom_field_two">
            <label>What's your employment status? *</label>
            <select required>
              <option
                selected
                disabled
                className="hiring_bottom_field_one_disable"
              />
              <option className="certification_mid_content_left_option">
                College Student
              </option>
              <option className="certification_mid_content_left_option">
                Employed
              </option>
              <option className="certification_mid_content_left_option">
                UnEmployed
              </option>
              <option className="certification_mid_content_left_option">
                Other
              </option>
            </select>
          </div>

          {/* experience */}
          <div className="hiring_bottom_field_two">
            <label>Do you have previous experience? *</label>
            <select required>
              <option
                selected
                disabled
                className="hiring_bottom_field_one_disable"
              />
              <option className="certification_mid_content_left_option">
                Yes
              </option>
              <option className="certification_mid_content_left_option">
                No
              </option>
            </select>
          </div>

          {/* id */}
          <div className="hiring_bottom_field_one">
            <label>Payment Transaction ID *</label>
            <input type="text" required />
          </div>

          {/* next */}
          <div className="hiring_bottom_next" onClick={handleFirst}>
            Next
          </div>
        </div>
      </div>
    </>
  );
};

export default HiringFirst;
