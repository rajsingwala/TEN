import React, { useState } from "react";
import ForumTitle from "./ForumTitle";
import ForumMid from "./ForumMid";
import ForumFooter from "./ForumFooter";

const Forum = () => {
  const [login, setLogin] = useState(false);
  const [signup, setSignup] = useState(false);
  const [emailSignUp, setEmailSignUp] = useState(false);
  const [emailLogin, setEmailLogin] = useState(false);
  const [readmore, setReadMore] = useState(false);
  const [forgot, setForgot] = useState(false);

  const handleReadMore = () => {
    setReadMore(!readmore);
  };

  const handleForgot = () => {
    setForgot(!forgot);
  };

  return (
    <div className="forum">
      <div className="forum_container">
        <div className="forum_content">
          <ForumTitle
            login={login}
            signup={signup}
            emailLogin={emailLogin}
            emailSignUp={emailSignUp}
            forgot={forgot}
            readmore={readmore}
            handleForgot={handleForgot}
            handleReadMore={handleReadMore}
            setEmailLogin={setEmailLogin}
            setEmailSignUp={setEmailSignUp}
            setLogin={setLogin}
            setSignup={setSignup}
          />
          <ForumMid />
          <ForumFooter
            login={login}
            signup={signup}
            emailLogin={emailLogin}
            emailSignUp={emailSignUp}
            forgot={forgot}
            readmore={readmore}
            handleForgot={handleForgot}
            handleReadMore={handleReadMore}
            setEmailLogin={setEmailLogin}
            setEmailSignUp={setEmailSignUp}
            setLogin={setLogin}
            setSignup={setSignup}
          />
        </div>
      </div>
    </div>
  );
};

export default Forum;
