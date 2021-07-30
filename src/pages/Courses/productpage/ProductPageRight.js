import React, { useEffect, useState } from "react";
import { MdNavigateNext, MdNavigateBefore } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import numeral from "numeral";
import Overview from "./Overview";
import { useDispatch } from "react-redux";
import { setCart, setDrawer } from "../../../features/cartSlice";
import _ from "lodash";
import { useHistory } from "react-router-dom";

const ProductPageRight = ({ data, index, nextData }) => {
  const [readMore, setReadMore] = useState(false);
  const [width, setWidth] = useState(0);

  const handleReadMore = () => {
    setReadMore(!readMore);
  };

  const { title, price,slug } = data;
  const history = useHistory();

  const dispatch = useDispatch();

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
    }
  };

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  useEffect(() => {
    const updateWindowDimensions = () => {
      const newWidth = window.innerWidth;
      setWidth(newWidth);
    };

    window.addEventListener("resize", updateWindowDimensions);

    return () => window.removeEventListener("resize", updateWindowDimensions);
  }, []);

  return (
    <div className="product_page_right">
      {/* title */}
      <div className="product_page_right_title">
        <div
          className={
            index === 2
              ? "product_page_right_prev not"
              : "product_page_right_prev"
          }
          onClick={() => {
            if (index != 2) {
              nextData(index - 1);
            }
          }}
        >
          <MdNavigateBefore /> <span>Prev</span>
        </div>
        <div>|</div>
        <div
          className={
            index === 10
              ? "product_page_right_next not"
              : "product_page_right_next"
          }
          onClick={() => {
            if (index != 10) {
              nextData(index + 1);
            }
          }}
        >
          <span>Next</span> <MdNavigateNext />
        </div>
      </div>

      {/* content */}
      <div className="product_page_right_content">
        <div className="product_page_right_content_title">{title && title}</div>
        <div className="product_page_right_content_price">
          <span>₹</span>
          {price && numeral(price).format("0,0.00")}
        </div>

        {/* overview */}
        <div className="product_page_right_content_overview">
          <Overview readMore={readMore} handleReadMore={handleReadMore} />
        </div>

        {/* btns */}
        <div className="product_page_right_content_btns">
          <div className="product_page_right_content_btn_top">
            <div
              className="product_page_right_content_btn_top_one"
              onClick={() => {
                if (width > 1099) {
                  handleCart();
                  dispatch(setDrawer({ drawer: true }));
                } else {
                  history.push("/cart");
                }
              }}
            >
              Add to Cart
            </div>
            <div className="product_page_right_content_btn_top_two">
              <FaRegHeart />
            </div>
          </div>
          <div
            className="product_page_right_content_btn_bottom"
            onClick={() => history.push(`/buy/${slug}`)}
          >
            Buy Now
          </div>
        </div>

        {/* social-media */}
        <div className="product_page_right_content_social">
          <svg
            version="1.1"
            id="Layer_1"
            x="0px"
            y="0px"
            viewBox="0 0 16 16"
            className="prodcut_page_right_whatsapp"
          >
            <a
              href={`https://api.whatsapp.com/send?text=https%3A%2F%2Fwww.entrepreneurshipnetwork.net%2Fproduct-page%2F${
                title && title
              }`}
              target="_blank"
              rel="noreferrer"
            >
              <g>
                <path
                  fill="#E0E0E0"
                  d="M13.6,2.3C12.1,0.8,10.2,0,8,0C3.7,0,0.1,3.6,0.1,7.9c0,1.4,0.4,2.8,1.1,4L0,16l4.2-1.1c1.2,0.6,2.5,1,3.8,1h0
      h0c4.4,0,7.9-3.6,7.9-7.9C16,5.8,15.1,3.8,13.6,2.3L13.6,2.3z M8,14.5L8,14.5c-1.2,0-2.3-0.3-3.4-0.9l-0.2-0.1l-2.5,0.7l0.7-2.4
      l-0.2-0.2c-0.7-1-1-2.3-1-3.5c0-3.6,3-6.6,6.6-6.6c1.8,0,3.4,0.7,4.7,1.9c1.2,1.2,1.9,2.9,1.9,4.7C14.6,11.6,11.7,14.5,8,14.5z"
                ></path>

                <path
                  fill="#60D66A"
                  d="M0.4,15.5l1.1-3.9c-0.7-1.1-1-2.4-1-3.8c0-4.2,3.4-7.6,7.6-7.6c2,0,3.9,0.8,5.4,2.2c1.4,1.4,2.2,3.3,2.2,5.4
      c0,4.2-3.4,7.6-7.6,7.6c0,0,0,0,0,0h0c-1.3,0-2.5-0.3-3.6-0.9L0.4,15.5L0.4,15.5z"
                ></path>
                <path
                  fill="#FFFFFF"
                  d="M6.1,4.6C5.9,4.2,5.8,4.2,5.6,4.2c-0.1,0-0.2,0-0.4,0c-0.1,0-0.3,0-0.5,0.2C4.6,4.7,4,5.1,4,6.1
      c0,1,0.7,1.9,0.8,2c0.1,0.1,1.4,2.2,3.3,3c1.7,0.7,2,0.5,2.4,0.5c0.4,0,1.2-0.5,1.3-0.9C12,10.2,12,9.8,12,9.7
      c0-0.1-0.2-0.1-0.4-0.2c-0.2-0.1-1.2-0.6-1.3-0.6C10.1,8.8,10,8.7,9.8,8.9C9.7,9.1,9.3,9.6,9.2,9.7C9.1,9.8,9,9.9,8.8,9.8
      C8.6,9.7,8,9.5,7.2,8.8c-0.6-0.5-1-1.2-1.1-1.4C6,7.2,6.1,7.1,6.2,7c0.1-0.1,0.2-0.2,0.3-0.3c0.1-0.1,0.1-0.2,0.2-0.3
      c0.1-0.1,0-0.2,0-0.3C6.6,5.9,6.2,4.9,6.1,4.6L6.1,4.6z"
                ></path>
                <path
                  fill="#FFFFFF"
                  d="M13.6,2.3C12.1,0.8,10.1,0,8,0C3.7,0,0.2,3.5,0.2,7.8c0,1.4,0.4,2.7,1,3.9l-1.1,4.1l4.2-1.1
      c1.1,0.6,2.4,1,3.7,1h0h0c4.3,0,7.8-3.5,7.8-7.8C15.9,5.8,15.1,3.8,13.6,2.3L13.6,2.3z M8,14.4L8,14.4c-1.2,0-2.3-0.3-3.3-0.9
      l-0.2-0.1L2,14l0.7-2.4l-0.2-0.2c-0.7-1-1-2.2-1-3.5c0-3.6,2.9-6.5,6.5-6.5c1.7,0,3.4,0.7,4.6,1.9c1.2,1.2,1.9,2.9,1.9,4.6
      C14.5,11.4,11.6,14.4,8,14.4z"
                ></path>
              </g>
            </a>
          </svg>
          <svg viewBox="0 0 8 16" className="prodcut_page_right_facebook">
            <a
              href={`http://www.facebook.com/sharer.php?u=https%3A%2F%2Fwww.entrepreneurshipnetwork.net%2Fproduct-page%2F${
                title && title
              }`}
              target="_blank"
              rel="noreferrer"
            >
              <path
                className="prodcut_page_right_facebook"
                d="M7.829 3.505h-2.21c-0.229 0-0.533 0.305-0.533 0.762v1.6h2.743v2.21h-2.743v6.705h-2.514v-6.705h-2.362v-2.21h2.362v-1.295c0-1.905 1.295-3.429 3.124-3.429h2.133c0 0 0 2.362 0 2.362z"
              ></path>
            </a>
          </svg>
          <svg viewBox="0 0 16 16" className="prodcut_page_right_twitter">
            <a
              href={`https://twitter.com/intent/tweet?url=https%3A%2F%2Fwww.entrepreneurshipnetwork.net%2Fproduct-page%2F${
                title && title
              }`}
              target="_blank"
              rel="noreferrer"
            >
              <path
                className="prodcut_page_right_twitter"
                d="M15.238 3.962c-0.533 0.229-1.067 0.381-1.676 0.457 0.61-0.381 1.067-0.914 1.295-1.6-0.533 0.305-1.143 0.533-1.829 0.686-0.533-0.533-1.295-0.914-2.133-0.914-1.6 0-2.895 1.295-2.895 2.895 0 0.229 0 0.457 0.076 0.686-2.362-0.152-4.495-1.295-5.943-2.971-0.229 0.381-0.381 0.914-0.381 1.371 0 1.067 0.533 1.905 1.295 2.438-0.457 0-0.914-0.152-1.295-0.381 0 0 0 0 0 0 0 1.371 0.99 2.59 2.286 2.819-0.229 0.076-0.533 0.076-0.762 0.076-0.152 0-0.381 0-0.533-0.076 0.381 1.143 1.448 1.981 2.667 1.981-0.99 0.762-2.21 1.219-3.581 1.219-0.229 0-0.457 0-0.686-0.076 1.295 0.838 2.819 1.295 4.419 1.295 5.257 0 8.152-4.419 8.152-8.152 0-0.152 0-0.229 0-0.381 0.61-0.229 1.067-0.762 1.524-1.371z"
              ></path>
            </a>
          </svg>
          <svg viewBox="0 0 16 16" className="prodcut_page_right_pinterest">
            <a
              href={`http://pinterest.com/pin/create/button/?url=https%3A%2F%2Fwww.entrepreneurshipnetwork.net%2Fproduct-page%2F${
                title && title
              }`}
              target="_blank"
              rel="noreferrer"
            >
              <path
                className="prodcut_page_right_pinterest"
                d="M7.162 10.438c-0.381 2.133-0.914 4.114-2.362 5.181-0.457-3.2 0.686-5.562 1.143-8.076-0.838-1.448 0.152-4.419 1.981-3.733 2.286 0.914-1.981 5.486 0.838 6.019 2.971 0.61 4.19-5.181 2.362-7.010-2.667-2.667-7.695-0.076-7.086 3.81 0.152 0.914 1.143 1.219 0.381 2.514-1.676-0.305-2.21-1.676-2.133-3.429 0.076-2.895 2.667-4.952 5.181-5.257 3.2-0.381 6.171 1.143 6.629 4.19 0.457 3.429-1.448 7.086-4.876 6.781-0.99-0.076-1.371-0.533-2.057-0.99z"
              ></path>
            </a>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default ProductPageRight;
