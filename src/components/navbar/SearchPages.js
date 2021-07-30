import React from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setTab } from "../../features/tabSlice";

const SearchPages = ({ setSearch, search, pages }) => {
  const history = useHistory();

  const dispatch = useDispatch();

  return (
    <div className="search_product">
      <div className="search_product_title">
        <p>Pages</p>
        {pages && pages.length > 0 && (
          <p
            className="search_product_title_right"
            onClick={() => {
              history.push(`/search-results/${search}`);
              setSearch("");
              dispatch(setTab({ open: "4" }));
            }}
          >
            Show all
          </p>
        )}
      </div>

      <div className="search_product_container">
        {pages && pages.length > 0 ? (
          pages.map((item, i) => (
            <div className="search_product_content">
              <div className="search_product_content_left">
                <img
                  src={item?.img}
                  alt={item?.title}
                  onClick={() => {
                    history.push(`${item?.link}`);
                    setSearch("");
                  }}
                />
              </div>
              <div
                className="search_product_content_right"
                onClick={() => {
                  history.push(`${item?.link}`);
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

export default SearchPages;
