import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  selectCart,
  setDrawer,
  selectDrawer,
  setCart,
} from "../../features/cartSlice";
import { GrNext } from "react-icons/gr";
import { AiOutlineClose } from "react-icons/ai";
import { useHistory } from "react-router-dom";
import numeral from "numeral";

const CartDrawer = () => {
  const dispatch = useDispatch();
  const cart = useSelector(selectCart);
  const drawer = useSelector(selectDrawer);

  const history = useHistory();

  const getTotal = () => {
    return cart.reduce((p, n) => {
      return p + n.price * n.count;
    }, 0);
  };

  const handleRemove = (pro) => {
    let cart = [];

    if (typeof window !== "undefined") {
      if (localStorage.getItem("cart")) {
        cart = JSON.parse(localStorage.getItem("mycart"));
      }

      cart.map((product, i) => {
        if (product.slug === pro.slug) {
          cart.splice(i, 1);
          console.log(product.slug);
        }
      });

      localStorage.setItem("mycart", JSON.stringify(cart));
      dispatch(
        setCart({
          cart: cart,
        })
      );
    }
  };

  const incItem = (pro) => {
    let cart = [];

    let count = pro.count + 1;

    if (typeof window !== "undefined") {
      if (localStorage.getItem("cart")) {
        cart = JSON.parse(localStorage.getItem("mycart"));
      }

      cart.map((product, i) => {
        if (product.slug === pro.slug) {
          cart[i].count = count;
        }
      });

      localStorage.setItem("mycart", JSON.stringify(cart));
      dispatch(
        setCart({
          cart: cart,
        })
      );
    }
  };

  const decItem = (pro) => {
    let cart = [];

    let count = pro.count - 1;
    if (count === 0) {
      return;
    }

    if (typeof window !== "undefined") {
      if (localStorage.getItem("cart")) {
        cart = JSON.parse(localStorage.getItem("mycart"));
      }

      cart.map((product, i) => {
        if (product.slug === pro.slug) {
          cart[i].count = count;
        }
      });

      localStorage.setItem("mycart", JSON.stringify(cart));
      dispatch(
        setCart({
          cart: cart,
        })
      );
    }
  };

  return (
    <>
      <div
        className={drawer ? "cart_drawer_mask active" : "cart_drawer_mask"}
      />
      <div className={drawer ? "cart_drawer active" : "cart_drawer"}>
        {/* header */}
        <div className="cart_drawer_header">
          <GrNext
            onClick={() => {
              dispatch(setDrawer({ drawer: false }));
            }}
          />
          <span>Cart</span>
        </div>

        {/* body */}
        <div
          className={
            cart && cart.length > 0
              ? "cart_drawer_body"
              : "cart_drawer_body not"
          }
        >
          {cart && cart.length === 0 && (
            <div className="cart_drawer_no_cart">Cart is Empty </div>
          )}
          {/* body-top */}
          {cart && cart.length > 0 && (
            <div className="cart_drawer_body_top_div">
              {cart &&
                cart.length > 0 &&
                cart.map((item, i) => (
                  <div className="cart_drawer_body_top1" key={i}>
                    <div className="cart_drawer_body_top">
                      {/* top-left */}
                      <div className="cart_drawer_body_top_left">
                        <img src={item?.img} alt={item?.title} />
                      </div>

                      {/* mid */}
                      <div className="cart_drawer_body_top_mid">
                        <div className="cart_drawer_body_top_mid_top">
                          {item?.title}
                        </div>
                        <p className="cart_drawer_body_top_mid_mid">
                          ₹{numeral(item?.price).format("0,0.00")}
                        </p>
                        <div className="cart_drawer_body_top_mid_bottom">
                          <span
                            className="card_drawer_body_top_mid_bottom_inc"
                            onClick={() => decItem(item)}
                          >
                            -
                          </span>
                          <span>{item.count}</span>
                          <span
                            className="card_drawer_body_top_mid_bottom_inc"
                            onClick={() => incItem(item)}
                          >
                            +
                          </span>
                        </div>
                      </div>

                      {/* right */}
                      <div
                        className="cart_drawer_body_top_right"
                        onClick={() => handleRemove(item)}
                      >
                        <AiOutlineClose />
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          )}

          {/* bottom */}
          {cart && cart.length > 0 && (
            <div className="cart_drawer_body_bottom">
              <p>SubTotal</p>
              <p> {`₹ ${numeral(getTotal()).format("0,0.00")}`}</p>
            </div>
          )}
        </div>

        {/* footer */}
        {cart && cart.length > 0 && (
          <div className="cart_drawer_footer">
            <div
              className="cart_drawer_footer_btn"
              onClick={() => {
                dispatch(setDrawer({ drawer: false }));
                history.push("/cart");
              }}
            >
              View Cart
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default CartDrawer;
