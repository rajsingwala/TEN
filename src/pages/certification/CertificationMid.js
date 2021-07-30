import React from "react";

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

const CertificationMid = () => {
  return (
    <div className="certification_mid">
      <div className="certification_mid_top">
        <div className="certification_mid_title">
          Subscribe here to get Certificates
        </div>

        <div className="certification_mid_content">
          <div className="certification_mid_content_left">
            <select defaultValue="InternShip Track">
              <option
                disabled
                className="certification_mid_content_left_disable"
              >
                InternShip Track
              </option>
              {options.map((op, i) => (
                <option
                  key={i}
                  value={op}
                  className="certification_mid_content_left_option"
                >
                  {op}
                </option>
              ))}
            </select>
            <input
              type="text"
              placeholder="Mobile No."
              className="certification_mid_content_left_mobile"
            />
            <input
              type="text"
              placeholder="PAYMENT TRANSACTION ID"
              className="certification_mid_content_left_id"
            />
          </div>

          <div className="certification_mid_content_right">
            <input
              type="text"
              placeholder="Full Name"
              className="certification_mid_content_left_mobile"
            />
            <input
              type="email"
              placeholder="Email"
              className="certification_mid_content_left_mobile"
            />
          </div>
        </div>

        <div className="certification_mid_btns">
          <div className="certification_mid_btn">Subscribe</div>
        </div>
      </div>

      <div id="certification_mid_content_qr">
        <div className="certification_mid_content_qr">
          <img src="images/18.webp" alt="QR_CODE" />
        </div>
      </div>
    </div>
  );
};

export default CertificationMid;
