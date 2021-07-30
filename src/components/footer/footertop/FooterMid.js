import React from "react";

const FooterMid = () => {
  return (
    <div className="footer_top_mid">
      {/* title */}
      <div className="footer_top_mid_title">Subscribe to our newsletter</div>

      {/* mid */}
      <div className="footer_top_mid_mid">
        <input type="text" placeholder="Full Name" required />
        <input type="text" placeholder="College Name" required />
        <input type="text" placeholder="Mobile No" required />
        <input type="text" placeholder="Email" required />
      </div>

      {/* second-last */}
      <div className="footer_top_mid_bottom1">
        <label className="footer_checkbox">
          <input type="checkbox" />
          <span>Join TEN's Discord Community</span>
        </label>
      </div>

      {/* last */}
      <div className="footer_top_mid_bottom">
        <div className="footer_top_mid_btn">Submit</div>
      </div>
    </div>
  );
};

export default FooterMid;
