import React, { useEffect, useState } from "react";
import BlogContent from "./BlogContent";
import BlogTitle from "./BlogTitle";
import { getBlog } from "../../function/blog";

const Blog = () => {
  const [data, setData] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    loadData();
  }, []);

  const loadData = () => {
    getBlog()
      .then((res) => setData(res.data.blog))
      .catch((err) => console.log(err));
  };

  return (
    <div className="blog">
      <div className="blog_container">
        <BlogTitle data={data} input={input} setInput={setInput} />
        <BlogContent data={data} />
      </div>
    </div>
  );
};

export default Blog;
