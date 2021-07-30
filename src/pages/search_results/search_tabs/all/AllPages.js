import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { setTab } from "../../../../features/tabSlice";

const AllPages = ({ pages }) => {
  const dispatch = useDispatch();

  return (
    <div className="search_results_all_blogs">
      <div className="search_results_all_pages_title">
        {`${pages?.length > 1 ? "Pages" : "Page"} (${pages?.length})`}
      </div>

      <div className="search_results_all_pages_container">
        {pages &&
          pages.length > 0 &&
          pages.slice(0, 3).map((item, i) => (
            <div className="search_results_all_pages_content" key={i}>
              <div className="search_results_all_pages_content_left">
                <Link to={item?.link}>
                  <img src={item?.img} alt={item?.title} />
                </Link>
              </div>
              <div className="search_results_all_pages_content_right">
                <p className="search_results_all_pages_content_right_title">
                  <Link to={item?.link}>{`${item?.title.slice(0, 70)} ${
                    item?.title.length > 70 ? "..." : ""
                  }`}</Link>
                </p>
                <p className="search_results_all_pages_content_right_text">
                  {`${item?.des.slice(0, 200)} ${
                    item?.title.des > 200 ? "..." : ""
                  }`}
                </p>
              </div>
            </div>
          ))}
      </div>

      {pages && pages.length > 0 && (
        <div
          className="search_results_all_blogs_btn"
          onClick={() => dispatch(setTab({ open: "4" }))}
        >
          View All
        </div>
      )}
    </div>
  );
};

export default AllPages;
