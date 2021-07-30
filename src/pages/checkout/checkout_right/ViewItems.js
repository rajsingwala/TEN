import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { selectCart } from "../../../features/cartSlice";
import numeral from "numeral";

const ViewItems = ({ handleItems }) => {
  const cart = useSelector(selectCart);

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
            Cart Items ({cart?.length})
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
          {cart &&
            cart.length > 0 &&
            cart.map((item, i) => (
              <div className="checkout_view_items_content_item" key={i}>
                <div className="checkout_view_items_content_item_left">
                  <div className="checkout_view_items_content_item_left_top">
                    <img src={item?.img} alt={item?.title} />
                  </div>
                  <div className="checkout_view_items_content_item_left_bottom">
                    <p>{item?.title}</p>
                    <p className="checkout_view_items_content_item_left_bottom_qty">
                      Qty: {item?.count}
                    </p>
                  </div>
                </div>
                <div className="checkout_view_items_content_item_right">{`₹${numeral(
                  item?.count * item?.price
                ).format("0,0.00")}`}</div>
              </div>
            ))}
        </div>

        {/* bottom */}
        <div className="checkout_view_items_btn" onClick={handleItems}>Close</div>
      </div>
    </div>
  );
};

export default ViewItems;
