import React from "react";
import FooterLeft from "./FooterLeft";
import FooterMid from "./FooterMid";
import FooterMobile from "./FooterMobile";
import FooterRight from "./FooterRight";

const FooterTop = () => {
  return (
    <div className="footer_top">
      <div className="footer_top_container">
        <FooterLeft />
        <FooterMid />
        <FooterRight />
        <FooterMobile />
      </div>
    </div>
  );
};

export default FooterTop;
