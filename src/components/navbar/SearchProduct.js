import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { setTab } from "../../features/tabSlice";

const SearchProduct = ({ course, setSearch, search }) => {
  const history = useHistory();

  const dispatch = useDispatch();

  return (
    <div className="search_product">
      <div className="search_product_title">
        <p>Products</p>
        {course && course.length > 0 && (
          <p
            className="search_product_title_right"
            onClick={() => {
              history.push(`/search-results/${search}`);
              setSearch("");
              dispatch(setTab({ open: "2" }));
            }}
          >
            Show all
          </p>
        )}
      </div>

      <div className="search_product_container">
        {course && course.length > 0 ? (
          course.map((item, i) => (
            <div className="search_product_content">
              <div className="search_product_content_left">
                <img
                  src={item?.img}
                  alt={item?.title}
                  onClick={() => {
                    history.push(`/product-page/${item?.slug}`);
                    setSearch("");
                  }}
                />
              </div>
              <div
                className="search_product_content_right"
                onClick={() => {
                  history.push(`/product-page/${item?.slug}`);
                  setSearch("");
                }}
              >
                {item?.title.slice(0, 50)}
              </div>
            </div>
          ))
        ) : (
          <div className="search_product_no">No Results Found</div>
        )}
      </div>
    </div>
  );
};

export default SearchProduct;
