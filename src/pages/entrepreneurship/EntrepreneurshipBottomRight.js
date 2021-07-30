import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";

const EntrepreneurshipBottomRight = () => {
  const history = useHistory();

  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <div className="entrepreneurship_bottom_right">
      {/* top */}
      <div className="entrepreneurship_bottom_right_title" data-aos="fade-up">
        About My Course
      </div>
      <div className="entrepreneurship_bottom_right_subtitle">
        A TEN Specialization is a series of courses that helps you master a
        skill. To begin, enroll in the Specialization directly, or review its
        courses and choose the one you'd like to start with. When you subscribe
        to a course that is part of a Specialization, you’re automatically
        subscribed to the full Specialization. It’s okay to complete just one
        course — you can pause your learning or end your subscription at any
        time. Visit your learner dashboard to track your course enrollments and
        your progress.
      </div>

      {/* mid */}
      <div className="entrepreneurship_bottom_right_content">
        <div className="entrepreneurship_bottom_right_content_container">
          <p className="entrepreneurship_bottom_right_content_title">
            Hands-on Project
          </p>
          <div className="entrepreneurship_bottom_right_content_text">
            <p>
              Every Specialization includes a hands-on project. You'll need to
              successfully finish the project(s) to complete the Specialization
              and earn your certificate. If the Specialization includes a
              separate course for the hands-on project, you'll need to finish
              each of the other courses before you can start it.
            </p>
            <p className="entrepreneurship_bottom_right_content_text_bold">
              Earn a Certificate{" "}
            </p>
            <p>
              When you finish every course and complete the hands-on project,
              you'll earn a Certificate that you can share with prospective
              employers and your professional network.{" "}
            </p>
          </div>
        </div>

        <div className="entrepreneurship_bottom_right_content_container">
          <p className="entrepreneurship_bottom_right_content_title">
            Course Curriculum :
          </p>
          <div className="entrepreneurship_bottom_right_content_text">
            <p>Entrepreneurship 1: Developing the Opportunity</p>
            <p>Entrepreneurship 2: Launching your Start-Up</p>
            <p>Entrepreneurship 3: Growth Strategies</p>
            <p>Entrepreneurship 4: Financing and Profitability</p>
            <p>Entrepreneurship Capstone</p>
          </div>
        </div>
      </div>

      {/* bottom */}
      <div className="entrepreneurship_bottom_right_bottom">
        <div
          className="entrepreneurship_bottom_right_bottom_btn"
          onClick={() => history.push("/courses")}
        >
          <span>Explore in Courses</span>
          <svg
            data-bbox="21.334 0 469.331 512"
            viewBox="0 0 512 512"
            xmlns="http://www.w3.org/2000/svg"
            data-type="shape"
            className="entrepreneurship_bottom_right_bottom_btn_svg"
          >
            <g>
              <path
                className="entrepreneurship_bottom_right_bottom_btn_svg"
                d="M479.999 0C263.145 0 84.777 166.827 65.876 378.837c36.032-50.816 80.171-99.712 135.275-155.925 4.096-4.224 10.88-4.309 15.083-.149 4.203 4.117 4.267 10.88.149 15.083-8.299 8.448-16.725 17.216-25.195 26.091-4.843 5.056-9.579 10.091-14.229 15.04-.853.917-1.707 1.835-2.56 2.773C106.303 354.667 57.62 418.133 22.27 496.96c-2.411 5.376 0 11.691 5.355 14.101 1.429.64 2.901.939 4.373.939 4.075 0 7.979-2.347 9.749-6.293 12.587-28.053 27.2-54.08 43.627-79.403 148.992-3.819 284.608-86.699 355.691-218.581a10.726 10.726 0 0 0-.235-10.539 10.751 10.751 0 0 0-9.173-5.184h-39.509l70.848-40.491a10.686 10.686 0 0 0 4.8-5.781c15.189-44.16 22.869-89.6 22.869-135.061C490.665 4.779 485.887 0 479.999 0z"
              ></path>
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default EntrepreneurshipBottomRight;
