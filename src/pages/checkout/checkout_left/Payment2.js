import React from "react";
import { BsFillLockFill } from "react-icons/bs";
import { usePaymentInputs } from "react-payment-inputs";
import images from "react-payment-inputs/images";

const Payment2 = ({ online }) => {
  const {
    meta,
    getCardNumberProps,
    getExpiryDateProps,
    getCVCProps,
    getCardImageProps,
  } = usePaymentInputs();

  return (
    <div className="checkout_payment_left_payment2">
      {online ? (
        <>
          <div className="checkout_payment_left_payment2_title">
            <BsFillLockFill className="checkout_payment_left_payment2_lock" />
            <p>Your payment is secure.</p>
          </div>
          <div className="checkout_payment_left_payment2_content">
            <div className="checkout_payment_left_payment2_box1">
              <label className="checkout_payment_left_payment2_label">
                <span>*</span>Card Number
              </label>
              <div className="checkout_payment_left_payment2_ip_div">
                <input
                  placeholder="Enter Card Number"
                  {...getCardNumberProps({})}
                  className="checkout_payment_left_payment2_ip"
                />
                <svg
                  {...getCardImageProps({ images })}
                  className="checkout_payment_left_payment2_svg"
                />
              </div>
            </div>

            <div className="checkout_payment_left_payment2_box2">
              <div className="checkout_payment_left_payment2_box2_one">
                <label className="checkout_payment_left_payment2_label">
                  <span>*</span>Expiration Date
                </label>
                <input
                  {...getExpiryDateProps({})}
                  className="checkout_payment_left_payment2_ip2"
                />
              </div>
              <div className="checkout_payment_left_payment2_box2_two">
                <label className="checkout_payment_left_payment2_label">
                  <span>*</span>Security Code (CVV)
                </label>
                <input
                  {...getCVCProps({})}
                  className="checkout_payment_left_payment2_ip2"
                />
              </div>
            </div>

            <div className="checkout_payment_left_payment2_box1">
              <label className="checkout_payment_left_payment2_label">
                <span>*</span>Card Holder Name
              </label>
              <input
                type="text"
                className="checkout_payment_left_payment2_ip"
              />
            </div>
          </div>
        </>
      ) : (
        <div className="checkout_payment_left_payment2_manual">
          <p>Thanks for your purchase.</p>
          <p className="checkout_payment_left_payment2_manual_bold">
            Please use any UPI payment app and complete the transaction on
            8595986120@okbizaxis.
          </p>
          <p>
            The merchant name on using the above UPI would be reflected as{" "}
            <span className="checkout_payment_left_payment2_manual_bold2">
              Limitless Technologies
            </span>
          </p>
        </div>
      )}
    </div>
  );
};

export default Payment2;
