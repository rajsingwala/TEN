import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";

const CheckoutNav = () => {
  const history = useHistory();

  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow(!show);
  };

  return (
    <div className="checkout_nav">
      <div className="checkout_nav_left">
        <div className="checkout_nav_left_img">
          <img src="/images/1.jpg" alt="logo" />
        </div>
        <div className="checkout_nav_left_text">checkout</div>
      </div>
      <div className="checkout_nav_right" onClick={() => history.push("/")}>
        Continue Shopping
      </div>

      {/* mobile-nav-right */}
      <div className="checkout_nav_right_mobile">
        {!show ? (
          <FaBars onClick={handleShow} />
        ) : (
          <AiOutlineClose onClick={handleShow} />
        )}
      </div>

      {/* toggle-menu */}
      {show && (
        <div className="checkout_nav_toggle_menu_mask">
          <div className="checkout_nav_toggle_menu">
            <div
              className="checkout_nav_toggle_menu_top"
              onClick={() => history.push("/")}
            >
              Continue Shopping
            </div>
            <div
              className="checkout_nav_toggle_menu_bottom"
              onClick={() => history.push("/cart")}
            >
              Back to Cart
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CheckoutNav;
