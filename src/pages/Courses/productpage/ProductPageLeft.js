import React from "react";
import { GrPrevious } from "react-icons/gr";
import { FaRegHeart } from "react-icons/fa";
import { Link } from "react-router-dom";

const ProductPageLeft = ({ data }) => {
  const { title, img } = data;

  return (
    <div className="product_page_left">
      {/* title */}
      <div className="product_page_left_title">
        <Link to="/"> Home</Link> /<Link to="/courses"> Online Courses</Link> /{" "}
        <span>{title && title}</span>
      </div>

      {/* mobile-title */}
      <div className="product_page_left_title_mobile">
        <Link to="/courses">
          <div className="product_page_left_title_mobile_content">
            <GrPrevious />
            <span> Back to Online Courses</span>
          </div>
        </Link>
      </div>

      {/* image */}
      <div className="product_page_left_img">
        <img src={img && img} alt={title && title} />
        <div className="product_page_left_img_content">
          <FaRegHeart />
        </div>
      </div>
    </div>
  );
};

export default ProductPageLeft;
