import React, { useState } from "react";
import SocialMediaMid from "./SocialMediaMid";
import SocialMediaCarousel from "./SocialMediaCarousel";
import SocialMediaFeed from "./SocialMediaFeed";
import SocialMediaLine from "./SocialMediaLine";
import { FaFacebook, FaTwitter, FaPinterest } from "react-icons/fa";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";

const SocialMediaContent = ({ data }) => {
  const [more, setMore] = useState(4);

  const handleMore = () => {
    setMore((prev) => prev + 4);
  };
  const handleMoreLess = () => {
    setMore(4);
  };

  return (
    <div className="social_media_content">
      <div className="social_media_content_container">
        {data &&
          data.length > 0 &&
          data.slice(0, more).map((item, i) => (
            <div className="social_media_content_top" key={i}>
              <div className="social_media_content_top_top_card">
                <a href={item?.fb} target="_blank" rel="noreferrer">
                  <FaFacebook className="social_media_content_top_top_card_fb" />
                </a>
                <a href={item?.twitter} target="_blank" rel="noreferrer">
                  <FaTwitter className="social_media_content_top_top_card_twitter" />
                </a>
                <a href={item?.pinterest} target="_blank" rel="noreferrer">
                  <FaPinterest className="social_media_content_top_top_card_pinterest" />
                </a>
              </div>

              <a href={item?.insta} target="_blank" rel="noreferrer">
                <div className="social_media_content_top_bottom_card">
                  <div className="social_media_content_top_bottom_card_content">
                    {item?.content}
                  </div>
                  <p>{item?.date} months ago</p>
                </div>
              </a>
            </div>
          ))}
      </div>

      <div className="social_media_content_mid">
        <div className="social_media_content_mid_content">
          {more <= 10 ? (
            <BsChevronDown onClick={handleMore} />
          ) : (
            <BsChevronUp onClick={handleMoreLess} />
          )}
        </div>
      </div>

      <div className="social_media_content_three">
        <div className="social_media_content_three_left">
          Last Updated:23 hours ago{" "}
        </div>
        <div className="social_media_content_three_right">
          Powered by SocialStream.io
        </div>
      </div>

      <SocialMediaMid />
      <SocialMediaCarousel />
      <SocialMediaFeed />
      <SocialMediaLine />
      <SocialMediaFeed />
    </div>
  );
};

export default SocialMediaContent;
