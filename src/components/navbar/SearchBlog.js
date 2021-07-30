import React from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setTab } from "../../features/tabSlice";

const SearchBlog = ({ blog, setSearch, search }) => {
  const history = useHistory();

  const dispatch = useDispatch();

  return (
    <div className="search_product">
      <div className="search_product_title">
        <p>Blog Posts</p>
        {blog && blog.length > 0 && (
          <p
            className="search_product_title_right"
            onClick={() => {
              history.push(`/search-results/${search}`);
              setSearch("");
              dispatch(setTab({ open: "3" }));
            }}
          >
            Show all
          </p>
        )}
      </div>

      <div className="search_product_container">
        {blog && blog.length > 0 ? (
          blog.map((item, i) => (
            <div className="search_product_content">
              <div className="search_product_content_left">
                <img
                  src={item?.img}
                  alt={item?.title}
                  onClick={() => {
                    history.push(`/post/${item?.slug}`);
                    setSearch("");
                  }}
                />
              </div>
              <div
                className="search_product_content_right"
                onClick={() => {
                  history.push(`/post/${item?.slug}`);
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

export default SearchBlog;
