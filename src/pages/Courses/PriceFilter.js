import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { Slider } from "antd";
import numeral from "numeral";

const PriceFilter = ({
  filter,
  handleFilter,
  initValue,
  handleSlider,
  setInitValue,
  viewData,
  handleMobileSlider,
  handleMobileFilter,
  handleIsFilter,
}) => {
  const [show, setShow] = useState(true);

  const handleShow = () => {
    setShow(!show);
  };

  return (
    <div className={filter ? "price_filter active" : "price_filter"}>
      <div className="price_filter_container">
        {/* title */}
        <div className="price_filter_title">
          <h1>Filter by</h1>
          <AiOutlineClose onClick={handleFilter} />
        </div>

        {/* price */}
        <div className="price_filter_price">
          <div className="price_filter_price_top">
            <h2>Price (₹199.00 - ₹39,999.00) </h2>
            {show ? (
              <AiOutlineMinus onClick={handleShow} />
            ) : (
              <AiOutlinePlus onClick={handleShow} />
            )}
          </div>
          <div
            className={
              show
                ? "price_filter_price_bottom active"
                : "price_filter_price_bottom"
            }
          >
            <Slider
              value={initValue}
              onChange={handleMobileSlider}
              tipFormatter={false}
              range
              min={199}
              max={39999}
              step="200"
            />
            <div className="price_filter_price_value">
              <span>₹ {numeral(initValue[0]).format("0,0.00")}</span>
              <span>₹ {numeral(initValue[1]).format("0,0.00")}</span>
            </div>
          </div>
        </div>

        {/* button */}
        <div className="price_filter_btn">
          <div
            className="price_filter_btn1"
            onClick={() => {
              setInitValue([199, 39999]);
              viewData();
              handleFilter();
              handleIsFilter();
            }}
          >
            Clear filter
          </div>
          <div
            className="price_filter_btn2"
            onClick={() => {
              handleFilter();
              handleMobileFilter();
              handleIsFilter();
            }}
          >
            Apply
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceFilter;
