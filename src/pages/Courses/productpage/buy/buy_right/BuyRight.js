import React from "react";
import BuyRightTop from "./BuyRightTop";
import CheckoutRightTwo from "../../../../checkout/checkout_right/CheckoutRightTwo";
import BuyRightBottom from "./BuyRightBottom";
import CheckoutRightBottomImg from "../../../../checkout/checkout_right/CheckoutRightBottomImg";

const BuyRight = ({ data }) => {
  return (
    <div className="checkout_content_right">
      <BuyRightTop data={data} />
      <CheckoutRightTwo />
      <BuyRightBottom data={data} />
      <CheckoutRightBottomImg />
    </div>
  );
};

export default BuyRight;
