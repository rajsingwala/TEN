import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { useHistory } from "react-router-dom";
import numeral from "numeral";

const ViewItems = ({ handleItems, data }) => {
  const history = useHistory();

  return (
    <div className="checkout_view_items">
      <div className="checkout_view_items_title">
        <AiOutlineClose onClick={handleItems} />
      </div>

      <div className="checkout_view_items_container">
        {/* title */}
        <div className="checkout_view_items_container_title">
          <div className="checkout_view_items_container_title_left">
            Cart Items (1)
          </div>
          <div
            className="checkout_view_items_container_title_right"
            onClick={() => history.push("/cart")}
          >
            Edit Cart
          </div>
        </div>

        {/* content */}
        <div className="checkout_view_items_content">
          <div className="checkout_view_items_content_item">
            <div className="checkout_view_items_content_item_left">
              <div className="checkout_view_items_content_item_left_top">
                <img src={data?.img} alt={data?.title} />
              </div>
              <div className="checkout_view_items_content_item_left_bottom">
                <p>{data?.title}</p>
                <p className="checkout_view_items_content_item_left_bottom_qty">
                  Qty: 1
                </p>
              </div>
            </div>
            <div className="checkout_view_items_content_item_right">{`₹${numeral(
              data?.price
            ).format("0,0.00")}`}</div>
          </div>
        </div>

        {/* bottom */}
        <div className="checkout_view_items_btn" onClick={handleItems}>
          Close
        </div>
      </div>
    </div>
  );
};

export default ViewItems;
