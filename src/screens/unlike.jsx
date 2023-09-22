import React from "react";
import imgref from "../components/imgref";

function Unlike() {
  return (
    <div className=" flex flex-col items-center">
      <h1 className=" text-center max-w-[445px] font-medium text-[51px] tracking-[-1.12px] leading-[56px]">
        Unlike any tool you’ve used before
      </h1>
      <p className=" mt-[27px] max-w-[605px] text-center font-normal text-[22px] leading-[28.6px] text-[#B4BCD0]">
        Designed to the last pixel and engineered with unforgiving precision,
        Linear combines UI elegance with world-class performance.
      </p>
      <div className=" mt-[138px] max-w-[1043px]">
        <div className="flex gap-[22.04px]">
          <img src={imgref.unlikelefttop} alt="" />
          <img src={imgref.unlikerighttop} alt="" />
        </div>
        <div className="flex gap-[22.04px] mt-[32.13px]">
          <img src={imgref.unlikebottomleft} alt="" />
          <img src={imgref.unlikebottomright} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Unlike;
