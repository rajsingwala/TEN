import React, { useState } from "react";

const CartNote = () => {
  const [note, setNote] = useState(false);

  const handleNote = () => {
    setNote(!note);
  };

  return (
    <div className="cart_left_four">
      {/* top */}
      <div className="cart_left_four_top" onClick={handleNote}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 12 13"
        >
          <g fill="none" fill-rule="evenodd" stroke="none" stroke-width="1">
            <g transform="translate(-515 -882)">
              <g transform="translate(515 882)">
                <path
                  stroke="currentColor"
                  d="M.5.5h7.778L11.5 3.737V12.5H.5V.5z"
                ></path>
                <path
                  stroke="currentColor"
                  d="M10.793 3.5H8.5V1.207L10.793 3.5z"
                ></path>
                <path fill="currentColor" d="M3 3H6V4H3z"></path>
                <path fill="currentColor" d="M3 6H9V7H3z"></path>
                <path fill="currentColor" d="M3 9H9V10H3z"></path>
              </g>
            </g>
          </g>
        </svg>
        <span>Add a note</span>
      </div>

      {/* bottom */}
      {note && (
        <div className="cart_left_four_bottom">
          <textarea
            type="text"
            placeholder="Instructions? Special request? Add them here"
          />
        </div>
      )}
    </div>
  );
};

export default CartNote;
