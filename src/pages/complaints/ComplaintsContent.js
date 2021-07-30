import React from "react";

const ComplaintsContent = () => {
  return (
    <div className="complaints_content">
      {/* left */}
      <div className="complaints_content_left">
        <div className="complaints_content_left_top">
          For any complaints regarding The Entrepreneurship Network(TEN) please
          contact at our email address:
        </div>
        <div className="complaints_content_left_bottom">
          <a
            href="mailto:contact@entrepreneurshipnetwork.net"
            target="_blank"
            rel="noreferrer"
          >
            contact@entrepreneurshipnetwork.net
          </a>
        </div>
      </div>

      {/* right */}
      <div className="complaints_content_right">
        <img src="images/28.webp" alt="complaints" />
      </div>
    </div>
  );
};

export default ComplaintsContent;
