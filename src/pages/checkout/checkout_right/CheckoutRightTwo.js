import React, { useState } from "react";

const CheckoutRightTwo = () => {
  const [show, setShow] = useState(false);
  const [ip, setIp] = useState("");

  const handleShow = () => {
    setShow(!show);
  };

  return (
    <div className="checkout_right_two">
      <div className="checkout_right_two_line" />
      <div className="checkout_right_two_top">
        <svg
          viewBox="0 0 14 16"
          fill="currentColor"
          width="1em"
          height="1em"
          onClick={handleShow}
        >
          <g
            transform="rotate(30 7.442 12.846)"
            fill="currentColor"
            fill-rule="evenodd"
          >
            <path
              d="M1 14.005C1 14 9.005 14 9.005 14 9 14 9 5.414 9 5.414l-4-4-4 4v8.59zM0 5l5-5 5 5v9.005c0 .55-.456.995-.995.995H.995C.445 15 0 14.544 0 14.005V5z"
              fill-rule="nonzero"
            ></path>
            <circle cx="5" cy="5" r="1"></circle>
          </g>
        </svg>
        <span onClick={handleShow}>Enter a promo code</span>
      </div>

      <div
        className={
          show
            ? "checkout_right_two_bottom active"
            : "checkout_right_two_bottom"
        }
      >
        <input
          type="text"
          className="checkout_right_two_bottom_ip"
          value={ip}
          onChange={(e) => setIp(e.target.value)}
        />
        <div
          className={
            ip
              ? "checkout_right_two_bottom_btn active"
              : "checkout_right_two_bottom_btn"
          }
        >
          Apply
        </div>
      </div>
      <div className="checkout_right_two_line" />
    </div>
  );
};

export default CheckoutRightTwo;
