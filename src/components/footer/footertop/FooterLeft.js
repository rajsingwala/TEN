import React from "react";

const FooterLeft = () => {
  return (
    <div className="footer_top_left">
      <div className="footer_top_left_fb">
        <a
          href="https://www.facebook.com/The-Entrepreneurship-Network-105155667888383/"
          target="_blank"
          rel="noreferrer"
        >
          <img src="/images/14.webp" alt="facebook" />
        </a>
      </div>
      <div className="footer_top_left_twitter">
        <a
          href="https://twitter.com/We_Are_TEN?s=08"
          target="_blank"
          rel="noreferrer"
        >
          <img src="/images/15.webp" alt="twitter" />
        </a>
      </div>
      <div className="footer_top_left_insta">
        <a
          href="https://www.instagram.com/theentrepreneurshipnetwork/"
          target="_blank"
          rel="noreferrer"
        >
          <img src="/images/16.webp" alt="instagram" />
        </a>
      </div>
    </div>
  );
};

export default FooterLeft;
