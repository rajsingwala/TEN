import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { getBlog } from "../../../function/blog";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import styled from "styled-components";
import RecentPost from "../../../components/card/RecentPost";

let settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slideToShow: 1,
  slideToScroll: 1,
  autoplay: false,
  swipeToSlide: true,
};

const RecentPosts = ({ carousel }) => {
  const history = useHistory();
  const [data, setData] = useState([]);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = () => {
    getBlog()
      .then((res) => setData(res.data.blog))
      .catch((err) => console.log(err));
  };

  return (
    <div className="recent_posts_mobile">
      {/* title */}
      <div className="recent_posts_title_mobile">
        <div className="recent_posts_title_left_mobile">Recent Posts</div>
        <div
          className="recent_posts_title_right_mobile"
          onClick={() => history.push("/blog")}
        >
          See All
        </div>
      </div>

      <Carousel {...settings}>
        <Wrap>
          <div className="caro">
            {carousel.length > 0 && (
              <RecentPost data={carousel[0] && carousel[0]} />
            )}
          </div>
        </Wrap>
        <Wrap>
          <div className="caro">
            {carousel.length > 0 && (
              <RecentPost data={carousel[1] && carousel[1]} />
            )}
          </div>
        </Wrap>

        <Wrap>
          <div className="caro">
            {carousel.length > 0 && (
              <RecentPost data={carousel[2] && carousel[2]} />
            )}
          </div>
        </Wrap>
      </Carousel>
    </div>
  );
};

const Carousel = styled(Slider)`
  margin-top: 4rem;
  margin-bottom: 2rem;
  width: 100%;
  height: 38rem;
  overflow: hidden;

  & > button {
    opacity: 0;
    visibility: hidden;
  }

  .slick-next:before {
    display: none;
  }
  .slick-prev:before {
    display: none;
  }

  ul li button {
    &:before {
      font-size: 10px;
      color: rgba(128, 128, 128, 1);
    }
  }
  .slick-dots {
    top: 34rem;
    height: 2rem;
  }

  li.slick-active button:before {
    color: white !important;
  }

  .slick-list {
    overflow: initial;
  }

  .slick-prev {
    ${"" /* left: -70px; */}
  }
  .slick-next {
    ${"" /* right: -70px; */}
  }
`;

const Wrap = styled.div`
  position: relative;
  cursor: pointer;

  .caro {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    overflow: hidden;
  }
`;

export default RecentPosts;
