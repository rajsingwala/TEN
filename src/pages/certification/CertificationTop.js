import React from "react";

const CertificationTop = () => {
  return (
    <div className="certification_top">
      <div className="certification_top_title">TEN Certified Expert</div>

      <div className="certification_top_content">
        <p>Dear Intern,</p>
        <p>
          We at TEN not only strive to provide the best guidance to our interns
          but also ensure their experience with us proves to be a career
          milestone.
        </p>
        <p>
          We hereby offer to certify you as an Expert in your domain for a
          paltry sum of INR 200/- (RUPEES TWO HUNDRED ONLY). This Internship
          encompasses all the major learnings you gave and received and
          establishes you as a certified professional. We are certain this
          accomplishment will go a long way in building your fledgling career
          and prove instrumental in making you the best in business.
        </p>
        <p>
          The{" "}
          <a href="#certification_mid_content_qr" target="_self">
            <span className="certification_top_content_qr">QR code</span>
          </a>{" "}
          below helps you to make the required payment. The certificate would be
          shared on your email Id registered with us, once the payment is
          successful. Also, fill up the form below that helps you subscribe for
          the required certificate.
        </p>
        <p>
          We look forward to certifying you and thereby enhancing your skill set
          and enriching your ever-growing profile.
        </p>
      </div>
    </div>
  );
};

export default CertificationTop;
