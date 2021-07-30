import React, { useState } from "react";
import {
  CountryDropdown,
  RegionDropdown,
  CountryRegionData,
} from "react-country-region-selector";

const Address = () => {
  const [country, setCountry] = useState("");
  const [region, setRegion] = useState("");

  return (
    <div className="checkout_left_payment_address">
      <div className="checkout_left_payment_address_title">Billing Address</div>

      <div className="checkout_left_payment_address_content">
        {/* email */}
        <div className="checkout_left_payment_address_content_box">
          <label className="checkout_left_payment_address_label">
            <span>*</span>Email for order confirmation
          </label>
          <input type="text" className="checkout_left_payment_address_ip" />
        </div>

        {/* first-name */}
        <div className="checkout_left_payment_address_content_box">
          <label className="checkout_left_payment_address_label">
            <span>*</span>First Name
          </label>
          <input type="text" className="checkout_left_payment_address_ip" />
        </div>

        {/* Last-name */}
        <div className="checkout_left_payment_address_content_box">
          <label className="checkout_left_payment_address_label">
            <span>*</span>Last Name
          </label>
          <input type="text" className="checkout_left_payment_address_ip" />
        </div>

        {/* address */}
        <div className="checkout_left_payment_address_content_box">
          <label className="checkout_left_payment_address_label">
            <span>*</span>Address
          </label>
          <input type="text" className="checkout_left_payment_address_ip" />
        </div>

        {/* city */}
        <div className="checkout_left_payment_address_content_box">
          <label className="checkout_left_payment_address_label">
            <span>*</span>City
          </label>
          <input type="text" className="checkout_left_payment_address_ip" />
        </div>

        {/* country-region */}
        <div className="checkout_left_payment_address_content_box2">
          <div className="checkout_left_payment_address_content_box2_div1">
            <label className="checkout_left_payment_address_label">
              <span>*</span>Country
            </label>
            <CountryDropdown
              value={country}
              onChange={(val) => setCountry(val)}
              className="checkout_left_payment_address_content_box2_ip"
            />
          </div>
          <div className="checkout_left_payment_address_content_box2_div1">
            <label className="checkout_left_payment_address_label">
              <span>*</span>Region
            </label>
            <RegionDropdown
              country={country}
              value={region}
              onChange={(val) => setRegion(val)}
              className="checkout_left_payment_address_content_box2_ip"
            />
          </div>
        </div>

        {/* phone-zipcode */}
        <div className="checkout_left_payment_address_content_box2">
          <div className="checkout_left_payment_address_content_box2_div1">
            <label className="checkout_left_payment_address_label">
              <span>*</span>Zip / Postal Code
            </label>
            <input
              className="checkout_left_payment_address_content_box2_ip"
              type="text"
            />
          </div>
          <div className="checkout_left_payment_address_content_box2_div1">
            <label className="checkout_left_payment_address_label">
              <span>*</span>Phone
            </label>
            <input
              className="checkout_left_payment_address_content_box2_ip"
              type="text"
            />
          </div>
        </div>
      </div>

      {/* btn */}
      <div className="checkout_left_payment_btn">Continue</div>

      {/* review */}
      <div className="checkout_left_payment_review">2 Review & Place Order</div>
    </div>
  );
};

export default Address;
