import React from "react";
import ForumSearchTitle from "./ForumSearchTitle";
import ForumSearchContent from "./ForumSearchContent";

const ForumSearch = () => {
  return (
    <div className="forum">
      <div className="forum_container">
        <div className="forum_content">
          <ForumSearchTitle />
          <ForumSearchContent />
        </div>
      </div>
    </div>
  );
};

export default ForumSearch;
