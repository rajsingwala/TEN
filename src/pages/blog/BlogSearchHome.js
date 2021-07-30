import React, { useState, useEffect } from "react";
import BlogTitle from "./BlogTitle";
import NoBlogHome from "../../components/card/NoBlogHome";
import { getBlog } from "../../function/blog";
import { useDispatch, useSelector } from "react-redux";
import { setBlog, selectBlog } from "../../features/blogSlice";

const BlogSearchHome = () => {
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
        <div className="blog_content">
          <NoBlogHome />
        </div>
      </div>
    </div>
  );
};

export default BlogSearchHome;
