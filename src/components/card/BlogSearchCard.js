import React, { useState } from "react";
import { Tooltip } from "antd";
import { FiHeart } from "react-icons/fi";
import { BiDotsVerticalRounded } from "react-icons/bi";
import BlogShare from "./BlogShare";
import { RiShareForwardLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const BlogSearchCard = ({ data }) => {
  const { title, dp, author, date, min, view, comment, slug } = data;

  const [share, setShare] = useState(false);

  const handleShare = () => {
    setShare(!share);
  };

  return (
    <>
      <div className="blog_search_card">
        {/* title */}
        <div className="blog_search_card_title">
          {/* img */}
          <div className="blog_search_card_author_img">
            <img src={dp && dp} alt={author && author} />
          </div>

          {/* author */}
          <div className="blog_search_card_author_two">
            <div className="blog_search_card_author_name">
              <span>{author && author}</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="19"
                viewBox="0 0 19 19"
              >
                <path d="M6.45342775,7.90809427 C6.47137986,7.67117444 6.68963973,5.87674187 8.37808299,4.90340332 C8.41115266,5.58764834 8.60768103,6.30696092 8.92231539,6.73461406 C8.84483786,6.6302667 9.46560296,3.27490017 11.0397196,2.66934333 C11.3288431,2.55815351 12.4683297,2.18523997 13.0900396,2.03128484 C13.7117496,1.87647441 14.1917323,2.33662919 13.9243403,2.52821779 C13.1845244,3.0602183 12.4730539,4.28587219 12.2406213,4.77168616 C12.0412584,5.18822031 11.627415,6.07773884 11.1776674,7.44451827 C10.9017718,8.28186312 9.66213133,9.06617897 8.89396996,9.20901512 C9.40607754,9.70765868 10.5597369,9.42626292 10.5474538,9.45790925 C9.40607754,12.5943174 8.43571871,13.3401444 8.08140074,13.6309486 C7.9169972,13.7669423 7.72613791,13.8926723 7.57779679,14.0320872 C7.49748471,14.1056436 7.47386352,14.1980166 7.43984899,14.2792707 C7.27355575,14.6735669 6.94852806,15.5810469 6.46571077,17 L6.15580065,16.7605142 C6.3853987,15.1525384 6.44397927,14.5478369 6.48649743,14.313483 C6.51106347,14.1800552 6.4505932,14.1056436 6.35610841,14.0380744 C5.91108504,13.721611 5.59361613,13.3521187 5.36401808,12.9458482 C5.16371032,12.5934621 5.05977705,12.2119955 5.01820374,11.816844 C4.97096134,11.3643869 5.0115898,10.889692 5.18827637,10.4201288 C5.29315449,10.1430096 5.42637805,9.82911217 5.68432153,9.36125964 C5.92147836,10.2165659 6.64806642,10.3226239 6.65562521,10.3209133 C6.58759615,10.1122186 6.33721145,9.42711822 6.45342775,7.90809427"></path>
              </svg>
            </div>
            <div className="blog_search_card_author_date">
              {date && date} . {`${min} min`}
            </div>
          </div>

          {/* dot */}
          <div className="blog_search_card_author_three">
            <Tooltip
              trigger="click"
              placement="leftBottom"
              title={
                <div className="blog_card_tooltip" onClick={handleShare}>
                  <RiShareForwardLine /> Share
                </div>
              }
            >
              <BiDotsVerticalRounded />
            </Tooltip>
          </div>
        </div>

        <div className="blog_search_mid">
          <Link to={`/post/${slug}`}>{title && title}</Link>
        </div>

        <div className="blog_search_bottom">
          <div>{`${view && view} views`}</div>
          <div className="blog_search_bottom_two">{`${
            comment && comment
          } comments`}</div>
          <div className="blog_search_bottom_three">
            <FiHeart />
          </div>
        </div>
      </div>

      {share && <BlogShare handleShare={handleShare} slug={slug} />}
    </>
  );
};

export default BlogSearchCard;
