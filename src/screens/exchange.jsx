import React from "react";
import imgref from "../components/imgref";
import video from "../components/video";

function Exchange() {
  return (
    <div className=" mx-auto flex flex-col items-center mt-[50vh] max-w-[1043px] relative">
      <video
        src={video.exchangevid}
        autoPlay
        loop
        muted
        className=" absolute w-full h-[85%] top-[50%] translate-y-[-50%] z-[-1]"
      />
      <div className="flex gap-[86px] z-10">
        <img src={imgref.exchangetopleft} alt="" />
        <img src={imgref.exchangetopright} alt="" />
      </div>
      <div className="flex gap-[86px] mt-[87.86px]">
        <img src={imgref.exchangebottomleft} alt="" />
        <img src={imgref.exchangebottomright} alt="" />
      </div>
    </div>
  );
}

export default Exchange;
