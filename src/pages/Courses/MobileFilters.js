import React, { useState } from "react";
import { Select } from "antd";
import PriceFilter from "./PriceFilter";

const { Option } = Select;

const MobileFilters = ({
  change,
  handleChange,
  initValue,
  handleSlider,
  setInitValue,
  viewData,
  handleMobileFilter,
  handleMobileSlider,
}) => {
  const [filter, setFilter] = useState(false);
  const [isFilter, setIsFilter] = useState(false);

  const handleFilter = () => {
    setFilter(!filter);
  };

  const handleIsFilter = () => {
    setIsFilter(!isFilter);
  };

  return (
    <>
      <div className="mobile_filters">
        <div className="mobile_filters_container">
          <div className="mobile_filters_filter" onClick={handleFilter}>
            Filter {isFilter && `(1)`}
          </div>
          <div className="mobile_filters_sort">
            <Select
              dropdownClassName="courses_right_btn_dropdown"
              onChange={(value) => {
                handleChange(value);
              }}
            >
              <Option value="price">Price (low to high)</Option>
              <Option value="price1">Price (high to low)</Option>
              <Option value="name">Name A-Z</Option>
              <Option value="name1">Name Z-A</Option>
            </Select>
          </div>
        </div>
      </div>

      {/***** price-filter *****/}
      <PriceFilter
        filter={filter}
        handleFilter={handleFilter}
        initValue={initValue}
        handleSlider={handleSlider}
        setInitValue={setInitValue}
        viewData={viewData}
        handleMobileSlider={handleMobileSlider}
        handleMobileFilter={handleMobileFilter}
        handleIsFilter={handleIsFilter}
      />
    </>
  );
};

export default MobileFilters;
