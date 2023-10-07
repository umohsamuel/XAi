import React from "react";
import imgref from "../components/imgref";
import video from "../components/video";
import ThinExCard from "../components/exchangecardthin";
import FatExCard from "../components/fatexchangecard";

function Exchange() {
  const handleContextMenu = (e) => {
    e.preventDefault();
  };
  return (
    <div className="snap-start mx-auto flex flex-col items-center mt-[10vh] max-w-[90%] relative">
      <video
        src={video.exchangevid}
        autoPlay
        loop
        muted
        controls={false}
        onContextMenu={handleContextMenu}
        className=" absolute w-full h-[85%] top-[50%] translate-y-[-50%] z-[-1]"
        loading="lazy"
      />

      <div className="flex flex-col tablet:flex-row ltablet:justify-center items-center tablet:justify-between tablet:w-full ipad:w-[80%]  ltablet:w-[80%] gap-4 tablet:gap-0 z-10">
        {/* <img src={imgref.exchangetopleft} alt="" /> */}
        <ThinExCard />
        {/* <img src={imgref.exchangetopright} alt="" /> */}
        <FatExCard />
      </div>
      <div className="flex flex-col tablet:flex-row items-center tablet:justify-between tablet:w-full ipad:w-[80%] gap-4 tablet:gap-0 mt-4 tablet:mt-[7.5vh] lmt-[87.86px]">
        {/* <img src={imgref.exchangebottomleft} alt="" /> */}
        <FatExCard />
        {/* <img src={imgref.exchangebottomright} alt="" /> */}
        <ThinExCard />
      </div>
    </div>
  );
}

export default Exchange;
