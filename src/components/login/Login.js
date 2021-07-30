import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setLogin, selectLogin } from "../../features/toggleSlice";
import { AiOutlineClose } from "react-icons/ai";
import LoginContainer from "./LoginContainer";

const Login = () => {
  const [signup, setSignup] = useState(false);
  const [readmore, setReadmore] = useState(false);
  const [signupEmail, setSignupEmail] = useState(false);
  const [signinEmail, setSigninEmail] = useState(false);
  const [forgot, setForgot] = useState(false);

  const dispatch = useDispatch();
  const login = useSelector(selectLogin);

  const handleSignup = () => {
    setSignup(!signup);
  };
  const handleReadmore = () => {
    setReadmore(!readmore);
  };

  const handleSignupEmail = () => {
    setSignupEmail(!signupEmail);
  };

  const handleSigninEmail = () => {
    setSigninEmail(!signinEmail);
  };

  const handleForgot = () => {
    setForgot(!forgot);
  };

  return (
    <>
      {login && (
        <div className="login">
          <div className="login_top">
            <AiOutlineClose
              onClick={() => dispatch(setLogin({ login: !login }))}
            />
          </div>

          <LoginContainer
            signup={signup}
            handleSignup={handleSignup}
            readmore={readmore}
            handleReadmore={handleReadmore}
            signupEmail={signupEmail}
            signinEmail={signinEmail}
            handleSigninEmail={handleSigninEmail}
            handleSignupEmail={handleSignupEmail}
            forgot={forgot}
            handleForgot={handleForgot}
            setSignup={setSignup}
          />
        </div>
      )}
    </>
  );
};

export default Login;
