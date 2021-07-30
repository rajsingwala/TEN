import React, { useEffect, useState } from "react";
import { Modal } from "antd";
import numeral from "numeral";
import { getData } from "../../function/courses";
import { useDispatch } from "react-redux";
import _ from "lodash";
import { setCart, setDrawer } from "../../features/cartSlice";

const CourseModal = ({ handleModal, modalVisible, idx }) => {
  const [data, setData] = useState({});

  const dispatch = useDispatch();

  useEffect(() => {
    getData()
      .then((res) => {
        console.log(idx);
        for (let i = 1; i <= 10; ++i) {
          if (res.data.courses[i].slug === idx) {
            setData(res.data.courses[i]);
          }
        }
      })
      .catch((err) => console.log(err));
  }, [idx]);

  const handleCart = () => {
    let cart = [];

    if (typeof window !== "undefined") {
      if (window.localStorage.getItem("mycart")) {
        cart = JSON.parse(window.localStorage.getItem("mycart"));
      }

      cart.push({ ...data, count: 1 });

      let unique = _.uniqWith(cart, _.isEqual);

      localStorage.setItem("mycart", JSON.stringify(unique));
      dispatch(
        setCart({
          cart: unique,
        })
      );
      handleModal();
      dispatch(setDrawer({ drawer: true }));
    }
  };

  return (
    <Modal
      visible={modalVisible}
      centered
      onCancel={handleModal}
      className="course_modal"
    >
      <div className="course_modal_body">
        {/* img */}
        <div className="course_modal_body_img">
          <img alt={data?.title} src={data?.img} />
        </div>

        {/* info */}
        <div className="course_modal_body_info">
          <div className="course_modal_body_info_top">
            <p>{data?.title}</p>
            <p className="course_modal_price">{`₹${numeral(data?.price).format(
              "0,0.00"
            )}`}</p>
          </div>
          <div className="course_modal_body_info_bottom" onClick={handleCart}>
            Add to Cart
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default CourseModal;
