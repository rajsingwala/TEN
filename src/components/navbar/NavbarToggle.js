import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { setIcon, selectIcon } from "../../features/toggleSlice";
import { useDispatch, useSelector } from "react-redux";

const NavbarToggle = () => {
  const dispatch = useDispatch();
  const icon = useSelector(selectIcon);

  return (
    <div
      className="navbar_mid_mobile"
      onClick={() => {
        dispatch(setIcon({ icon: !icon }));
      }}
    >
      <div className={!icon && "navbar_mid_mobile_icon"}>
        <div className={!icon && "navbar_mid_mobile_icon1"} />
        <div className={!icon && "navbar_mid_mobile_icon2"} />
        <div className={!icon && "navbar_mid_mobile_icon3"} />
      </div>

      <AiOutlineClose
        className={
          icon
            ? "navbar_mid_mobile_icon_close"
            : "navbar_mid_mobile_icon_close_hide"
        }
      />
    </div>
  );
};

export default NavbarToggle;
