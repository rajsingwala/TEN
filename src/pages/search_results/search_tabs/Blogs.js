import React, { useState } from "react";
import { Pagination } from "antd";
import { useHistory } from "react-router-dom";

const Blogs = ({ blog }) => {
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
    <div className="search_results_blog">
      <div className="search_results_blog_title">
        {blog && blog.length} results found
      </div>

      <div className="search_results_blog_container">
        {blog &&
          blog.length > 0 &&
          blog.slice(minValue, maxValue).map((item, i) => (
            <div className="search_results_blog_content" key={i}>
              <div className="search_results_blog_content_left">
                <img
                  src={item?.img}
                  alt={item?.title}
                  onClick={() => history.push(`/post/${item?.slug}`)}
                />
              </div>
              <div
                className="search_results_blog_content_right"
                onClick={() => history.push(`/post/${item?.slug}`)}
              >
                <p>
                  {`${item?.title.slice(0, 65)} ${
                    item?.title.length > 66 ? "..." : ""
                  }`}
                </p>
              </div>
            </div>
          ))}
      </div>

      <div className="search_results_blog_pagination">
        <Pagination
          defaultCurrent={1}
          defaultPageSize={10}
          onChange={handleChange}
          total={blog?.length}
        />
      </div>
    </div>
  );
};

export default Blogs;
