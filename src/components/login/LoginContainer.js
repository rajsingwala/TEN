import React from "react";
import WithEmail from "./WithEmail";
import ForgotPassword from "./ForgotPassword";

const LoginContainer = ({
  signup,
  handleSignup,
  readmore,
  handleReadmore,
  signinEmail,
  handleSigninEmail,
  signupEmail,
  handleSignupEmail,
  setSignup,
  forgot,
  handleForgot,
}) => {
  return (
    <div className="login_container">
      <div
        className={
          forgot ? "login_container_one_forgot" : "login_container_one"
        }
      >
        <h1>
          {forgot ? "Create New Password" : signup ? "Sign Up" : "Log In"}
        </h1>
      </div>

      {/* forgot-page*/}
      {forgot && <ForgotPassword />}

      <div
        className={forgot ? "login_container_two_hide" : "login_container_two"}
      >
        <div className="login_container_two_one">
          {!signup ? "New to this site?" : "Already a member?"}{" "}
          <span
            onClick={() => {
              handleSignup();
              signupEmail && handleSignupEmail();
              signinEmail && handleSigninEmail();
            }}
          >
            {signup ? "Log In" : "Sign Up"}
          </span>
        </div>

        <div className="login_container_two_two">
          {/* fb */}
          {!signupEmail && !signinEmail && (
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
          )}

          {/* google */}
          {!signupEmail && !signinEmail && (
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
          )}

          {/* signup-with-email */}
          {(signupEmail || signinEmail) && (
            <WithEmail
              signinEmail={signinEmail}
              handleForgot={handleForgot}
              handleSigninEmail={handleSigninEmail}
              setSignup={setSignup}
            />
          )}

          {/* or */}
          {!signinEmail && !signupEmail && (
            <div className="login_container_or">Or</div>
          )}

          {/* email */}
          {!signupEmail && !signinEmail && (
            <div
              className="login_container_email"
              onClick={signup ? handleSignupEmail : handleSigninEmail}
            >
              {" "}
              {signup ? "Sign up with Email" : "Log in with Email"}
            </div>
          )}

          {/* check */}
          {(signup || signupEmail) && (
            <div className="login_container_check">
              <input type="checkbox" />
              <span>Join this site’s community.</span>
              <span
                className="login_container_toggle_readmore"
                onClick={handleReadmore}
              >
                {readmore ? "Read less" : "Read more"}
              </span>
            </div>
          )}

          {/* readmore */}
          {signup ||
            (signupEmail && readmore && (
              <div className="login_container_readmore">
                Connect with members of our site. Leave comments, follow people
                and more. Your nickname, profile image, and public activity will
                be visible on our site.
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default LoginContainer;
