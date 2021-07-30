import React from "react";
import { BsBell } from "react-icons/bs";
import { BiUser } from "react-icons/bi";

const ForumBottomPopup = ({
  bottomPop,
  handleBottomPop,
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
  return (
    <div
      className={bottomPop ? "forum_bottom_popup active" : "forum_bottom_popup"}
      onClick={handleBottomPop}
    >
      <div
        className={
          bottomPop
            ? "forum_bottom_popup_container active"
            : "forum_bottom_popup_container"
        }
      >
        <div
          className="forum_bottom_popup_container_top"
          onClick={() => setLogin(true)}
        >
          <BsBell />
          <span>Follow Category</span>
        </div>
        <div className="forum_bottom_popup_container_mid" />
        <div
          className="forum_bottom_popup_container_bottom"
          onClick={() => setLogin(true)}
        >
          <BiUser />
          <span>Log In / Sign Up</span>
        </div>
      </div>
    </div>
  );
};

export default ForumBottomPopup;
