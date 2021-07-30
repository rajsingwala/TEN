import React from "react";
import { Link } from "react-router-dom";

const PagesContent = ({ title, des, link, width }) => {
  return (
    <div className="search_results_pages_content">
      <div className="search_results_pages_content_left">
        <Link to={link}>
          <img src="/images/1.webp" alt={title && title} />
        </Link>
      </div>

      <Link to={link}>
        <div className="search_results_pages_content_right">
          <p className="search_results_pages_content_right_title">
            {title && title}
          </p>
          <p className="search_results_pages_content_right_content">
            {des && `${width > 1099 ? des.slice(0, 300) : des.slice(0, 50)}...`}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default PagesContent;
