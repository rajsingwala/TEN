import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BlogPageTitle from "../blogpage/BlogPageTitle";
import { getBlog } from "../../../function/blog";
import BlogPageContent from "./BlogPageContent";
import RecentPosts from "./RecentPosts";
import RecentPostsMobile from "./RecentPostsMobile";
import Comment from "./Comment";

const BlogPage = () => {
  const [data, setData] = useState([]);
  const [carousel, setCarousel] = useState([]);
  const [input, setInput] = useState("");
  const [newData, setNewData] = useState({});

  const { slug } = useParams();

  useEffect(() => {
    getBlog()
      .then((res) => {
        for (let i = 1; i <= 8; ++i) {
          if (res.data.blog[i].slug === slug) {
            setNewData(res.data.blog[i]);
          }
        }
      })
      .catch((err) => console.log(err));
  }, [slug]);

  useEffect(() => {
    getBlog().then((res) => {
      let array = [];
      for (let i = 0; i <= 2; ++i) {
        const random = Math.floor(Math.random() * 7);
        if (res.data.blog[random + 1]) {
          array.push(res.data.blog[random + 1]);
        }
      }
      setCarousel(array);
    });
  }, []);

  return (
    <div className="blog_page">
      <div className="blog_page_container">
        <BlogPageTitle data={data} input={input} setInput={setInput} />
        <BlogPageContent newData={newData} />
        <RecentPosts />
        <RecentPostsMobile carousel={carousel} />
        <Comment />
      </div>
    </div>
  );
};

export default BlogPage;
