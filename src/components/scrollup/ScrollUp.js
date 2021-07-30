import React, { useEffect, useRef } from "react";
import { FaChevronUp } from "react-icons/fa";

const ScrollUp = () => {
  //   const scrollBtn = document.querySelector(".scroll-btn");
  //   window.addEventListener("scroll", () => {
  //     if (
  //       document.body.scrollTop > 20 ||
  //       document.documentElement.scrollTop > 20
  //     ) {
  //       scrollBtn.style.display = "block";
  //       scrollBtn.style.zIndex = "2";
  //     } else {
  //       scrollBtn.style.display = "none";
  //     }
  //   });

  const myRef = useRef();

  useEffect(() => {
    window.addEventListener("scroll", handleScrollUp);
  }, []);

  const handleScrollUp = () => {
    const ele = myRef.current;
    if (
      document.documentElement.scrollTop > 20 ||
      document.body.scrollTop > 20
    ) {
      ele.className = "scroll_btn";
    } else {
      ele.className = "scroll_btn_none";
    }
  };

  const handleScroll = () => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="scroll_btn" onClick={handleScroll} ref={myRef}>
      <FaChevronUp />
    </div>
  );
};

export default ScrollUp;
