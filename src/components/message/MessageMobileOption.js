import React from "react";
import { IoIosCall, IoIosMail } from "react-icons/io";
import { AiFillFacebook } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { setChat, selectChat } from "../../features/toggleSlice";

const MessageMobileOption = ({ handleMessage }) => {
  const dispatch = useDispatch();
  const chat = useSelector(selectChat);

  return (
    <>
      <div className="message_mobile_options" onClick={handleMessage}>
        <div className="message_mobile_option">
          <a href="tel:">
            <div className="message_mobile_option_name">Phone</div>
          </a>
          <a href="tel:">
            <div className="message_mobile_option_phone">
              <IoIosCall className="message_mobile_option_phone_icon" />
            </div>
          </a>
        </div>
        <div className="message_mobile_option">
          <a href="mailto:">
            <div className="message_mobile_option_email_name">Email</div>
          </a>
          <a href="mailto:">
            <div className="message_mobile_option_email">
              <IoIosMail className="message_mobile_option_email_icon" />
            </div>
          </a>
        </div>
        <div className="message_mobile_option">
          <a
            href="https://www.entrepreneurshipnetwork.net/"
            target="_blank"
            rel="noreferrer"
          >
            <div className="message_mobile_option_facebook">Facebook</div>
          </a>
          <a
            href="https://www.entrepreneurshipnetwork.net/"
            target="_blank"
            rel="noreferrer"
          >
            <div className="message_mobile_option_fb">
              <AiFillFacebook className="message_mobile_option_fb_icon" />
            </div>
          </a>
        </div>
        <div className="message_mobile_option">
          <div
            className="message_mobile_option_name_chat"
            onClick={() => dispatch(setChat({ chat: !chat }))}
          >
            Chat
          </div>
          <div
            className="message_mobile_option_chat_icon"
            onClick={() => dispatch(setChat({ chat: !chat }))}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="message_option_chat_icon"
              viewBox="0 0 32 32"
              width="25px"
              height="25px"
            >
              <path
                d="M16 2C8.28 2 2 7.8 2 14.93a12.144 12.144 0 001.696 6.15l-1.668 7.51A1.16 1.16 0 003.63 29.9l6.914-3.072A14.835 14.835 0 0016 27.861c7.72 0 14-5.8 14-12.93S23.72 2 16 2zm4.508 16.32h-9.016a1.16 1.16 0 010-2.32h9.016a1.16 1.16 0 010 2.32zm0-4.638h-9.016a1.16 1.16 0 010-2.318h9.016a1.16 1.16 0 110 2.318z"
                fill="currentColor"
                fill-rule="nonzero"
              ></path>
            </svg>
          </div>
        </div>
      </div>
    </>
  );
};

export default MessageMobileOption;
