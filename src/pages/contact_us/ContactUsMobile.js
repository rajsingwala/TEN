import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";

const ContactUsMobile = () => {
  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow(!show);
  };

  return (
    <div className="contact_us_bottom_content_title_mobile">
      <div className="contact_us_bottom_content_title_mobile_title">
        Frequently asked questions
      </div>
      <div className="contact_us_bottom_content_title_mobile_search">
        {show ? (
          <>
            <BsSearch className="contact_us_bottom_content_title_mobile_search_leftsearch" />
            <input type="text" />
            <AiOutlineClose
              className="contact_us_bottom_content_title_mobile_search_close"
              onClick={handleShow}
            />
          </>
        ) : (
          <>
            <input type="text" onClick={handleShow} />
            <BsSearch className="contact_us_bottom_content_title_mobile_search_rightsearch" />{" "}
          </>
        )}
      </div>
    </div>
  );
};

export default ContactUsMobile;
