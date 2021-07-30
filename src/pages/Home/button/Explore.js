import React from "react";
import { Link } from "react-router-dom";

const Explore = ({ link }) => {
  return (
    <Link to={link} target="_blank" rel="noreferrer">
      <div className="home_fourth_top_right_bottom">
        <span>Explore Here</span>
      </div>
    </Link>
  );
};

export default Explore;
