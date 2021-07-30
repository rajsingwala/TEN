import React from "react";
import CartLeft from "./CartLeft";
import CartRight from "./CartRight";
import { selectCart } from "../../features/cartSlice";
import { useSelector } from "react-redux";

const Cart = () => {
  const cart = useSelector(selectCart);

  return (
    <div className="cart">
      <div className="cart_container">
        <CartLeft />
        {cart.length > 0 && <CartRight />}
      </div>
    </div>
  );
};

export default Cart;
