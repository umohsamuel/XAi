import React from 'react'
import { motion } from "framer-motion";

const fadeInAnimationVariantsFast = {
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.25,
    },
  },
  hidden: {
    opacity: 0,
    x: -100,
  },
};


function ThinExCard() {
  return (
    <motion.div
      variants={fadeInAnimationVariantsFast}
      initial="hidden"
      whileInView="visible"
      className="flex flex-col justify-between max-w-[323px] h-[358px]  py-[41.31px] px-[32.34px] rounded-[20px] border-x border-y bg-opacity-[0.13] bg-gradient-to-tr from-transparent via-[#3B3B3B] to-transparent from-[20%] via-[100%] to-[100%] "
    >
      <p className=" font-semibold text-[13px] tracking-[1.04px] text-[#9A9A9A]">
        WRAPPED ETH / BTC
      </p>
      <div className=" mt-[47.52px] mb-[87.98px] font-extrabold text-[36.9px] tracking-[-1.42px] leading-[47.3px]">
        <p>+ Ethereum.</p>
        <p>+ Bitcoin.</p>
      </div>
      <p className=" font-light text-base text-[#959595]">Coming soon</p>
    </motion.div>
  );
}

export default ThinExCard