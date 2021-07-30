import React from "react";

const AlumniTeamCard = ({ img, name, link }) => {
  return (
    <div className="alumni_team_card">
      <div className="alumni_team_card_img_div">
        <div className="alumni_team_card_img">
          <img src={img && img} alt={name && name} />
        </div>
      </div>
      <div className="alumni_team_card_name">
        <a href={link} target="_blank" rel="noreferrer">
          {" "}
          <span>{name && name}</span>
        </a>
      </div>
    </div>
  );
};

export default AlumniTeamCard;
