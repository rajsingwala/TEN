import React from "react";
import { useSelector } from "react-redux";
import { selectBlog } from "../../features/blogSlice";
import BlogSearchCard from "../../components/card/BlogSearchCard";
import NoBlog from "../../components/card/NoBlog";

const BlogSearchContent = () => {
  const blog = useSelector(selectBlog);

  const cards = () => {
    let array = [];
    for (let i = 0; i < blog.length; ++i) {
      if (blog[i]) {
        array.push(<BlogSearchCard data={blog[i]} />);
      }
    }
    return array;
  };

  return (
    <div className="blog_content">
      {blog && blog.length > 0 ? (
        <div className="blog_content_card_search">{cards()}</div>
      ) : (
        <NoBlog />
      )}
    </div>
  );
};

export default BlogSearchContent;
