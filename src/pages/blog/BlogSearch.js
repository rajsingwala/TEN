import React, { useEffect, useState } from "react";
import BlogTitle from "./BlogTitle";
import BlogSearchContent from "./BlogSearchContent";
import { getBlog } from "../../function/blog";
import { selectBlog, setBlog } from "../../features/blogSlice";
import { useDispatch, useSelector } from "react-redux";

const BlogSearch = () => {
  const [data, setData] = useState([]);
  const [input, setInput] = useState("");

  const dispatch = useDispatch();
  const blog = useSelector(selectBlog);

  useEffect(() => {
    loadData();
    const slug = window.localStorage.getItem("search");
    console.log(slug);
    let array = [];
    for (let i = 1; i <= 8; ++i) {
      if (data[i]?.title.toLowerCase().includes(slug)) {
        array.push(data[i]);
      }
    }
    dispatch(setBlog({ blog: array }));
  }, [window.localStorage.getItem("search")]);

  const loadData = () => {
    getBlog()
      .then((res) => setData(res.data.blog))
      .catch((err) => console.log(err));
  };

  return (
    <div className="blog_search">
      <div className="blog_search_container">
        <BlogTitle data={data} input={input} setInput={setInput} />
        <BlogSearchContent />
      </div>
    </div>
  );
};

export default BlogSearch;
