import React, { useState, useEffect } from "react";
import NavbarToggle from "./NavbarToggle";
import NavbarMenu from "./NavbarMenu";
import NavSearch from "./NavSearch";
import { Link, NavLink } from "react-router-dom";
import { Menu, Dropdown } from "antd";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";
import { BiSearch } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { setLogin, selectLogin } from "../../features/toggleSlice";
import { useHistory } from "react-router-dom";
import { getData } from "../../function/courses";
import { getBlog } from "../../function/blog";
import { getPages } from "../../function/pages";

const Navbar = () => {
  const [search, setSearch] = useState("");
  const [width, setWidth] = useState(0);
  const [data, setData] = useState([]);
  const [data2, setData2] = useState([]);
  const [data3, setData3] = useState([]);
  const [course, setCourse] = useState([]);
  const [blog, setBlog] = useState([]);
  const [pages, setPages] = useState([]);

  const dispatch = useDispatch();
  const login = useSelector(selectLogin);

  const history = useHistory();

  useEffect(() => {
    loadCourse();
    loadBlog();
    loadPages();
  }, []);

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

  const loadCourse = () => {
    getData()
      .then((res) => {
        setData(res.data.courses);
      })
      .catch((err) => console.log(err));
  };

  const loadBlog = () => {
    getBlog()
      .then((res) => setData2(res.data.blog))
      .catch((err) => console.log(err));
  };

  const loadPages = () => {
    getPages()
      .then((res) => setData3(res.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    const array = [];
    const array2 = [];
    const array3 = [];

    // courses
    for (let i = 1; i <= 10; i++) {
      if (data[i]) {
        if (data[i]?.title.toLowerCase().includes(search)) {
          array.push(data[i]);
        }
      }
    }

    // blogs
    for (let i = 1; i <= 8; i++) {
      if (data2[i]) {
        if (data2[i]?.title.toLowerCase().includes(search)) {
          array2.push(data2[i]);
        }
      }
    }

    // pages
    for (let i = 0; i <= data3?.length; i++) {
      if (data3[i]) {
        if (data3[i]?.title.toLowerCase().includes(search)) {
          array3.push(data3[i]);
        }
      }
    }

    setCourse(array);
    setBlog(array2);
    setPages(array3);
  }, [search]);

  const menu = (
    <Menu className="navbar_more_menu">
      <NavLink exact to="/blog" activeClassName="navbar_more_active">
        <Menu.Item className="navbar_more_menu_item">
          <span className="navbar_more_menu_item_content">Blog</span>
        </Menu.Item>
      </NavLink>
      <Menu.Divider className="navbar_menu_divider" />

      <NavLink exact to="/certification" activeClassName="navbar_more_active">
        <Menu.Item className="navbar_more_menu_item">
          <span className="navbar_more_menu_item_content">Certification</span>
        </Menu.Item>
      </NavLink>
      <Menu.Divider className="navbar_menu_divider" />

      <NavLink exact to="/alumni-team" activeClassName="navbar_more_active">
        <Menu.Item className="navbar_more_menu_item">
          <span className="navbar_more_menu_item_content">Alumni Team</span>
        </Menu.Item>
      </NavLink>
      <Menu.Divider className="navbar_menu_divider" />

      <NavLink exact to="/forum" activeClassName="navbar_more_active">
        <Menu.Item className="navbar_more_menu_item">
          <span className="navbar_more_menu_item_content">Forum</span>
        </Menu.Item>
      </NavLink>
      <Menu.Divider className="navbar_menu_divider" />

      <NavLink exact to="/hackathon" activeClassName="navbar_more_active">
        <Menu.Item className="navbar_more_menu_item">
          <span className="navbar_more_menu_item_content">Hackathon</span>
        </Menu.Item>
      </NavLink>
      <Menu.Divider className="navbar_menu_divider" />

      <NavLink
        exact
        to="/membership-registration"
        activeClassName="navbar_more_active"
      >
        <Menu.Item className="navbar_more_menu_item">
          <span className="navbar_more_menu_item_content">
            Membership Registration
          </span>
        </Menu.Item>
      </NavLink>
      <Menu.Divider className="navbar_menu_divider" />

      <NavLink
        exact
        to="/campus-ambassador-program"
        activeClassName="navbar_more_active"
      >
        <Menu.Item className="navbar_more_menu_item">
          <span className="navbar_more_menu_item_content">
            Campus Ambassador Program
          </span>
        </Menu.Item>
      </NavLink>
      <Menu.Divider className="navbar_menu_divider" />

      <NavLink exact to="/mentorship" activeClassName="navbar_more_active">
        <Menu.Item className="navbar_more_menu_item">
          <span className="navbar_more_menu_item_content">Mentorship</span>
        </Menu.Item>
      </NavLink>
      <Menu.Divider className="navbar_menu_divider" />

      <NavLink exact to="/social-media" activeClassName="navbar_more_active">
        <Menu.Item className="navbar_more_menu_item">
          <span className="navbar_more_menu_item_content">Social Media</span>
        </Menu.Item>
      </NavLink>
      <Menu.Divider className="navbar_menu_divider" />

      <NavLink exact to="/testimonials" activeClassName="navbar_more_active">
        <Menu.Item className="navbar_more_menu_item">
          <span className="navbar_more_menu_item_content">Testimonials</span>
        </Menu.Item>
      </NavLink>
      <Menu.Divider className="navbar_menu_divider" />

      <NavLink exact to="/contact-us" activeClassName="navbar_more_active">
        <Menu.Item className="navbar_more_menu_item">
          <span className="navbar_more_menu_item_content">Contact Us</span>
        </Menu.Item>
      </NavLink>
      <Menu.Divider className="navbar_menu_divider" />

      <NavLink exact to="/complaints" activeClassName="navbar_more_active">
        <Menu.Item className="navbar_more_menu_item">
          <span className="navbar_more_menu_item_content">Complaints</span>
        </Menu.Item>
      </NavLink>
    </Menu>
  );

  return (
    <div className="navbar">
      <div className="navbar_container">
        {/* left */}
        <div className="navbar_left">
          <div className="navbar_title">
            <p className="navbar_title_name">
              <Link to="/">
                <span className="navbar_title_first">T</span>
                <span className="navbar_title_later">he</span>
              </Link>
            </p>
            <p className="navbar_title_name">
              <Link to="/">
                <span className="navbar_title_first">E</span>
                <span className="navbar_title_later">ntrepreneurship</span>
              </Link>
            </p>
            <p className="navbar_title_name">
              <Link to="/">
                <span className="navbar_title_first">N</span>
                <span className="navbar_title_later">etwork</span>
              </Link>
            </p>
          </div>

          <Link to="/">
            <div className="navbar_logo">
              <img src="/images/1.webp" alt="logo" />
            </div>
          </Link>
        </div>

        {/* mid */}
        <div className="navbar_mid">
          <ul className="navbar_mid_ul">
            <NavLink exact to="/" activeClassName="navbar_ul_active">
              <li className="navbar_mid_ul_li">Home</li>
            </NavLink>
            <li className="line">|</li>
            <NavLink exact to="/courses" activeClassName="navbar_ul_active">
              <li className="navbar_mid_ul_li">Online Courses</li>
            </NavLink>
            <li className="line">|</li>
            <NavLink exact to="/hiring" activeClassName="navbar_ul_active">
              <li className="navbar_mid_ul_li">We're Hiring</li>
            </NavLink>
            <li className="line">|</li>
            <Dropdown overlay={menu} placement="bottomCenter">
              <li className="navbar_more">More</li>
            </Dropdown>
          </ul>

          {/* mid-mobile */}
          <NavbarToggle />
        </div>

        {/* right */}
        <div className="navbar_right">
          <div className="navbar_right_top">
            <div
              className="navbar_right_top_cart"
              onClick={() => history.push("/cart")}
            >
              <AiOutlineShoppingCart className="navbar_cart_icon" />
            </div>
            <div
              className="navbar_right_top_login"
              onClick={() => dispatch(setLogin({ login: !login }))}
            >
              <FaUserCircle className="navbar_user_icon" />
              <span className="navbar_right_top_login_span">Log In</span>
            </div>
          </div>
          {width > 1099 && (
            <div
              className={
                search ? "navbar_right_bottom active" : "navbar_right_bottom"
              }
            >
              <div className="navbar_right_bottom_top">
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    history.push(`/search-results/${search}`);
                    setSearch("");
                  }}
                >
                  <input
                    type="text"
                    placeholder="Search here..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value.toLowerCase())}
                    className="navbar_input"
                    onSubmit={() => history.push(`/search-results/${search}`)}
                  />
                </form>

                <BiSearch className="navbar_search_icon" />
              </div>
              {search && (
                <div className="navbar_right_bottom_bottom">
                  <NavSearch
                    course={course}
                    blog={blog}
                    pages={pages}
                    search={search}
                    setSearch={setSearch}
                  />
                </div>
              )}
            </div>
          )}
          {width <= 1099 && (
            <div className="navbar_right_bottom_mobile">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  history.push(`/search-results/${search}`);
                  setSearch("");
                }}
              >
                <input
                  type="text"
                  placeholder="Search here..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value.toLowerCase())}
                  className="navbar_input"
                />
              </form>
              <BiSearch className="navbar_search_icon" />
            </div>
          )}
        </div>
      </div>

      <NavbarMenu />
    </div>
  );
};

export default Navbar;
