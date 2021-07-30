import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { BsSearch, BsThreeDotsVertical } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import ForumBottomPopup from "./ForumBottomPopup";

const ForumTitle = ({
  login,
  signup,
  emailLogin,
  emailSignUp,
  forgot,
  readmore,
  handleForgot,
  handleReadMore,
  setEmailLogin,
  setEmailSignUp,
  setLogin,
  setSignup,
}) => {
  const [search, setSearch] = useState("");
  const [width, setWidth] = useState("");
  const [bottomPop, setBottomPop] = useState(false);

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

  const handleBottomPop = () => {
    setBottomPop(!bottomPop);
  };

  return (
    <div className="forum_title">
      <div className="forum_title_left">
        {width <= 1099 ? "Forum" : "Entrepreneurship A-Z Search"}
      </div>
      <div className="forum_title_right">
        <BsSearch
          onClick={() => {
            width <= 1099 && history.push("/forum/search");
          }}
        />
        {width <= 1099 && (
          <div className="forum_title_right_dot">
            <BsThreeDotsVertical onClick={handleBottomPop} />
          </div>
        )}
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
      {bottomPop && (
        <ForumBottomPopup
          bottomPop={bottomPop}
          handleBottomPop={handleBottomPop}
          login={login}
          signup={signup}
          emailLogin={emailLogin}
          emailSignUp={emailSignUp}
          setLogin={setLogin}
          setSignup={setSignup}
          setEmailSignUp={setEmailSignUp}
          setEmailLogin={setEmailLogin}
          readmore={readmore}
          handleReadMore={handleReadMore}
          forgot={forgot}
          handleForgot={handleForgot}
        />
      )}
    </div>
  );
};

export default ForumTitle;
