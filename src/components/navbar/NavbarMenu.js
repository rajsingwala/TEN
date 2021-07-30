import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { selectIcon, setIcon } from "../../features/toggleSlice";
import NavbarToggle from "./NavbarToggle";
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";

const NavbarMenu = () => {
  const icon = useSelector(selectIcon);
  const dispatch = useDispatch();
  const [more, setMore] = useState(false);

  const handleToggle = () => {
    dispatch(setIcon({ icon: !icon }));
  };

  const handleMore = () => {
    setMore(!more);
  };

  return (
    <div className={icon ? "navbar_menu active" : "navbar_menu"}>
      {/* mobile-toggle */}
      <div className="navbar_mobile_toggle">
        <NavbarToggle />
      </div>

      <ul className="navbar_menu_ul">
        <NavLink
          exact
          to="/"
          activeClassName="navbar_menu_active"
          onClick={handleToggle}
        >
          <li className="navbar_menu_li">Home</li>
        </NavLink>
        <NavLink exact to="/courses" activeClassName="navbar_menu_active">
          <li className="navbar_menu_li" onClick={handleToggle}>
            Online Courses
          </li>
        </NavLink>

        <NavLink exact to="/hiring" activeClassName="navbar_menu_active">
          <li className="navbar_menu_li" onClick={handleToggle}>
            We're Hiring
          </li>
        </NavLink>

        <div className="navbar_menu_more_div">
          <li className="navbar_menu_more" onClick={handleMore}>
            <span>More</span>
            <div className="more_arrow">
              {more ? (
                <AiOutlineUp className="more_arrow_icon" />
              ) : (
                <AiOutlineDown className="more_arrow_icon" />
              )}
            </div>
          </li>

          {more && (
            <ul className="more_options">
              <NavLink exact to="/blog" activeClassName="navbar_more_active">
                <li className="more_options_li" onClick={handleToggle}>
                  Blog
                </li>
              </NavLink>

              <NavLink
                exact
                to="/certification"
                activeClassName="navbar_more_active"
              >
                <li className="more_options_li" onClick={handleToggle}>
                  Certification
                </li>
              </NavLink>

              <NavLink
                exact
                to="/alumni-team"
                activeClassName="navbar_more_active"
              >
                <li className="more_options_li" onClick={handleToggle}>
                  Alumni Team
                </li>
              </NavLink>

              <NavLink exact to="/forum" activeClassName="navbar_more_active">
                <li className="more_options_li" onClick={handleToggle}>
                  Forum
                </li>
              </NavLink>

              <NavLink
                exact
                to="/hackathon"
                activeClassName="navbar_more_active"
              >
                <li className="more_options_li" onClick={handleToggle}>
                  Hackathon
                </li>
              </NavLink>

              <NavLink
                exact
                to="/membership-registration"
                activeClassName="navbar_more_active"
              >
                <li className="more_options_li" onClick={handleToggle}>
                  Mentorship Registration
                </li>
              </NavLink>

              <NavLink
                exact
                to="/campus-ambassador-program"
                activeClassName="navbar_more_active"
              >
                <li className="more_options_li" onClick={handleToggle}>
                  Campus Ambassador Program
                </li>
              </NavLink>

              <NavLink
                exact
                to="/mentorship"
                activeClassName="navbar_more_active"
              >
                <li className="more_options_li" onClick={handleToggle}>
                  Mentorship
                </li>
              </NavLink>

              <NavLink
                exact
                to="/social-media"
                activeClassName="navbar_more_active"
              >
                <li className="more_options_li" onClick={handleToggle}>
                  Social Media
                </li>
              </NavLink>

              <NavLink
                exact
                to="/testimonials"
                activeClassName="navbar_more_active"
              >
                <li className="more_options_li" onClick={handleToggle}>
                  Testimonials
                </li>
              </NavLink>

              <NavLink
                exact
                to="/contact-us"
                activeClassName="navbar_more_active"
              >
                <li className="more_options_li" onClick={handleToggle}>
                  Contact Us
                </li>
              </NavLink>

              <NavLink
                exact
                to="/complaints"
                activeClassName="navbar_more_active"
              >
                <li className="more_options_li" onClick={handleToggle}>
                  Complaints
                </li>
              </NavLink>
            </ul>
          )}
        </div>
      </ul>
    </div>
  );
};

export default NavbarMenu;
