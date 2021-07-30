import React from "react";
import { AiOutlineClose } from "react-icons/ai";

const ForgotPasswordForum = ({ handleForgot, forgot }) => {
  return (
    <>
      {forgot && (
        <div className="forgot_password_forum">
          <div className="forgot_password_forum_title">
            <AiOutlineClose onClick={handleForgot} />
          </div>
          <div className="forgot_password popup">
            <div className="forgot_password_forum_body_title">
              Create New Password
            </div>
            <div className="forgot_password_second">
              Please enter your email address
            </div>

            <div className="forgot_password_email">
              <label>Email</label>
              <input type="text" />
            </div>

            <div className="forgot_password_btn">Create Password</div>
          </div>
        </div>
      )}
    </>
  );
};

export default ForgotPasswordForum;
