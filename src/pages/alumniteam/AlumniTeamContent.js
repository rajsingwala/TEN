import React, { useEffect, useState } from "react";
import AlumniTeamCard from "../../components/card/AlumniTeamCard";
import { getData } from "../../function/alumniTeam";

const AlumniTeamContent = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData()
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="alumni_team_content">
      {data &&
        data.length > 0 &&
        data.map((item, i) => (
          <AlumniTeamCard img={item?.img} link={item?.link} name={item?.name} />
        ))}
    </div>
  );
};

export default AlumniTeamContent;
