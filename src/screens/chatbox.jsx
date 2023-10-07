import React, { useRef } from "react";
import imgref from "../components/imgref";
import { motion } from "framer-motion";


const fadeInAnimationVariants = {
  visible: { opacity: 1, scale: 1.2, transition: { duration: 0.02} },
  hidden: { opacity: 0, scale: 1 },
};

function Chatbox() {
  // const targetRef = useRef(null)
  // const {scrollYProgress} = useScroll({
  //   target: targetRef,
  //   offset: ["start end", "end start"]
  // })

  // const position = useTransform(scrollYProgress, (pos) => {
  //   return pos >= 1 ? "sticky" : "absolute"
  // })
  // const top = useTransform(scrollYProgress, (pos) => {
  //   return pos >= 1 ? "20%" : "0"
  // })

  return (
    <div className=" snap-start mt-[10vh] min-h-[100vh] w-full mx-auto flex flex-col content-between tablet:gap-14 items-center lmb-[10vh]">
      <p className=" text-[40px] tablet:text-[51px] font-bold tracking-[-1.12px]">
        Chatbot that
      </p>
      <p className=" font-normal text-center tablet:max-w-[605px] w-full max-w-[325px] px-[5%] tablet:leading-7 text-xl tablet:text-[22px]">
        Designed to the last pixel and engineered with unforgiving precision,
        Linear combines UI elegance with world-class performance.
      </p>
      <div className=" mt-12 min-h-[50vh] tablet:h-[150vh] mx-auto w-full relative flex justify-center">
        <motion.img
          variants={fadeInAnimationVariants}
          initial="hidden"
          whileInView="visible"
          src={imgref.ArtificiumChatbox}
          alt=""
          className=" hidden tablet:block z-30 mx-auto w-[80%] h-[85vh]"
          loading="lazy"
        />
        <motion.img
          variants={fadeInAnimationVariants}
          initial="hidden"
          whileInView="visible"
          src={imgref.ArtificiumChatbox}
          alt=""
          className=" tablet:hidden z-30 mx-auto w-[77.5%] object-contain"
          loading="lazy"
        />
        <img
          src={imgref.mediacb}
          alt=""
          className=" hidden mx-auto tablet:flex h-full absolute top-[25%] translate-y-[-50%]"
          loading="lazy"
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
