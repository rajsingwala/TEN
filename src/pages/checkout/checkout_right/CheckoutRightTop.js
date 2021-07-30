import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import { selectCart } from "../../../features/cartSlice";
import CheckoutRightTopContent from "./CheckoutRightTopContent";
import ViewItems from "./ViewItems";

const CheckoutRightTop = () => {
  const [width, setWidth] = useState(0);
  const [items, setItems] = useState(false);

  const handleItems = () => {
    setItems(!items);
  };

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  useEffect(() => {
    const updateWindowDimensions = () => {
      const newWidth = window.innerWidth;
      setWidth(newWidth);
    };

    window.addEventListener("resize", updateWindowDimensions);

    return () => window.removeEventListener("resize", updateWindowDimensions);
  }, []);

  const cart = useSelector(selectCart);

  const history = useHistory();

  return (
    <div className="checkout_content_right_top">
      <div className="checkout_content_right_top_title">
        <div className="checkout_content_right_top_title_left">
          Order Summary {width > 1099 && `(${cart?.length})`}
        </div>
        <div className="checkout_content_right_top_title_right">
          {width > 1099 ? (
            <p onClick={() => history.push("/cart")}>Edit Cart</p>
          ) : (
            <p onClick={handleItems}>View Items ({cart?.length})</p>
          )}
        </div>
      </div>

      {items && <ViewItems handleItems={handleItems} />}
      <CheckoutRightTopContent />
    </div>
  );
};

export default CheckoutRightTop;
