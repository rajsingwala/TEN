import React, { useEffect, useState } from "react";
import SocialMediaContent from "./social_media_content/SocialMediaContent";
import { getData } from "../../function/socialmedia";

const SocialMedia = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = () => {
    getData()
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="social_media">
      <div className="social_media_container">
        <SocialMediaContent data={data} />
      </div>
    </div>
  );
};

export default SocialMedia;
