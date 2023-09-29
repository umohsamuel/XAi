import React, { useEffect, useState } from "react";
import imgref from "../components/imgref";
import { motion } from "framer-motion";

const fadeInAnimationVariants = {
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.5 * index,
    },
  }),
  hidden: {
    opacity: 0,
    y: 100,
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

// const blob = document.getElementById("blob");

// window.onpointermove = (event) => {
//   const { clientX, clientY } = event;

//   blob.animate(
//     {
//       left: `${clientX}px`,
//       top: `${clientY}px`,
//     },
//     { duration: 1000, fill: "forwards" }
//   );
// };

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
    <div className="snap-center min-h-[100vh] mt-[50vh] ltablet:mt-[25vh]  flex-col flex tablet:flex-row items-center justify-between mx-auto relative bghere overflow-hidden ">
      <div
        id="blob"
        style={{ left: `${position.x}px`, top: `${position.y}px` }}
      ></div>
      <div id="blur"></div>

      <div className="absolute h-[20vh] top-0 translate-y-[-50%] w-full bg-gradient-to-b from-[#000000] to-transparent from-70% z-50 blur-sm border border-transparent"></div>
      {/* <img
        src={imgref.greensource}
        className=" absolute top-[-29vh] left-[-4vw] w-[100vw] h-[100vh] z-[-1]"
      /> */}
      <div className="z-[99999] w-[80%] min-h-[100vh] flex-col flex tablet:flex-row items-center justify-between mx-auto">
        {CoInVadArr.map((things, index) => (
          <motion.div
            variants={fadeInAnimationVariants}
            initial="hidden"
            whileInView="visible"
            custom={index}
            key={index}
            className="max-w-[271px] h-[100vh] tablet:h-fit mb-12 tablet:mb-0"
          >
            <p className=" font-semibold text-[13px] text-[#808181]">
              {things.title}
            </p>
            <div className=" mt-[62.33px]">
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
              <img src={things.logo} alt="" className=" mt-16" />
            </div>
          </motion.div>
        ))}
      </div>
      <div className="absolute h-[20vh] bottom-0 translate-y-[50%] w-full bg-gradient-to-t from-[#000000] to-transparent from-70% z-50 blur-sm border border-transparent"></div>
    </div>
  );
}

export default CoInVad;
