import React from "react";
import ContactUsTop from "./ContactUsTop";
import ContactUsBottom from "./ContactUsBottom";

const ContactUs = () => {
  return (
    <div className="contact_us">
      <div className="contact_us_container">
        <div className="contact_us_title">Contact Us</div>
        <ContactUsTop />
        <ContactUsBottom />
      </div>
    </div>
  );
};

export default ContactUs;
