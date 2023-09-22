import React from "react";
import imgref from "../components/imgref";

function Chatbox() {
  return (
    <div className="mt-32 w-full mx-auto flex flex-col gap-14 items-center">
      <p className=" text-[51px] font-medium tracking-[-1.12px]">
        Chatbot that
      </p>
      <p className=" font-normal text-center max-w-[605px] text-[22px]">
        Designed to the last pixel and engineered with unforgiving precision,
        Linear combines UI elegance with world-class performance.
      </p>
      <div className=" w-full relative flex justify-center">
        <img
          src={imgref.ArtificiumChatbox}
          alt=""
          className=" mt-12 z-30 mx-auto w-[80%] "
        />
        <img
          src={imgref.clippathchatbox}
          alt=""
          className=" absolute mt-[68px] z-[-1] top-0 left-0 min-w-full"
        />
      </div>
    </div>
  );
}

export default Chatbox;
