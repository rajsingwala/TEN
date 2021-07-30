import React from "react";
import CheckoutRightTop from "./CheckoutRightTop";
import CheckoutRightBottom from "./CheckoutRightBottom";
import CheckoutRightTwo from "./CheckoutRightTwo";
import CheckoutRightBottomImg from "./CheckoutRightBottomImg";

const CheckoutRight = () => {
  return (
    <div className="checkout_content_right">
      <CheckoutRightTop />
      <CheckoutRightTwo />
      <CheckoutRightBottom />
      <CheckoutRightBottomImg />
    </div>
  );
};

export default CheckoutRight;
