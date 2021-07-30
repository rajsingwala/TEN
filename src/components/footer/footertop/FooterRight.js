import React from "react";
import { Link } from "react-router-dom";

const FooterRight = () => {
  return (
    <div className="footer_top_right">
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
  );
};

export default FooterRight;
