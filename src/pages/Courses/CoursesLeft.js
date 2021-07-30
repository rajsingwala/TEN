import React, { useState } from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { Slider } from "antd";
import numeral from "numeral";

const CoursesLeft = ({ initValue, handleSlider }) => {
  const [price, setPrice] = useState(true);

  const handlePrice = () => {
    setPrice(!price);
  };

  return (
    <div className="courses_left">
      <div className="courses_left_title">Filter by</div>
      <div className="courses_left_price">
        <div className="courses_left_price_title">
          <span>Price</span>
          <span>
            {price ? (
              <AiOutlineMinus onClick={handlePrice} />
            ) : (
              <AiOutlinePlus onClick={handlePrice} />
            )}
          </span>
        </div>
        {price && (
          <div className="courses_left_price_slider">
            <Slider
              value={initValue}
              onChange={handleSlider}
              tipFormatter={false}
              range
              min={199}
              max={39999}
              step="200"
            />
            <div className="courses_left_price_value">
              <span>₹ {numeral(initValue[0]).format("0,0.00")}</span>
              <span>₹ {numeral(initValue[1]).format("0,0.00")}</span>
            </div>
          </div>
        )}
        <div className="courses_left_price_line" />
      </div>
    </div>
  );
};

export default CoursesLeft;
