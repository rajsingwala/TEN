import { Pagination } from "antd";
import React, { useState } from "react";
import BlogCard from "../../components/card/BlogCard";
import LoadingCard from "../../components/card/LoadingCard";

const BlogContent = ({ data }) => {
  const [minValue, setMinValue] = useState(1);
  const [maxValue, setMaxValue] = useState(4);

  const cards = () => {
    let array = [];
    for (let i = minValue; i <= maxValue; ++i) {
      if (data[i]) {
        array.push(<BlogCard data={data[i]} />);
      }
    }
    return array;
  };

  const handleChange = (value) => {
    if (value <= 1) {
      setMinValue(1);
      setMaxValue(4);
    } else {
      setMinValue(value * 4 - 4 + 1);
      setMaxValue(value * 4);
    }
  };

  return (
    <div className="blog_content">
      {data && <div className="blog_content_card">{cards()}</div>}

      {/* loading-card */}
      {data?.length === 0 && <LoadingCard count={4} />}

      <div className="blog_content_pagination">
        <Pagination
          defaultCurrent={1}
          defaultPageSize={6}
          onChange={handleChange}
          total={8}
        />
      </div>
    </div>
  );
};

export default BlogContent;
