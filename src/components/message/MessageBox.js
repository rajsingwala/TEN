import React, { useState } from "react";
import { AiOutlineClose, AiOutlineSmile } from "react-icons/ai";
import { FiChevronDown } from "react-icons/fi";
import { MdSend } from "react-icons/md";
import Picker from "emoji-picker-react";

const MessageBox = ({
  messageBox,
  handleMessage,
  messages,
  setMessages,
  onEmojiClick,
}) => {
  const [picker, setPicker] = useState(false);

  const handlePicker = () => {
    setPicker(!picker);
  };

  return (
    <>
      {" "}
      {messageBox && (
        <div className="message_box">
          {/* header */}
          <div className="message_box_header">
            <div className="message_box_left">
              <div className="message_box_left_top">Let's Chat!</div>
              <div className="message_box_left_bottom">
                <div className="message_box_green" />
                <span>We’ll reply as soon as we can</span>
              </div>
            </div>
            <div className="message_box_right">
              <AiOutlineClose
                className="close_message_box"
                onClick={handleMessage}
              />
            </div>
          </div>

          {/* mid */}
          <div className="message_box_mid" />

          {/* bottom */}
          <div className="message_box_bottom">
            {/* message-top */}
            <div className="messages_box_bottom_top">
              <textarea
                type="text"
                placeholder="Type your message..."
                value={messages}
                onChange={(e) => setMessages(e.target.value)}
                autoFocus
              />
              {messages !== "" && (
                <div className="message_send">
                  <MdSend className="messages_send_icon" />
                </div>
              )}
            </div>

            <div className={picker ? "emoji_picker active" : "emoji_picker"}>
              <Picker
                className="emoji_picker_menu"
                onEmojiClick={onEmojiClick}
              />
            </div>

            {/* message-bottom */}
            <div className="messages_box_bottom_bottom">
              <div className="messages_box_bottom_bottom_left">
                {picker ? (
                  <div className="message_emoji_down">
                    <FiChevronDown
                      className="message_smile"
                      onClick={handlePicker}
                    />
                  </div>
                ) : (
                  <AiOutlineSmile
                    className="message_smile"
                    onClick={handlePicker}
                  />
                )}
                <div className="message_file_input_div">
                  <label>
                    <svg
                      viewBox="0 0 9 23"
                      fill="currentColor"
                      className="file_input_icon"
                    >
                      <path d="M4.5,23A4.5,4.5,0,0,1,0,18.5V4.5a4.5,4.5,0,0,1,9,0H8a3.5,3.5,0,0,0-7,0v14a3.5,3.5,0,0,0,7,0v-9a1.5,1.5,0,0,0-3,0V17H4V9.5a2.5,2.5,0,0,1,5,0v9A4.5,4.5,0,0,1,4.5,23Z"></path>
                    </svg>
                    <input className="message_file" type="file" />
                  </label>
                </div>
              </div>
              <div className="messages_box_bottom_bottom_right">
                <span className="message_poweredby">POWERED BY</span>
                <a
                  target="_blank"
                  title="Ascend by Wix"
                  href="https://www.wix.com/ascend/home?utm_campaign=vir_wixad_chat"
                  rel="noreferrer"
                >
                  <div className="message_bottom_logo" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MessageBox;
