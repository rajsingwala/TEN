import React from "react";
import ComplaintsContent from "./ComplaintsContent";

const Complaints = () => {
  return (
    <div className="complaints">
      <div className="complaints_container">
        <div className="complaints_title">Complaints</div>
        <ComplaintsContent />
      </div>
    </div>
  );
};

export default Complaints;
