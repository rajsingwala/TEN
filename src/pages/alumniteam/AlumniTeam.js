import React from "react";
import AlumniTeamTitle from "./AlumniTeamTitle";
import ALumniTeamContent from "./AlumniTeamContent";

const AlumniTeam = () => {
  return (
    <div className="alumni_team">
      <div className="alumni_team_container">
        <AlumniTeamTitle />
        <ALumniTeamContent />
      </div>
    </div>
  );
};

export default AlumniTeam;
