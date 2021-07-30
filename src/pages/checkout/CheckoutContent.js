import React from "react";
import CheckoutLeft from "./checkout_left/CheckoutLeft";
import CheckoutRight from "./checkout_right/CheckoutRight";

const CheckoutContent = () => {
  return (
    <div className="checkout_content">
      <div className="checkout_content_container">
        <CheckoutLeft />
        <CheckoutRight />
      </div>
    </div>
  );
};

export default CheckoutContent;
