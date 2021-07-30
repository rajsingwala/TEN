import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { setTab } from "../../../../features/tabSlice";

const AllBlogs = ({ searchBlog }) => {
  const history = useHistory();
  const dispatch = useDispatch();

  return (
    <div className="search_results_all_blogs">
      <div className="search_results_all_blogs_title">
        {`${searchBlog?.length > 1 ? "Blog Posts" : "Blog Post"} (${
          searchBlog?.length
        })`}
      </div>

      <div className="search_results_all_blogs_container">
        {searchBlog &&
          searchBlog.length > 0 &&
          searchBlog.slice(0, 3).map((item, i) => (
            <div className="search_results_all_blogs_content" key={i}>
              <div className="search_results_all_blogs_content_left">
                <img
                  src={item?.img}
                  alt={item?.title}
                  onClick={() => history.push(`/post/${item?.slug}`)}
                />
              </div>
              <div className="search_results_all_blogs_content_right">
                <p
                  onClick={() => history.push(`/post/${item?.slug}`)}
                >{`${item?.title.slice(0, 70)} ${
                  item?.title.length > 70 ? "..." : ""
                }`}</p>
              </div>
            </div>
          ))}
      </div>

      {searchBlog && searchBlog.length > 0 && (
        <div
          className="search_results_all_blogs_btn"
          onClick={() => dispatch(setTab({ open: "3" }))}
        >
          View All
        </div>
      )}
    </div>
  );
};

export default AllBlogs;
