import React from "react";
import numeral from "numeral";
import { selectCart } from "../../../features/cartSlice";
import { useSelector } from "react-redux";

const CheckoutRightBottom = () => {
  const cart = useSelector(selectCart);

  const subTotal = () => {
    let total = cart.reduce((t, item) => t + item.price * item.count, 0);
    return total;
  };

  const tax = () => {
    const total = subTotal();

    let taxes = (total * 18) / 100;
    return Math.round(taxes);
  };

  const total = () => {
    let subtotal = subTotal();
    let taxes = tax();

    let totals = subtotal + taxes;
    return totals;
  };

  return (
    <div className="checkout_right_bottom">
      <div className="checkout_right_bottom_top">
        <div className="checkout_right_bottom_top_left">Subtotal</div>
        <div className="checkout_right_bottom_top_right">{`₹${numeral(
          subTotal()
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

export default CheckoutRightBottom;
