import React from "react";
import imgref from "../components/imgref";
// import { motion } from "framer-motion";

const fadeInAnimationVariantsFast = {
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.25 ,
    },
  },
  hidden: {
    opacity: 0,
    x: -100,
  },
};

const fadeInAnimationVariantsSlow = {
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.5 ,
    },
  },
  hidden: {
    opacity: 0,
    y: 100,
  },
};



function Unlike() {
  return (
    <div className="snap-start mt-[10vh] flex flex-col items-center max-w-[95%] mx-auto">
      <h1 className=" text-center max-w-[445px] font-medium text-[40px] tablet:text-[51px] tracking-[-0.46px] tablet:tracking-[-1.12px] tablet:leading-[56px] leading-[40px]">
        Unlike any tool you’ve used before
      </h1>
      <p className=" mt-[27px] max-w-[605px] px-[5%] tablet:px-0 text-center font-normal text-xl tablet:text-[22px] tablet:leading-[28.6px] text-[#B4BCD0]">
        Designed to the last pixel and engineered with unforgiving precision,
        Linear combines UI elegance with world-class performance.
      </p>
      <div className=" mx-auto mt-[138px] max-w-[100%] w-[90%]">
        <div className="flex flex-col tablet:flex-row justify-between gap-4 ">
          <img
            // variants={fadeInAnimationVariantsFast}
            // initial="hidden"
            // whileInView="visible"
            src={imgref.unlikelefttop}
            alt=""
            className=" max-h-[90vh] tablet:w-[70%]"
            loading="lazy"
          />
          <img
            // variants={fadeInAnimationVariantsSlow}
            // initial="hidden"
            // whileInView="visible"
            src={imgref.unlikerighttop}
            alt=""
            className=" max-h-[90vh] mt-[10vh] tablet:mt-0 tablet:w-[30%]"
            loading="lazy"
          />
        </div>
        <div className="flex flex-col tablet:flex-row justify-between gap-4 mt-4 tablet:mt-[32.13px] ">
          <img
            // variants={fadeInAnimationVariantsFast}
            // initial="hidden"
            // whileInView="visible"
            src={imgref.unlikebottomleft}
            alt=""
            className=" max-h-[90vh] mt-[10vh] tablet:mt-0 tablet:w-[30%]"
            loading="lazy"
          />
          <img
            // variants={fadeInAnimationVariantsSlow}
            // initial="hidden"
            // whileInView="visible"
            src={imgref.unlikebottomright}
            alt=""
            className=" max-h-[90vh] mt-[10vh] tablet:mt-0 tablet:w-[70%]"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
}

export default Unlike;
