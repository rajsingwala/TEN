import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { getBlog } from "../../../function/blog";
import RecentPost from "../../../components/card/RecentPost";

const RecentPosts = () => {
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

  const cards = () => {
    let array = [];
    for (let i = 0; i <= 2; ++i) {
      const random = Math.floor(Math.random() * 7);
      if (data[random + 1]) {
        array.push(<RecentPost data={data[random + 1]} />);
      }
    }
    return array;
  };

  return (
    <div className="recent_posts">
      {/* title */}
      <div className="recent_posts_title">
        <div className="recent_posts_title_left">Recent Posts</div>
        <div
          className="recent_posts_title_right"
          onClick={() => history.push("/blog")}
        >
          See All
        </div>
      </div>

      {/* content */}
      <div className="recent_posts_content">{cards()}</div>
    </div>
  );
};

export default RecentPosts;
