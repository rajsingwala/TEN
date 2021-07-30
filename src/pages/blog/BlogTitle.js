import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { setBlog } from "../../features/blogSlice";
import { useHistory } from "react-router-dom";

const BlogTitle = ({ data, input, setInput }) => {
  const [search, setSearch] = useState(false);

  const dispatch = useDispatch();
  const history = useHistory();

  const handleSearch = () => {
    setSearch(!search);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input) {
      return;
    }
    window.localStorage.setItem("search", input);
    let array = [];
    for (let i = 1; i <= 8; ++i) {
      if (data[i]?.title.toLowerCase().includes(input)) {
        array.push(data[i]);
      }
    }
    dispatch(setBlog({ blog: array }));
    history.push(`/blog/search/${input}`);
  };

  return (
    <div className="blog_title">
      <div className="blog_title_left" onClick={() => history.push("/blog")}>
        All Posts
      </div>
      <div className="blog_title_right">
        {search ? (
          <div className="blog_title_right_input">
            <div className="blog_title_right_input_search">
              <BsSearch onClick={handleSubmit} />
            </div>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="search"
                value={input}
                onChange={(e) => setInput(e.target.value.toLowerCase())}
                autoFocus
                required
              />
            </form>
            <div className="blog_title_right_input_close">
              <AiOutlineClose onClick={handleSearch} />
            </div>
          </div>
        ) : (
          <BsSearch onClick={handleSearch} />
        )}
      </div>
    </div>
  );
};

export default BlogTitle;
