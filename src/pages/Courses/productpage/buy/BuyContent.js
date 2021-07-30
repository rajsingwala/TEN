import React from "react";
import CheckoutLeft from "../../../checkout/checkout_left/CheckoutLeft";
import BuyRight from "./buy_right/BuyRight";

const BuyContent = ({ data }) => {
  return (
    <div className="checkout_content">
      <div className="checkout_content_container">
        <CheckoutLeft />
        <BuyRight data={data} />
      </div>
    </div>
  );
};

export default BuyContent;
