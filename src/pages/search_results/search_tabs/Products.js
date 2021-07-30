import React, { useState } from "react";
import { Pagination } from "antd";
import numeral from "numeral";
import { useHistory } from "react-router-dom";

const Products = ({ products }) => {
  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(9);

  const history = useHistory();

  const handleChange = (value) => {
    if (value <= 0) {
      setMinValue(0);
      setMaxValue(9);
    } else {
      setMinValue(value * 10 - 10);
      setMaxValue(value * 10 - 1);
    }
  };

  return (
    <div className="search_results_product">
      <div className="search_results_product_title">
        {products && products.length} results found
      </div>

      <div className="search_results_product_container">
        {products &&
          products.length > 0 &&
          products.slice(minValue, maxValue).map((item, i) => (
            <div className="search_results_product_content" key={i}>
              <div className="search_results_product_content_img">
                <img
                  src={item?.img}
                  alt={item?.title}
                  onClick={() => history.push(`/product-page/${item?.slug}`)}
                />
              </div>
              <p
                className="search_results_product_content_title"
                onClick={() => history.push(`/product-page/${item?.slug}`)}
              >
                {`${item?.title.slice(0, 20)}...`}
              </p>
              <p className="search_results_product_content_price">{`₹${numeral(
                item?.price
              ).format("0,0.00")}`}</p>
            </div>
          ))}
      </div>

      <div className="search_results_product_pagination">
        <Pagination
          defaultCurrent={1}
          defaultPageSize={10}
          onChange={handleChange}
          total={products?.length}
        />
      </div>
    </div>
  );
};

export default Products;
