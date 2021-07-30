import React from "react";
import numeral from "numeral";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setTab } from "../../../../features/tabSlice";

const AllProducts = ({ searchProduct }) => {
  const history = useHistory();

  const dispatch = useDispatch();

  return (
    <div className="search_results_all_products">
      <div className="search_results_all_products_title">
        {`${searchProduct?.length > 1 ? "Products" : "Product"} (${
          searchProduct?.length
        })`}
      </div>

      <div className="search_results_all_products_container">
        {searchProduct &&
          searchProduct.slice(0, 3).map((item, i) => (
            <div className="search_results_all_products_content" key={i}>
              <div className="search_results_all_products_img">
                <img
                  src={item?.img}
                  alt={item?.title}
                  onClick={() => history.push(`/product-page/${item?.slug}`)}
                />
              </div>
              <p
                className="search_results_all_products_content_title"
                onClick={() => history.push(`/product-page/${item?.slug}`)}
              >{`${item?.title.slice(0, 25)}...`}</p>
              <p className="search_results_all_products_price">{`₹${numeral(
                item?.price
              ).format("0,0.00")}`}</p>
            </div>
          ))}
      </div>
      {searchProduct && searchProduct.length > 0 && (
        <div
          className="search_results_all_products_btn"
          onClick={() => dispatch(setTab({ open: "2" }))}
        >
          View All
        </div>
      )}
    </div>
  );
};

export default AllProducts;
