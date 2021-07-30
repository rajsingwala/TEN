import React, { useState } from "react";
import { Select } from "antd";
import CourseCard from "../../components/card/CourseCard";
import LoadingCard from "../../components/card/LoadingCard";
import MobileFilters from "./MobileFilters";

const { Option } = Select;

const CoursesRight = ({
  data,
  handleChange,
  change,
  setChange,
  initValue,
  handleSlider,
  setInitValue,
  viewData,
  handleMobileSlider,
  handleMobileFilter,
}) => {
  const [more, setMore] = useState(6);
  const [modalVisible, setModalVisible] = useState(false);
  const [idx, setIdx] = useState("");

  const handleModal = () => {
    setModalVisible(!modalVisible);
  };

  const handleMore = () => {
    setMore((prev) => prev + 3);
  };

  const cards = () => {
    let array = [];
    for (let i = 1; i <= more; ++i) {
      if (data[i]) {
        array.push(
          <CourseCard
            title={data[i]?.title}
            img={data[i]?.img}
            slug={data[i]?.slug}
            price={data[i]?.price}
            modalVisible={modalVisible}
            handleModal={() => {
              handleModal();
              setIdx(data[i]?.slug);
            }}
            // idx={idx}
            idx={idx}
          />
        );
      }
    }
    return array;
  };

  return (
    <div className="courses_right">
      <div className="courses_right_container">
        {/* sort by */}
        <div className="courses_right_sort">
          <div className="courses_right_btn">
            <Select
              placeholder="Sort By"
              dropdownClassName="courses_right_btn_dropdown"
              value={change}
              onChange={(value) => {
                handleChange(value);
              }}
            >
              <Option value="price">Price (low to high)</Option>
              <Option value="price1">Price (high to low)</Option>
              <Option value="name">Name A-Z</Option>
              <Option value="name1">Name Z-A</Option>
            </Select>
          </div>
        </div>

        {/* mobile-filter-sort */}
        <MobileFilters
          change={change}
          handleChange={handleChange}
          initValue={initValue}
          handleSlider={handleSlider}
          setInitValue={setInitValue}
          viewData={viewData}
          handleMobileFilter={handleMobileFilter}
          handleMobileSlider={handleMobileSlider}
        />

        {/* card */}
        {data && <div className="courses_right_cards">{cards()}</div>}

        {/* loading-card */}
        {data?.length === 0 && <LoadingCard count={6} />}

        {/* load-more */}
        {more <= 9 && (
          <div className="courses_right_load_more">
            <div className="courses_right_load_more_btn" onClick={handleMore}>
              Load More
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CoursesRight;
