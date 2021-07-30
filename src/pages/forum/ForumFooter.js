import React from "react";
import PopUpAuth from "./PopUpAuth";
import ForgotPasswordForum from "./ForgotPasswordForum";

const ForumFooter = ({
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
    <div className="forum_footer">
      {/* left */}
      <div className="forum_footer_left">
        <p className="forum_footer_left_top">Already Have an Account?</p>
        <p className="forum_footer_left_bottom">Log in to access the forum.</p>
        <div className="forum_footer_left_btn" onClick={() => setLogin(true)}>
          Log In
        </div>
      </div>

      {/* mid */}
      <div className="forum_footer_mid" />

      {/* right */}
      <div className="forum_footer_right">
        <p className="forum_footer_right_top">Sign Up Today</p>
        <p className="forum_footer_right_bottom">
          Join the forum to check out the posts and add your voice.
        </p>
        <div className="forum_footer_right_btn" onClick={() => setSignup(true)}>
          Get Started
        </div>
      </div>

      {(signup || login || emailSignUp || emailLogin) && (
        <PopUpAuth
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

      {forgot && (
        <ForgotPasswordForum handleForgot={handleForgot} forgot={forgot} />
      )}
    </div>
  );
};

export default ForumFooter;
