import React, { useState } from "react";
import { AiOutlineClose, AiOutlineLink } from "react-icons/ai";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const BlogShare = ({ handleShare, slug }) => {
  const [link, setLink] = useState(false);

  const handleLink = () => {
    setLink(!link);
  };

  return (
    <div className="blog_card_mask">
      <div className="blog_card_mask_title">
        <AiOutlineClose onClick={handleShare} />
      </div>
      <div className="blog_card_mask_div">
        <div className="blog_card_share">
          <div className="blog_card_share_title">Share Post</div>
          {link ? (
            <div className="blog_card_share_direct">{`http://localhost:3000/blog/post/${slug}`}</div>
          ) : (
            <div className="blog_card_share_content">
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=https://www.entrepreneurshipnetwork.net/post/${slug}`}
                target="_blank"
                rel="noreferrer"
              >
                <div className="blog_card_share_fb">
                  <FaFacebookF />
                </div>
              </a>
              <a
                href={`https://twitter.com/intent/tweet?url=https%3A%2F%2Fwww.entrepreneurshipnetwork.net%2Fpost%2F${slug}`}
                target="_blank"
                rel="noreferrer"
              >
                <div className="blog_card_share_twitter">
                  <FaTwitter />
                </div>
              </a>
              <a
                href={`https://www.linkedin.com/sharing/share-offsite/?url=https%3A%2F%2Fwww.entrepreneurshipnetwork.net%2Fpost%2${slug}`}
                target="_blank"
                rel="noreferrer"
              >
                <div className="blog_card_share_linkedin" onClick={handleLink}>
                  <FaLinkedinIn />
                </div>
              </a>

              <div className="blog_card_share_link" onClick={handleLink}>
                <AiOutlineLink />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogShare;
