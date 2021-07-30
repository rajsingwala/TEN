import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import {  FaFacebookF, FaTwitter } from "react-icons/fa";
import ContactUsMobile from "./ContactUsMobile";

const ContactUsBottomContent = () => {
  const [search, setSearch] = useState(false);
  const [ip, setIp] = useState("");

  const handleSearch = () => {
    setSearch(!search);
  };

  const handleChange = (e) => {
    setIp(e.target.value);
  };

  return (
    <div className="contact_us_bottom_content">
      <div className="contact_us_bottom_container">
        {/* title */}
        <div className="contact_us_bottom_content_title">
          {!search ? (
            <>
              <div className="contact_us_bottom_content_title_mid">
                Frequently asked questions
              </div>
              <div className="contact_us_bottom_content_title_right">
                <BsSearch onClick={handleSearch} />
              </div>
            </>
          ) : (
            <>
              <div className="contact_us_bottom_content_title_search">
                <BsSearch
                  className="contact_us_bottom_content_title_search_icon"
                  onClick={handleSearch}
                />
                <input
                  type="text"
                  placeholder="Looking for something?"
                  className={
                    search
                      ? "contact_us_bottom_content_title_search_ip active"
                      : "contact_us_bottom_content_title_search_ip"
                  }
                  value={ip}
                  onChange={handleChange}
                />
                <AiOutlineClose
                  className="contact_us_bottom_content_title_search_close"
                  onClick={handleSearch}
                />
              </div>
            </>
          )}
        </div>

        {/* mobile-title */}
        <ContactUsMobile />

        {/* content */}
        <div className="contact_us_bottom_container_content">
          <div className="contact_us_bottom_container_content_top">
            <div className="contact_us_bottom_container_content_top_title">
              What is The Entrepreneurship Network (TEN) ?
            </div>
            <div className="contact_us_bottom_container_content_top_content">
              <p>
                The Entrepreneurship Network (TEN) is a community based Edu-Tech
                group whose objective is to provide quality learning and
                expertise. Our current customer segment, at present, stands at
                <span> 500+ </span>colleges and <span>15000+</span> students,
                with new institutions coming in all the time.
              </p>
            </div>
            <div className="contact_us_bottom_container_content_top_icon">
              <a
                href="https://www.facebook.com/sharer/sharer.php?u=http%3A%2F%2Fclk.im%2FeKLC"
                target="_blank"
                rel="noreferrer"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://twitter.com/intent/tweet?url=http://clk.im/eKLC"
                target="_blank"
                rel="noreferrer"
              >
                <FaTwitter />
              </a>
            </div>
          </div>
          <div className="contact_us_bottom_container_content_top">
            <div className="contact_us_bottom_container_content_top_title">
              Why do I join TEN ?
            </div>
            <div className="contact_us_bottom_container_content_top_content">
              <p>
                TEN would enable you to accelerate your aspirations by providing
                an opportunity to master the most desired skill-sets in today's
                market.
              </p>
            </div>
            <div className="contact_us_bottom_container_content_top_icon">
              <a
                href="https://www.facebook.com/sharer/sharer.php?u=http%3A%2F%2Fclk.im%2FeKLC"
                target="_blank"
                rel="noreferrer"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://twitter.com/intent/tweet?url=http://clk.im/eKLC"
                target="_blank"
                rel="noreferrer"
              >
                <FaTwitter />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsBottomContent;
