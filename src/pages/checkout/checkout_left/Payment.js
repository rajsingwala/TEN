import React, { useState } from "react";
import { Radio } from "antd";
import Payment2 from "./Payment2";

const Payment = () => {
  const [online, setOnline] = useState(true);

  return (
    <div className="checkout_left_payment">
      <div className="checkout_left_payment_title">1 Payment</div>
      <Radio.Group
        className="checkout_left_payment_chose"
        defaultValue="online"
      >
        <label className="checkout_left_payment_chose_top">
          <Radio value="online" onClick={() => setOnline(true)}>
            Credit/Debit Cards
          </Radio>
          <div className="checkout_left_payment_chose_top_img">
            <div className="checkout_left_payment_chose_top_img1">
              <img src="/images/master.svg" alt="master" />
            </div>
            <div className="checkout_left_payment_chose_top_img1">
              <img src="/images/visa.svg" alt="visa" />
            </div>
            <div className="checkout_left_payment_chose_top_img1">
              <img src="/images/card3.svg" alt="card3" />
            </div>
            <div className="checkout_left_payment_chose_top_img1">
              <img src="/images/card4.svg" alt="card4" />
            </div>
            <p>and more...</p>
          </div>
        </label>

        <label className="checkout_left_payment_chose_bottom">
          <Radio value="manual" onClick={() => setOnline(false)}>
            Manual Payment
          </Radio>
          <div className="checkout_left_payment_chose_top_img2">
            <img src="/images/card5.svg" alt="card5" />
          </div>
        </label>
      </Radio.Group>

      <Payment2 online={online} />
    </div>
  );
};

export default Payment;
