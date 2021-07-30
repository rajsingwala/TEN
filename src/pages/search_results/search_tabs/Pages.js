import React, { useState, useEffect } from "react";
import PagesContent from "./PagesContent";
import { Pagination } from "antd";

const Pages = ({ pages }) => {
  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(9);
  const [width, setWidth] = useState(0);

  const handleChange = (value) => {
    if (value <= 0) {
      setMinValue(0);
      setMaxValue(9);
    } else {
      setMinValue(value * 10 - 10);
      setMaxValue(value * 10 - 1);
    }
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

  return (
    <div className="search_results_pages">
      {/* title */}
      <div className="search_results_pages_title">
        {pages && pages.length} results found
      </div>

      {/* content */}
      <div className="search_results_pages_container">
        {pages &&
          pages.length > 0 &&
          pages
            .slice(minValue, maxValue)
            .map((item, i) => (
              <PagesContent
                title={item?.title}
                des={item?.des}
                link={item?.link}
                width={width}
              />
            ))}
      </div>

      <div className="search_results_pages_pagination">
        <Pagination
          defaultCurrent={1}
          defaultPageSize={10}
          onChange={handleChange}
          total={pages?.length}
        />
      </div>
    </div>
  );
};

export default Pages;
