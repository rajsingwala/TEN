import React from "react";
import { Card } from "antd";
import numeral from "numeral";
import { Link } from "react-router-dom";
import { CgPushDown } from "react-icons/cg";
import CourseModal from "../modal/CourseModal";

const { Meta } = Card;

const CourseCard = ({
  title,
  img,
  price,
  slug,
  modalVisible,
  handleModal,
  idx,
}) => {
  return (
    <>
      <Card
        className="course_card"
        cover={
          <>
            <Link to={`/product-page/${slug}`} className="edit_link">
              <img
                alt={title && title}
                src={img && img}
                className="course_card_image"
              />
              <div className="course_card_arrow">
                {" "}
                <div className="course_card_arrow_icon">
                  <CgPushDown />
                </div>
              </div>
            </Link>
            <div className="course_card_quick" onClick={handleModal}>
              {" "}
              <div className="course_card_quick_view">Quick View</div>
            </div>
          </>
        }
      >
        <Link to={`/product-page/${slug}`} className="edit_link">
          <Meta
            title={
              <div className="courses_card_meta">
                <h4 className="courses_card_title">{title && title} </h4>
                <h4 className="courses_card_price">{`₹${
                  price && numeral(price).format("0,0.00")
                }`}</h4>
              </div>
            }
          />
        </Link>

        <CourseModal
          handleModal={() => handleModal()}
          modalVisible={modalVisible}
          idx={idx}
        />
      </Card>
    </>
  );
};

export default CourseCard;
