import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import WithEmailForum from "./WithEmailForum";

const PopUpAuth = ({
  login,
  signup,
  emailLogin,
  emailSignUp,
  setLogin,
  setSignup,
  setEmailLogin,
  setEmailSignUp,
  readmore,
  handleReadMore,
  forgot,
  handleForgot,
}) => {
  const handleSignUp = () => {
    setSignup(true);
    setEmailLogin(false);
    setEmailSignUp(false);
    setLogin(false);
  };

  const handleLogin = () => {
    setSignup(false);
    setEmailLogin(false);
    setEmailSignUp(false);
    setLogin(true);
  };

  const handleClose = () => {
    setSignup(false);
    setLogin(false);
    setEmailLogin(false);
    setEmailSignUp(false);
  };

  const handleWithEmail = () => {
    if (signup) {
      setSignup(false);
      setEmailSignUp(true);
      return;
    }

    if (login) {
      setLogin(false);
      setEmailLogin(true);
      return;
    }
  };

  return (
    <div className="popup_auth">
      <div className="popup_auth_container">
        {/* close */}
        <div className="popup_auth_close">
          <AiOutlineClose onClick={handleClose} />
        </div>

        <div className="popup_auth_content">
          {/* title */}
          <div className="popup_auth_title">
            {(login || emailLogin) && "Log In"}
            {(signup || emailSignUp) && "Sign Up"}
          </div>

          {/* subtitle */}
          <div className="popup_auth_subtitle">
            {(login || emailLogin) && (
              <p>
                New to this site?{" "}
                <span
                  className="popup_auth_subtitle_edit"
                  onClick={handleSignUp}
                >
                  Sign Up
                </span>
              </p>
            )}
            {(signup || emailSignUp) && (
              <p>
                Already a member?{" "}
                <span
                  className="popup_auth_subtitle_edit"
                  onClick={handleLogin}
                >
                  Log In
                </span>
              </p>
            )}
          </div>

          {/* social-login */}
          <div className="popup_auth_two_div">
            {(signup || login) && (
              <div className="popup_auth_two" style={{ color: "#fff" }}>
                {/* facebook */}
                <div className="login_container_fb">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 266.89 266.89"
                    className="login_container_fb_icon"
                  >
                    <g>
                      <g>
                        <path
                          className="login_fb_icon"
                          d="M252.16,0H14.73A14.73,14.73,0,0,0,0,14.73V252.16a14.73,14.73,0,0,0,14.73,14.73H142.55V163.57H107.77V123.29h34.82V93.58c0-34.47,21.06-53.24,51.81-53.24a285.41,285.41,0,0,1,31.08,1.59v36H204.15c-16.76,0-20,8-20,19.61v25.72H224l-5.16,40.28H184.15V266.89h68a14.73,14.73,0,0,0,14.73-14.73V14.73A14.73,14.73,0,0,0,252.16,0Z"
                        ></path>
                        <path
                          className="login_fb_icon2"
                          d="M218.84,163.54,224,123.26H184.15V97.54c0-11.66,3.24-19.61,20-19.61h21.33v-36a285.41,285.41,0,0,0-31.08-1.59c-30.75,0-51.81,18.77-51.81,53.24v29.71H107.77v40.28h34.78V266.89h41.6V163.54Z"
                        ></path>
                      </g>
                    </g>
                  </svg>
                  <div className="login_container_fb_text">
                    {signup ? "Sign up with Facebook" : "Log in with Facebook"}
                  </div>
                </div>

                {/* google */}
                <div className="login_container_google">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="login_container_google_icon"
                    viewBox="0 0 512 512"
                    aria-label="Log in with Google"
                  >
                    <path
                      className="login_google_icon2"
                      d="M113.47,309.408L95.648,375.94l-65.139,1.378C11.042,341.211,0,299.9,0,256
	c0-42.451,10.324-82.483,28.624-117.732h0.014l57.992,10.632l25.404,57.644c-5.317,15.501-8.215,32.141-8.215,49.456
	C103.821,274.792,107.225,292.797,113.47,309.408z"
                    ></path>
                    <path
                      className="login_google_icon3"
                      d="M507.527,208.176C510.467,223.662,512,239.655,512,256c0,18.328-1.927,36.206-5.598,53.451
	c-12.462,58.683-45.025,109.925-90.134,146.187l-0.014-0.014l-73.044-3.727l-10.338-64.535
	c29.932-17.554,53.324-45.025,65.646-77.911h-136.89V208.176h138.887L507.527,208.176L507.527,208.176z"
                    ></path>
                    <path
                      className="login_google_icon4"
                      d="M416.253,455.624l0.014,0.014C372.396,490.901,316.666,512,256,512
	c-97.491,0-182.252-54.491-225.491-134.681l82.961-67.91c21.619,57.698,77.278,98.771,142.53,98.771
	c28.047,0,54.323-7.582,76.87-20.818L416.253,455.624z"
                    ></path>
                    <path
                      className="login_google_icon5"
                      d="M419.404,58.936l-82.933,67.896c-23.335-14.586-50.919-23.012-80.471-23.012
	c-66.729,0-123.429,42.957-143.965,102.724l-83.397-68.276h-0.014C71.23,56.123,157.06,0,256,0
	C318.115,0,375.068,22.126,419.404,58.936z"
                    ></path>
                  </svg>
                  <div className="login_container_fb_text">
                    {" "}
                    {signup ? "Sign up with Google" : "Log in with Google"}
                  </div>
                </div>
              </div>
            )}

            {/* input -fields */}
            {(emailLogin || emailSignUp) && (
              <WithEmailForum
                emailLogin={emailLogin}
                handleForgot={handleForgot}
                setEmailLogin={setEmailLogin}
                setSignup={setSignup}
                forgot={forgot}
                setLogin={setLogin}
              />
            )}

            {/* or */}
            {!emailLogin && !emailSignUp && (
              <div className="login_container_or">Or</div>
            )}

            {/* signup/in with email*/}
            {!emailLogin && !emailSignUp && (
              <div
                className="login_container_email popup"
                onClick={handleWithEmail}
              >
                {" "}
                {signup ? "Sign up with Email" : "Log in with Email"}
              </div>
            )}
          </div>

          {(signup || emailSignUp) && (
            <div className="login_container_check popup">
              <input type="checkbox" />
              <span className="popup_join">Join this site’s community.</span>
              <span
                className="login_container_toggle_readmore popup"
                onClick={handleReadMore}
              >
                {readmore ? "Read less" : "Read more"}
              </span>
            </div>
          )}

          {/* readmore */}
          {(signup || emailSignUp) && readmore && (
            <div className="login_container_readmore popup">
              Connect with members of our site. Leave comments, follow people
              and more. Your nickname, profile image, and public activity will
              be visible on our site.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PopUpAuth;
