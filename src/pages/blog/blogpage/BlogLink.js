import React, { useRef } from "react";
import { AiOutlineClose, AiOutlineLink } from "react-icons/ai";

const BlogLink = ({ handleLink, slug }) => {
  const copyCodeToClipboard = (e) => {
    textArea.current.select();
    document.execCommand("copy");
    e.target.focus();
  };

  const textArea = useRef(null);

  return (
    <div className="blog_link">
      {/* title */}
      <div className="blog_link_title">
        <AiOutlineClose onClick={handleLink} />
      </div>

      {/* content */}
      <div className="blog_link_container">
        <div className="blog_link_content">
          {/* header */}
          <div className="blog_link_content_title">
            <AiOutlineLink />
            <span>Share Link</span>
          </div>

          {/* mid */}
          <div className="blog_link_content_mid">
            <textarea
              value={`http://localhost:3000/post/${slug}`}
              ref={textArea}
            />
          </div>

          {/* footer */}
          <div className="blog_link_content_footer">
            <div className="blog_link_content_footer_btn1" onClick={handleLink}>
              Cancel
            </div>
            <div
              className="blog_link_content_footer_btn2"
              onClick={copyCodeToClipboard}
            >
              Copy Link
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogLink;
