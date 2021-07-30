import React from "react";

const ForgotPassword = () => {
  return (
    <div className="forgot_password">
      <div className="forgot_password_second">
        Please enter your email address
      </div>

      <div className="forgot_password_email">
        <label>Email</label>
        <input type="text" />
      </div>

      <div className="forgot_password_btn">Create Password</div>
    </div>
  );
};

export default ForgotPassword;
