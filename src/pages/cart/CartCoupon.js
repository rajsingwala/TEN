import React, { useState } from "react";

const CartCoupon = () => {
  const [coupon, setCoupon] = useState(false);

  const handleCoupon = () => {
    setCoupon(!coupon);
  };

  return (
    <div className="cart_left_three">
      {/* top */}
      <div className="cart_left_three_top" onClick={handleCoupon}>
        {" "}
        <svg viewBox="0 0 14 16">
          <g
            id="final-cart"
            stroke="none"
            fill="none"
            stroke-width="1"
            fill-rule="evenodd"
          >
            <g
              id="general-layout"
              transform="translate(-515 -839)"
              fill="rgba(222, 175, 20, 0.8)"
            >
              <g id="coupon-icon" transform="rotate(30 -1300.653 1393.349)">
                <path
                  d="M1,14.0046024 C0.999339408,13.9996515 9.00460243,14 9.00460243,14 C8.99965149,14.0006606 9,5.41421356 9,5.41421356 L5,1.41421356 L1,5.41421356 L1,14.0046024 Z M-2.72848411e-12,5 L5,-4.66116035e-12 L10,5 L10,14.0046024 C10,14.5543453 9.5443356,15 9.00460243,15 L0.995397568,15 C0.445654671,15 -2.72848411e-12,14.5443356 -2.72848411e-12,14.0046024 L-2.72848411e-12,5 Z"
                  id="Rectangle-6"
                  fill-rule="nonzero"
                ></path>
                <circle id="Oval-2" cx="5" cy="5" r="1"></circle>
              </g>
            </g>
          </g>
        </svg>
        <span>Enter a promo code</span>
      </div>

      {/* bottom */}
      {coupon && (
        <div className="cart_left_three_bottom">
          <input type="text" placeholder="Enter a promo code" />
          <div className="cart_left_three_bottom_btn">Apply</div>
        </div>
      )}
    </div>
  );
};

export default CartCoupon;
