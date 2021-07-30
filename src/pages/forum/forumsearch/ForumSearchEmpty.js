import React from "react";
import ForumSearchTitle from "./ForumSearchTitle";
import ForumSearchEmptyContent from "./ForumSearchEmptyContent";

const ForumSearchEmpty = () => {
  return (
    <div className="forum">
      <div className="forum_container">
        <div className="forum_content">
          <ForumSearchTitle />
          <ForumSearchEmptyContent />
        </div>
      </div>
    </div>
  );
};

export default ForumSearchEmpty;
