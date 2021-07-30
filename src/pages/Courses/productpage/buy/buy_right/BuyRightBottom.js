import React from "react";
import numeral from "numeral";

const BuyRightBottom = ({ data }) => {
  const tax = () => {
    let taxes = (data?.price * 18) / 100;
    return Math.round(taxes);
  };

  const total = () => {
    let taxes = tax();

    let totals = +data?.price + +taxes;
    return totals;
  };

  return (
    <div className="checkout_right_bottom">
      <div className="checkout_right_bottom_top">
        <div className="checkout_right_bottom_top_left">Subtotal</div>
        <div className="checkout_right_bottom_top_right">{`₹${numeral(
          data?.price
        ).format("0,0.00")}`}</div>
      </div>
      <div className="checkout_right_bottom_mid">
        <div className="checkout_right_bottom_mid_left">Taxes</div>
        <div className="checkout_right_bottom_mid_right">{`₹${numeral(
          tax()
        ).format("0,0.00")}`}</div>
      </div>
      <div className="checkout_right_bottom_bottom">
        {" "}
        <div className="checkout_right_bottom_bottom_left">Total</div>
        <div className="checkout_right_bottom_bottom_right">{`₹${numeral(
          total()
        ).format("0,0.00")}`}</div>
      </div>
    </div>
  );
};

export default BuyRightBottom;
