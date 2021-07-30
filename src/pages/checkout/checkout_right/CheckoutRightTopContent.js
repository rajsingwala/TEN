import React from "react";
import { useSelector } from "react-redux";
import { selectCart } from "../../../features/cartSlice";
import numeral from "numeral";

const CheckoutRightTopContent = () => {
  const cart = useSelector(selectCart);

  return (
    <div className="checkout_right_top_content">
      {cart &&
        cart.length > 0 &&
        cart.map((item, i) => (
          <div className="checkout_right_top_item">
            <div className="checkout_right_top_item_left">
              <img src={item?.img} alt={item?.title} />
            </div>
            <div className="checkout_right_top_item_mid">
              <p>{item?.title}</p>
              <p className="checkout_right_top_item_mid_quantity">
                Qty : {item?.count}
              </p>
            </div>
            <div className="checkout_right_top_item_right">
              {`₹${numeral(item?.price * item?.count).format("0,0.00")} `}
            </div>
          </div>
        ))}
    </div>
  );
};

export default CheckoutRightTopContent;
