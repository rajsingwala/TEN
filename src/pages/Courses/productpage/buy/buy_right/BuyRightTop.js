import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import BuyRightTopContent from "./BuyRightTopContent";
import ViewItems from "./ViewItems";

const BuyRightTop = ({ data }) => {
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

  const history = useHistory();

  return (
    <div className="checkout_content_right_top">
      <div className="checkout_content_right_top_title">
        <div className="checkout_content_right_top_title_left">
          Order Summary {width > 1099 && `(1)`}
        </div>
        <div className="checkout_content_right_top_title_right">
          {width > 1099 ? (
            <p onClick={() => history.push("/cart")}>Edit Cart</p>
          ) : (
            <p onClick={handleItems}>View Items (1)</p>
          )}
        </div>
      </div>

      {items && <ViewItems handleItems={handleItems} data={data} />}
      <BuyRightTopContent data={data} />
    </div>
  );
};

export default BuyRightTop;
