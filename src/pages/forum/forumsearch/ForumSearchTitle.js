import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import { AiOutlineClose, AiOutlineArrowLeft } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";

const ForumSearchTitle = () => {
  const [search, setSearch] = useState("");
  const [width, setWidth] = useState(0);

  const history = useHistory();

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  useEffect(() => {
    const updateWindowDimensions = () => {
      const newWidth = window.innerWidth;
      setWidth(newWidth);
    };
    window.addEventListener("resize", updateWindowDimensions);

    return () => window.removeEventListener("resize", updateWindowDimensions);
  }, []);

  return (
    <>
      {width > 1099 ? (
        <div className="forum_title">
          <div className="forum_title_left">
            <Link to="/forum">Forum </Link> <span>{">"}</span> Search
          </div>
          <div className="forum_title_right">
            <BsSearch />
            <form onSubmit={() => history.push(`/forum/search/${search}`)}>
              <input
                type="text"
                placeholder="Search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </form>
            {search && (
              <div className="forum_title_right_close">
                <AiOutlineClose onClick={() => setSearch("")} />
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className="forum_search_title_mobile">
          <div className="forum_search_title_mobile_one">
            <AiOutlineArrowLeft onClick={() => history.push("/forum")} />
          </div>
          <div className="forum_search_title_mobile_two">
            <BsSearch />
            <form onSubmit={() => history.push(`/forum/search/${search}`)}>
              <input
                type="text"
                placeholder="Search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </form>
          </div>

          <div className="forum_search_title_mobile_three">
            {search && <AiOutlineClose onClick={() => setSearch("")} />}
          </div>
        </div>
      )}
    </>
  );
};

export default ForumSearchTitle;
