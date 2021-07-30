import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setChat, selectChat } from "../../features/toggleSlice";
import { AiOutlineClose } from "react-icons/ai";
import { MdSend } from "react-icons/md";

const FullScreenChat = () => {
  const [messages, setMessages] = useState("");

  const dispatch = useDispatch();
  const chat = useSelector(selectChat);

  return (
    <div className="full_screen_chat">
      {/* header */}
      <div className="full_screen_chat_header">
        <div className="full_screen_chat_header_left">
          <div className="full_screen_chat_header_left_top">
            <h2>Let's Chat!</h2>
          </div>
          <div className="full_screen_chat_header_bottom">
            <div className="full_screen_online" />
            <p>We’ll reply as soon as we can</p>
          </div>
        </div>
        <div className="full_screen_chat_right">
          <AiOutlineClose onClick={() => dispatch(setChat({ chat: !chat }))} />
        </div>
      </div>

      {/* mid */}
      <div className="full_screen_chat_mid" />

      {/* bottom */}
      <div className="full_screen_chat_bottom">
        {/* bottom-top */}
        <div className="full_screen_chat_bottom_top">
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

        {/* bottom-bottom */}
        <div className="full_screen_chat_bottom_bottom">
          <div className="full_screen_chat_bottom_bottom_left">
            <div className="full_screen_chat_file_input_div">
              <label>
                <svg
                  viewBox="0 0 9 23"
                  fill="currentColor"
                  className="full_screen_chat_file_input_icon"
                >
                  <path d="M4.5,23A4.5,4.5,0,0,1,0,18.5V4.5a4.5,4.5,0,0,1,9,0H8a3.5,3.5,0,0,0-7,0v14a3.5,3.5,0,0,0,7,0v-9a1.5,1.5,0,0,0-3,0V17H4V9.5a2.5,2.5,0,0,1,5,0v9A4.5,4.5,0,0,1,4.5,23Z"></path>
                </svg>
                <input className="full_screen_chat_file" type="file" />
              </label>
            </div>
          </div>
          <div className="full_screen_chat_bottom_bottom_right">
            <span className="full_screen_chat_poweredby">POWERED BY</span>
            <a
              target="_blank"
              title="Ascend by Wix"
              href="https://www.wix.com/ascend/home?utm_campaign=vir_wixad_chat"
              rel="noreferrer"
            >
              <div className="full_screen_chat_bottom_logo" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FullScreenChat;
