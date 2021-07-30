import React from "react";
import numeral from "numeral";

const BuyRightTopContent = ({ data }) => {
  const { img, title, price } = data;

  return (
    <div className="checkout_right_top_content">
      <div className="checkout_right_top_item">
        <div className="checkout_right_top_item_left">
          <img src={img && img} alt={title && title} />
        </div>
        <div className="checkout_right_top_item_mid">
          <p>{title && title}</p>
          <p className="checkout_right_top_item_mid_quantity">Qty : 1</p>
        </div>
        <div className="checkout_right_top_item_right">
          {`₹${numeral(price && price).format("0,0.00")} `}
        </div>
      </div>
    </div>
  );
};

export default BuyRightTopContent;
