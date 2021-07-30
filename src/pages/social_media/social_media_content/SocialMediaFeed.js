import React from "react";

const SocialMediaFeed = () => {
  return (
    <div className="social_media_feed">
      <a
        href="https://www.powr.io/plugins/social-feed?utm_source=watermark&utm_medium=plugin&utm_campaign=watermark_2019&utm_content=social-feed"
        target="_blank"
        rel="noreferrer"
      >
        <div className="social_media_feed_content">
          <div className="social_media_feed_content_one">
            <div className="social_media_feed_content_one_img">
              <img src="images/1.svg" alt="img" />
            </div>
          </div>
          <div className="social_media_feed_content_two">
            <p>
              <span>Social Feed</span> - Create your own for free!
            </p>
          </div>
        </div>
      </a>
    </div>
  );
};

export default SocialMediaFeed;
