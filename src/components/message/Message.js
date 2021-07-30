import React, { useState } from "react";
import MessageBox from "./MessageBox";

const Message = () => {
  const [messageBox, setMessageBox] = useState(false);
  const [messages, setMessages] = useState("");

  const handleMessage = () => {
    setMessageBox(!messageBox);
  };

  const onEmojiClick = (event, emojiObject) => {
    setMessages(emojiObject.emoji);
  };

  return (
    <>
      {/* message-box-icon */}
      <div className="message_div">
        {!messageBox && (
          <div className="message" onClick={handleMessage}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="message_chat_icon"
              viewBox="0 0 32 32"
            >
              <path
                d="M16 2C8.28 2 2 7.8 2 14.93a12.144 12.144 0 001.696 6.15l-1.668 7.51A1.16 1.16 0 003.63 29.9l6.914-3.072A14.835 14.835 0 0016 27.861c7.72 0 14-5.8 14-12.93S23.72 2 16 2zm4.508 16.32h-9.016a1.16 1.16 0 010-2.32h9.016a1.16 1.16 0 010 2.32zm0-4.638h-9.016a1.16 1.16 0 010-2.318h9.016a1.16 1.16 0 110 2.318z"
                fill="currentColor"
                fill-rule="nonzero"
              ></path>
            </svg>
          </div>
        )}
      </div>
      {/* message-box */}
      <MessageBox
        messageBox={messageBox}
        handleMessage={handleMessage}
        messages={messages}
        setMessages={setMessages}
        onEmojiClick={onEmojiClick}
      />
    </>
  );
};

export default Message;
