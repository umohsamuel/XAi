import React, { useRef } from "react";
import imgref from "../components/imgref";
import { useScroll, useTransform, motion } from "framer-motion";
import clipboardgroupkini from "../assets/images/clipboardgroupkini.svg"


const fadeInAnimationVariants = {
  visible: { opacity: 1, scale: 1.25, transition: { duration: 0.45} },
  hidden: { opacity: 0, scale: 1 },
};

function Chatbox() {

  const targetRef = useRef(null)
  const {scrollYProgress} = useScroll({
    target: targetRef,
    offset: ["start end", "end start"]
  })

  const position = useTransform(scrollYProgress, (pos) => {
    return pos >= 1 ? "sticky" : "absolute"
  })
  const top = useTransform(scrollYProgress, (pos) => {
    return pos >= 1 ? "20%" : "0"
  })

  return (
    <div className="snap-start mt-32 w-full mx-auto flex flex-col gap-14 items-center mb-[25vh]">
      <p className=" text-[51px] font-medium tracking-[-1.12px]">
        Chatbot that
      </p>
      <p className=" font-normal text-center max-w-[605px] text-[22px]">
        Designed to the last pixel and engineered with unforgiving precision,
        Linear combines UI elegance with world-class performance.
      </p>
      <div className=" bgforthis  h-[150vh] origin-center  mx-auto w-full relative flex justify-center">
        <motion.img
          variants={fadeInAnimationVariants}
          initial="hidden"
          whileInView="visible"
          src={imgref.ArtificiumChatbox}
          alt=""
          className=" mt-12 z-30 mx-auto lw-[100%] tablet: w-[80%] h-[85vh] sticky top-[15%] "
        />
        {/* <motion.img
          style={{ position, top }}
          src={imgref.clippathchatbox}
          alt=""
          className=" sticky mx-auto mt-[68px] z-[-1] top-[20%] left-0 max-w-[100%] h-[100vh] "
        /> */}
        {/* <motion.img
          variants={fadeInAnimationVariants}
          initial="hidden"
          whileInView="visible"
          src={clipboardgroupkini}
          alt=""
          className=" mt-12 z-30 mx-auto w-[100%] object-cover tablet: lw-[80%] h-[85vh] sticky top-[20%]"
        /> */}
      </div>
    </div>
  );
}

export default Chatbox;
