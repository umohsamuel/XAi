import React from "react";
import video from "../components/video";
import imgref from "../components/imgref";

function Future() {
  return (
    <div className="snap-start mt-[25vh]">
      <img
        autoPlay
        loop
        muted
        controls={false}
        src={video.postcommunity}
        className="z-30 w-[80%] h-[100vh] mx-auto object-cover rounded-full"
      />

      <div className=" mt-[50vh] w-full flex flex-col items-center gap-[70px]">
        <img src={imgref.xailogo} alt="" className=" h-[69px] w-[73.39px]" />
        <h1 className=" font-medium text-[51px] tracking-[-0.57px] leading-[51px] text-transparent bg-clip-text bg-gradient-to-br from-[#F6F6F6] via-[#A4A4A5] to-[#F3F3F3] text-center">
          <p>Built for the future.</p>
          <p>Available today.</p>
        </h1>

        <div className="flex items-center text-base font-medium leading-[24.5px] w-full max-w-[331.05px] justify-between">
          <button className=" bg-gradient-to-r from-[#455EB5] from-50% via-[#6040D2] to-[#673FD7] px-6 py-3 rounded-full whitespace-nowrap">
            Sign up for free
          </button>
          <button className="flex items-center px-6 py-3 rounded-full gap-2 bg-[#1A191C] border border-[#252427] whitespace-nowrap">
            <svg
              width="17"
              height="17"
              viewBox="0 0 17 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.18333 2.26001H2.49536V7.94774H8.18333V2.26001Z"
                fill="#F3F4F7"
              />
              <path
                d="M14.4958 2.26001H8.80786V7.94773H14.4958V2.26001Z"
                fill="#F3F4F7"
              />
              <path
                d="M8.18333 8.57227H2.49536V14.26H8.18333V8.57227Z"
                fill="#F3F4F7"
              />
              <path
                d="M14.4958 8.57251H8.80786V14.2602H14.4958V8.57251Z"
                fill="#F3F4F7"
              />
            </svg>
            <span className="leading-[24.5px] pb-[2px]"> Download</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Future;
