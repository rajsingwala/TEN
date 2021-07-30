import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { BsThreeDots } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { setMessage, selectMessage } from "../../features/toggleSlice";
import MessageMobileOption from "./MessageMobileOption";
import FullScreenChat from "./FullScreenChat";
import { selectChat } from "../../features/toggleSlice";

const MessageMobile = () => {
  const dispatch = useDispatch();
  const message = useSelector(selectMessage);
  const chat = useSelector(selectChat);

  const handleMessage = () => {
    dispatch(setMessage({ message: !message }));
  };

  return (
    <>
      <div
        className={
          message ? "message_mobile_page active" : "message_mobile_page"
        }
        onClick={handleMessage}
      />

      <div
        className={
          message
            ? "message_mobile_right_div active"
            : "message_mobile_right_div"
        }
      >
        {message && <MessageMobileOption handleMessage={handleMessage} />}
        <div className="message_mobile_icon" onClick={handleMessage}>
          {message ? (
            <AiOutlineClose className="message_mobile_dots" />
          ) : (
            <BsThreeDots className="message_mobile_dots" />
          )}
        </div>
      </div>

      {chat && <FullScreenChat />}
    </>
  );
};

export default MessageMobile;
