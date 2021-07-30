import React, { useEffect, useState } from "react";
import { getData } from "../../function/courses";
import CoursesLeft from "./CoursesLeft";
import CoursesRight from "./CoursesRight";

const Courses = () => {
  const [data, setData] = useState([]);
  const [initValue, setInitValue] = useState([199, 39999]);
  const [ok, setOk] = useState(false);
  const [change, setChange] = useState("Sorted By");

  useEffect(() => {
    viewData();
  }, []);

  const viewData = () => {
    getData()
      .then((res) => {
        // setData(res.data.record.courses);
        setData(res.data.courses);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getFilterData();
  }, [ok]);

  const getFilterData = () => {
    let array = [];
    getData()
      .then((res) => {
        for (let i = 1; i <= 10; ++i) {
          if (
            res.data.courses[i].price >= initValue[0] &&
            res.data.courses[i].price <= initValue[1]
          ) {
            array.push(res.data.courses[i]);
          }
        }
        setData(array);
      })
      .catch((err) => console.log(err));
  };

  const handleSlider = (value) => {
    setInitValue(value);
    setTimeout(() => {
      setOk(!ok);
    }, 1000);
  };

  const handleMobileSlider = (value) => {
    setInitValue(value);
  };

  const handleMobileFilter = () => {
    getFilterData();
  };

  const handleChange = (value) => {
    setChange(value);

    const sortedData = [...data];

    if (value === "name") {
      sortedData.sort((a, b) => (a.title < b.title ? -1 : 1));
      setData(sortedData);
      return;
    }

    if (value === "name1") {
      sortedData.sort((a, b) => (a.title > b.title ? -1 : 1));
      setData(sortedData);
      return;
    }

    if (value === "price") {
      sortedData.sort((a, b) => (a.price < b.price ? -1 : 1));
      setData(sortedData);
      return;
    }

    if (value === "price1") {
      sortedData.sort((a, b) => (a.price > b.price ? -1 : 1));
      setData(sortedData);
      return;
    }
  };

  return (
    <div className="courses">
      <div className="courses_container">
        <CoursesLeft initValue={initValue} handleSlider={handleSlider} />
        <CoursesRight
          data={data}
          handleChange={handleChange}
          change={change}
          setChange={setChange}
          initValue={initValue}
          handleSlider={handleSlider}
          setInitValue={setInitValue}
          viewData={viewData}
          handleMobileFilter={handleMobileFilter}
          handleMobileSlider={handleMobileSlider}
        />
      </div>
    </div>
  );
};

export default Courses;
