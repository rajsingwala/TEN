import React from "react";

const HiringTop = () => {
  return (
    <div className="hiring_top">
      <div className="hiring_top_bg" />
      <div className="hiring_top_container">
        {/* title */}
        <div className="hiring_top_title">We Are Hiring Interns</div>

        {/* content */}
        <div className="hiring_top_content">
          {/* one */}
          <div className="hiring_top_content_one">
            <p>
              The Student Intern program is a structured and guided work-based
              learning program for students currently enrolled in India.
            </p>
            <p>
              There is a small registration fee, INR 100 /- (RUPEES ONE HUNDRED
              ONLY) applicable to all incoming interns as part of this
              One-of-a-Kind Point based Program. This is required not just to
              ensure a seamless on-boarding and exit process but also to supply
              the interns with relevant study material and make them aware of
              how a corporate setup works.
            </p>
          </div>

          {/* two */}
          <div className="hiring_top_content_two">
            {/* content */}
            <div className="hiring_top_content_two_content">
              <p className="hiring_top_content_two_content_one">
                Scan the QR code to complete your payment and submit the below
                application form to start with your registration process.
              </p>
              <p>
                Please keep the payment transaction ID handy for submitting the
                form.
              </p>
              <p>
                Note: This internship does not offer an opportunity to earn
                money, rather helps an individual grow by working on the job and
                earn a certificate upon successful completion.
              </p>
              <p>
                Check out few of our open internship positions below Refer the
                application form for more open positions
              </p>

              <p className="hiring_top_content_two_content_two">
                Digital Marketing Interns
              </p>
              <p className="hiring_top_content_two_content_two">
                {" "}
                General Management Interns
              </p>
              <p className="hiring_top_content_two_content_two">
                {" "}
                Technical/Software Experts
              </p>
              <p className="hiring_top_content_two_content_two">
                Product Management Interns
              </p>
              <p className="hiring_top_content_two_content_two">
                Content Interns and more...
              </p>
            </div>

            {/* img */}
            <div className="hiring_top_content_two_img_div">
              <div className="hiring_top_content_two_img">
                <img src="images/18.webp" alt="QR-CODE" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HiringTop;
