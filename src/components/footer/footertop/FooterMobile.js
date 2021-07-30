import React from "react";
import { Link } from "react-router-dom";

const FooterMobile = () => {
  return (
    <div className="footer_mobile">
      <div className="footer_mobile_container">
        {/* left */}
        <div className="footer_mobile_left">
          <div className="footer_top_left_fb">
            <a
              href="https://www.facebook.com/The-Entrepreneurship-Network-105155667888383/"
              target="_blank"
              rel="noreferrer"
            >
              <img src="images/14.webp" alt="facebook" />
            </a>
          </div>
          <div className="footer_top_left_twitter">
            <a
              href="https://twitter.com/We_Are_TEN?s=08"
              target="_blank"
              rel="noreferrer"
            >
              <img src="images/15.webp" alt="twitter" />
            </a>
          </div>
          <div className="footer_top_left_insta">
            <a
              href="https://www.instagram.com/theentrepreneurshipnetwork/"
              target="_blank"
              rel="noreferrer"
            >
              <img src="images/16.webp" alt="instagram" />
            </a>
          </div>
        </div>

        {/* right */}
        <div className="footer_mobile_right">
          <Link to="/about">
            <span className="footer_top_right1">About Us</span>
          </Link>
          <Link to="/contact">
            <span className="footer_top_right1">FAQ's</span>
          </Link>
          <Link to="/contact">
            <span className="footer_top_right1">Contact Us</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FooterMobile;
