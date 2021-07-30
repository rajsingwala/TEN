import React from "react";
import CheckoutNav from "./CheckoutNav";
import CheckoutContent from "./CheckoutContent";

const Checkout = () => {
  return (
    <div className="checkout">
      <div className="checkout_container">
        <CheckoutNav />
        <CheckoutContent />
      </div>
    </div>
  );
};

export default Checkout;
