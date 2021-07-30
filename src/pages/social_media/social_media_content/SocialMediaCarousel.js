import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ReactPlayer from "react-player";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 4.5,
  slidesToScroll: 5,
  centerMode: true,
};

const settings2 = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const SocialMediaCarousel = () => {
  return (
    <>
      <div className="social_media_carousel">
        <Slider {...settings}>
          <a
            href="https://twitter.com/We_Are_TEN/status/1372533497953406976"
            target="_blank"
            rel="noreferrer"
          >
            <div className="social_media_carousel_card">
              <img src="images/car1.jpg" alt="img" />
            </div>
          </a>
          <a
            href="https://twitter.com/We_Are_TEN/status/1371461413579939847"
            target="_blank"
            rel="noreferrer"
          >
            <div className="social_media_carousel_card">
              <img src="images/car2.jpg" alt="img" />
            </div>
          </a>
          <a
            href="https://twitter.com/We_Are_TEN/status/1371432923136720900"
            target="_blank"
            rel="noreferrer"
          >
            <div className="social_media_carousel_card">
              <img src="images/car3.jpg" alt="img" />
            </div>
          </a>
          <a
            href="https://twitter.com/We_Are_TEN/status/1370781929289752585"
            target="_blank"
            rel="noreferrer"
          >
            <div className="social_media_carousel_card">
              <img src="images/car4.jpg" alt="img" />
            </div>
          </a>
          <a
            href="https://twitter.com/We_Are_TEN/status/1370723220651974657"
            target="_blank"
            rel="noreferrer"
          >
            <div className="social_media_carousel_card">
              <img src="images/car5.jpg" alt="img" />
            </div>
          </a>
          <a
            href="https://twitter.com/We_Are_TEN/status/1370311140157317120"
            target="_blank"
            rel="noreferrer"
          >
            <div className="social_media_carousel_card">
              <img src="images/car6.jpg" alt="img" />
            </div>
          </a>
          <div className="social_media_carousel_card">
            <ReactPlayer
              controls
              url="https://youtu.be/MrHIGcQ2ciY"
              className="social_media_carousel_card_video"
            />
            <a
              href="https://www.youtube.com/watch?v=MrHIGcQ2ciY"
              target="_blank"
              rel="noreferrer"
            >
              <div className="social_media_carousel_card_video_black" />
            </a>
          </div>
          <div className="social_media_carousel_card">
            <ReactPlayer
              controls
              url="https://youtu.be/ycktMvYKWpE"
              className="social_media_carousel_card_video"
            />
            <a
              href="https://www.youtube.com/watch?v=ycktMvYKWpE"
              target="_blank"
              rel="noreferrer"
            >
              <div className="social_media_carousel_card_video_black" />
            </a>
          </div>
          <div className="social_media_carousel_card">
            <ReactPlayer
              controls
              url="https://youtu.be/GoAFZcqlbvA"
              className="social_media_carousel_card_video"
            />
            <a
              href="https://www.youtube.com/watch?v=GoAFZcqlbvA"
              target="_blank"
              rel="noreferrer"
            >
              <div className="social_media_carousel_card_video_black" />
            </a>
          </div>
          <div className="social_media_carousel_card">
            <ReactPlayer
              controls
              url="https://youtu.be/lMvohrq4vBw"
              className="social_media_carousel_card_video"
            />
            <a
              href="https://www.youtube.com/watch?v=lMvohrq4vBw"
              target="_blank"
              rel="noreferrer"
            >
              <div className="social_media_carousel_card_video_black" />
            </a>
          </div>
          <div className="social_media_carousel_card">
            <ReactPlayer
              controls
              url="https://www.youtube.com/watch?v=o18cGSKX8Xo"
              className="social_media_carousel_card_video"
            />
            <a
              href="https://www.youtube.com/watch?v=o18cGSKX8Xo"
              target="_blank"
              rel="noreferrer"
            >
              <div className="social_media_carousel_card_video_black" />
            </a>
          </div>
        </Slider>
      </div>

      {/****** mobile ******/}
      <div className="social_media_carousel_mobile">
        <Slider {...settings2}>
          <a
            href="https://twitter.com/We_Are_TEN/status/1372533497953406976"
            target="_blank"
            rel="noreferrer"
          >
            <div className="social_media_carousel_card">
              <img src="images/car1.jpg" alt="img" />
            </div>
          </a>
          <a
            href="https://twitter.com/We_Are_TEN/status/1371461413579939847"
            target="_blank"
            rel="noreferrer"
          >
            <div className="social_media_carousel_card">
              <img src="images/car2.jpg" alt="img" />
            </div>
          </a>
          <a
            href="https://twitter.com/We_Are_TEN/status/1371432923136720900"
            target="_blank"
            rel="noreferrer"
          >
            <div className="social_media_carousel_card">
              <img src="images/car3.jpg" alt="img" />
            </div>
          </a>
          <a
            href="https://twitter.com/We_Are_TEN/status/1370781929289752585"
            target="_blank"
            rel="noreferrer"
          >
            <div className="social_media_carousel_card">
              <img src="images/car4.jpg" alt="img" />
            </div>
          </a>
          <a
            href="https://twitter.com/We_Are_TEN/status/1370723220651974657"
            target="_blank"
            rel="noreferrer"
          >
            <div className="social_media_carousel_card">
              <img src="images/car5.jpg" alt="img" />
            </div>
          </a>
          <a
            href="https://twitter.com/We_Are_TEN/status/1370311140157317120"
            target="_blank"
            rel="noreferrer"
          >
            <div className="social_media_carousel_card">
              <img src="images/car6.jpg" alt="img" />
            </div>
          </a>
          <div className="social_media_carousel_card">
            <ReactPlayer
              controls
              url="https://youtu.be/MrHIGcQ2ciY"
              className="social_media_carousel_card_video"
            />
            <a
              href="https://www.youtube.com/watch?v=MrHIGcQ2ciY"
              target="_blank"
              rel="noreferrer"
            >
              <div className="social_media_carousel_card_video_black" />
            </a>
          </div>
          <div className="social_media_carousel_card">
            <ReactPlayer
              controls
              url="https://youtu.be/ycktMvYKWpE"
              className="social_media_carousel_card_video"
            />
            <a
              href="https://www.youtube.com/watch?v=ycktMvYKWpE"
              target="_blank"
              rel="noreferrer"
            >
              <div className="social_media_carousel_card_video_black" />
            </a>
          </div>
          <div className="social_media_carousel_card">
            <ReactPlayer
              controls
              url="https://youtu.be/GoAFZcqlbvA"
              className="social_media_carousel_card_video"
            />
            <a
              href="https://www.youtube.com/watch?v=GoAFZcqlbvA"
              target="_blank"
              rel="noreferrer"
            >
              <div className="social_media_carousel_card_video_black" />
            </a>
          </div>
          <div className="social_media_carousel_card">
            <ReactPlayer
              controls
              url="https://youtu.be/lMvohrq4vBw"
              className="social_media_carousel_card_video"
            />
            <a
              href="https://www.youtube.com/watch?v=lMvohrq4vBw"
              target="_blank"
              rel="noreferrer"
            >
              <div className="social_media_carousel_card_video_black" />
            </a>
          </div>
          <div className="social_media_carousel_card">
            <ReactPlayer
              controls
              url="https://www.youtube.com/watch?v=o18cGSKX8Xo"
              className="social_media_carousel_card_video"
            />
            <a
              href="https://www.youtube.com/watch?v=o18cGSKX8Xo"
              target="_blank"
              rel="noreferrer"
            >
              <div className="social_media_carousel_card_video_black" />
            </a>
          </div>
        </Slider>
      </div>
    </>
  );
};

export default SocialMediaCarousel;
