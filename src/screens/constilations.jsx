import React from "react";
import video from "../components/video";
import Brandslogo from "../components/brandslogo";
import { motion } from "framer-motion";

const fadeInAnimationVariants = {
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05,
    },
  },
  hidden: {
    opacity: 0,
    y: 100,
  },
};
const index1 = 1;
const index2 = 2;
const fadeInAnimationVariants2 = {
  visible: (indo) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.2 * indo,
    },
  }),
  hidden: {
    opacity: 0,
    x: -100,
  },
};

function Constilations() {
  const handleContextMenu = (e) => {
    e.preventDefault();
  };
  return (
    <div className="snap-start relative h-full w-full snap-y">
      {/* logos  */}
      <div className=" mt-32 flex flex-col min-h-[200vh] relative snap-start">
        <video
          src={video.placeholder}
          autoPlay
          loop
          muted
          controls={false}
          onContextMenu={handleContextMenu}
          className="myoga absolute w-full h-full  rotate-180 object-cover blur-sm"
        />
        <img
          src={video.boy}
          autoPlay
          loop
          muted
          className="w-full absolute bottom-0 h-32 blur-sm"
        />

        {/* content of section 2  */}
        <div className="z-30 h-full -top-3 flex flex-col gap-[25vh]">
          <Brandslogo />

          <motion.div
            variants={fadeInAnimationVariants}
            initial="hidden"
            whileInView="visible"
            className="w-full flex flex-col justify-center items-center text-center  gap-6 "
          >
            <h1 className="font-black text-4xl tablet:text-7xl max-w-[60%] tablet:max-w-[32.3125rem] text-transparent bg-clip-text bg-gradient-to-r from-[#F5D1FF] to-[#ffffff]  ">
              The Universe Unveiled.
            </h1>
            <p className="max-w-[30.6rem] text-[#FFD1D1] text-base font-extralight">
              Discover the Hidden Wonders of the Cosmos - Dive into the
              Universe's Greatest Mysteries with Our A.I
            </p>
          </motion.div>

          <div className=" w-full h-full flex flex-col justify-end items-center">
            <div>
              <p className=" font-semibold text-[10.79px] text-[#818B95]">
                COMMUNITY-OWNED AND OPERATED
              </p>
              <div className=" tablet:flex gap-24">
                <motion.p
                  variants={fadeInAnimationVariants2}
                  initial="hidden"
                  whileInView="visible"
                  custom={index1}
                  className=" tracking-[-0.166875rem] max-w-[486px] font-extrabold text-[47.74px]"
                >
                  Enter a new universe of connected services.
                </motion.p>
                <motion.p
                  variants={fadeInAnimationVariants2}
                  initial="hidden"
                  whileInView="visible"
                  custom={index2}
                  className=" font-extrabold text-[62.43px] tracking-[-3.55px]"
                >
                  246+
                </motion.p>
              </div>
            </div>
          </div>
          <button className="w-[80%] mx-auto flex gap-4  items-center ">
            <span className="pb-1 font-semibold text-[20.33px]">
              Powerful features{" "}
            </span>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.32641 15.1154L6.76619 13.5703L11.4393 8.89726H0.0860438V6.64024H11.4393L6.76619 1.97474L8.32641 0.422102L15.6731 7.76875L8.32641 15.1154Z"
                fill="white"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Constilations;
