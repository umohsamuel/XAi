import React from "react";
import video from "../components/video";
import { motion } from "framer-motion";

const fadeInAnimationVariants = {
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.05,
    },
  },
  hidden: {
    opacity: 0,
    x: -100,
  },
};

function Hero() {
  const handleContextMenu = (e) => {
    e.preventDefault();
  };
  return (
    <div className=" snap-start flex flex-col justify-center relative w-full h-[100vh] z-20 bg-opacity-30 backdrop-filter backdrop-blur-lg">
      <div className=" h-full w-full flex absolute justify-center items-center rounded-3xl ">
        <video
          src={video.bg1p1}
          autoPlay
          loop
          muted
          controls={false}
          onContextMenu={handleContextMenu}
          className="egbon absolute w-[90%] tablet:w-[95%] h-[95%] tablet:h-[95%] object-cover rounded-3xl border z-[1]"
        />
      </div>
      {/* Navbar used to be here  */}

      <motion.div
        variants={fadeInAnimationVariants}
        initial="hidden"
        whileInView="visible"
        className="z-30  tablet:w-[34.125rem] w-[80%] mx-auto flex flex-col tablet:mx-0 lpl-10 tablet:pl-32"
      >
        <p className="flex items-center font-medium text-sm gap-2">
          Okay let us{" "}
          <svg
            width="2"
            height="12"
            viewBox="0 0 2 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.30528 0.795898C1.30528 0.795898 1.86448 0.795898 1.86448 1.35509V11.4205C1.86448 11.4205 1.86448 11.9797 1.30528 11.9797C1.30528 11.9797 0.746094 11.9797 0.746094 11.4205V1.35509C0.746094 1.35509 0.746093 0.795898 1.30528 0.795898Z"
              fill="#3F4550"
            />
          </svg>{" "}
          <span className="flex items-center gap-1 text-transparent font-medium text-base bg-clip-text bg-gradient-to-r from-[#6557FF] to-[#F8522E]">
            Explore{" "}
            <svg
              width="10"
              height="10"
              viewBox="0 0 10 10"
              fill="#F8522E"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.80696 0.885254L4.03168 1.66053L7.09981 4.73416H0.408203V5.83385H7.09981L4.03168 8.90748L4.80696 9.68276L9.20571 5.28401L4.80696 0.885254Z"
                fill="#F8522E"
              />
            </svg>
          </span>
        </p>
        <h1 className="font-bold text-3xl tablet:text-5xl mt-5 text-transparent bg-clip-text bg-gradient-to-bl from-[#D5D5D8] to-[#EDEBF5]">
          A.I That Answers Everything About the Universe
        </h1>
        <div>
          <button className="flex justify-center items-center gap-4 bg-white font-normal text-sm text-black rounded-full px-8 py-3 mt-12">
            Explore{" "}
            <svg
              width="6"
              height="9"
              viewBox="0 0 6 9"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.44112 0.237305L0.445312 1.23312L3.67994 4.4748L0.445312 7.71649L1.44112 8.71231L5.67863 4.4748L1.44112 0.237305Z"
                fill="currentColor"
              />
            </svg>
          </button>
        </div>
      </motion.div>
    </div>
  );
}

export default Hero;
