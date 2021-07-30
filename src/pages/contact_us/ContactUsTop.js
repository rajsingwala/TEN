import React from "react";

const ContactUsTop = () => {
  return (
    <div className="contact_us_top">
      {/* left */}
      <div className="contact_us_top_left">
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <textarea type="text" placeholder="Add a message" />
        <div className="contact_us_top_left_btn">Submit</div>
      </div>

      {/* right */}
      <div className="contact_us_top_right">
        <div className="contact_us_top_right_content">
          <p>
            <a href="mailto:info@mysite.com" target="_self">
              Email :
            </a>
          </p>
          <p>
            <a
              href="mailto:hr.contact.ten@gmail.com"
              data-auto-recognition="true"
            >
              gr.contact.ten@gmail.com
            </a>
          </p>
        </div>
        <div className="contact_us_top_right_content">
          <a href="mailto:info@mysite.com" target="_blank" rel="noreferrer">
            Phone : <p></p>
            <p>+918595986120</p>
          </a>
        </div>
        <div className="contact_us_top_right_content">
          <p>Address:Delhi</p>
        </div>
      </div>
    </div>
  );
};

export default ContactUsTop;
