import React from "react";
import Payment from "./Payment";
import Address from "./Address";
import { useDispatch, useSelector } from "react-redux";
import { setLogin, selectLogin } from "../../../features/toggleSlice";

const CheckoutLeft = () => {
  const dispatch = useDispatch();
  const login = useSelector(selectLogin);

  return (
    <div className="checkout_content_left">
      <div className="checkout_content_left_title">
        <p>
          Already have an account?{" "}
          <span onClick={() => dispatch(setLogin({ login: !login }))}>
            Log in
          </span>{" "}
          for a faster checkout.
        </p>
      </div>

      <Payment />
      <Address />
    </div>
  );
};

export default CheckoutLeft;
