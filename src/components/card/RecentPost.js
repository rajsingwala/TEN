import React from "react";
import { Card } from "antd";
import { Link } from "react-router-dom";
import { BsEye } from "react-icons/bs";
import { IoChatboxOutline } from "react-icons/io5";
import { FiHeart } from "react-icons/fi";

const RecentPost = ({ data }) => {
  const { title, img, slug, view, comment, like } = data;

  return (
    <Card
      className="recent_post_card"
      cover={
        <Link to={`/post/${slug}`}>
          <img
            alt={title && title}
            src={img && img}
            className="recent_post_card_image"
          />
        </Link>
      }
    >
      <div className="recent_post_card_content">
        <Link to={`/post/${slug}`}>{title && title}</Link>
      </div>

      {/* footer */}
      <div className="recent_post_card_footer">
        <div className="recent_post_card_footer_line" />

        <div className="recent_post_card_footer_content">
          <div className="recent_post_card_footer_content_left">
            <BsEye />
            <span>{view && view}</span>
          </div>
          <div className="recent_post_card_footer_content_mid">
            <IoChatboxOutline />
            <span>{comment && comment}</span>
          </div>
          <div className="recent_post_card_footer_content_right">
            <span>{like && like}</span>
            <FiHeart />
          </div>
        </div>
      </div>
    </Card>
  );
};

export default RecentPost;
