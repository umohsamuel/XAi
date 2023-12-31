import React, { useEffect, useState } from "react";
import imgref from "../components/imgref";
import { motion } from "framer-motion";

const fadeInAnimationVariants = {
  visible: (index) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.1 * index,
    },
  }),
  hidden: {
    opacity: 0,
    x: 100,
  },
};

const CoInVadArr = [
  {
    title: "Connect",
    label: "Connect chains",
    description:
      "Grow the economy of your chain by connecting to Cosmos Hub services using IBC protocol.",
    logo: imgref.connectlogo,
  },
  {
    title: "Integrate",
    label: "Provide services",
    description:
      "Get support to bring users to the Interchain by providing services such as exchanges, wallets, and more.",
    logo: imgref.integratelogo,
  },
  {
    title: "Validate",
    label: "Become a validator",
    description:
      "Join the ranks of trusted and decentralized validator operators in the network and help secure Cosmos Hub.",
    logo: imgref.validatelogo,
  },
];

function CoInVad() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event) => {
    const { clientX, clientY } = event;
    setPosition({ x: clientX, y: clientY });
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="snap-center min-h-[100vh] mt-[10vh] ltablet:mt-[25vh] flex-col flex tablet:flex-row items-center justify-between mx-auto relative bghere overflow-hidden ">
      <div
        id="blob"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          height: "62.5%",
          width: "62.5%",
        }}
      ></div>
      <div id="blur" className="w-full h-full"></div>
      {/* <div className="absolute h-[20vh] top-0 translate-y-[-50%] w-full bg-gradient-to-b from-[#000000] to-transparent from-70% z-50 blur-sm border border-transparent"></div> */}
      <div className="z-[99999] w-[80%] tablet:w-[90%] min-h-[100vh] flex-col flex tablet:flex-row items-center justify-between mx-auto py-8 tablet:py-0">
        {CoInVadArr.map((things, index) => (
          <motion.div
            variants={fadeInAnimationVariants}
            initial="hidden"
            whileInView="visible"
            custom={index}
            key={index}
            className={` ${
              CoInVadArr.length === index ? "" : "mb-14"
            }  max-w-[271px] tablet:h-fit tablet:mb-0`}
          >
            <p className=" font-semibold text-[13px] text-[#808181]">
              {things.title}
            </p>
            <div className="  tablet:mt-[62.33px] mt-[31px]">
              <h1 className=" font-bold text-[27.43px] tracking-[-0.73px] flex justify-between tablet:justify-normal gap-4">
                {things.label}
                <svg
                  width="13"
                  height="13"
                  viewBox="0 0 13 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.28863 12.3882L0.478813 10.5784L8.11941 2.93022H2.3795L2.39464 0.461607H12.3978V10.4724H9.91408L9.92922 4.74004L2.28863 12.3882Z"
                    fill="white"
                  />
                </svg>
              </h1>
              <p className=" mt-4 font-light text-base">{things.description}</p>
              <img src={things.logo} alt="" className=" mt-16" loading="lazy" />
            </div>
          </motion.div>
        ))}
      </div>
      {/* <div className="absolute h-[20vh] bottom-0 translate-y-[50%] w-full bg-gradient-to-t from-[#000000] to-transparent from-70% z-50 blur-sm border border-transparent"></div> */}
    </div>
  );
}

export default CoInVad;
