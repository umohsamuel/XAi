import React from "react";
import imgref from "../components/imgref";
import { motion } from "framer-motion";

const fadeInAnimationVariantsFast = {
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.25,
    },
  },
  hidden: {
    opacity: 0,
    y: 100,
  },
};

const fadeInAnimationVariantsSlow = {
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.5,
    },
  },
  hidden: {
    opacity: 0,
    x: 100,
  },
};

const fadeInAnimationVariantslist = {
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.2 * index,
    },
  }),
  hidden: {
    opacity: 0,
    y: 100,
  },
};

function Community() {
  const CommunityArr = [
    {
      logo: imgref.communitychatlogo,
      heading: "Community Chat",
      description:
        "Ask general questions and chat with the worldwide community on Telegram.",
    },
    {
      logo: imgref.twitterlogo,
      heading: "Twitter",
      description:
        "Follow @cosmos to get the latest news and updates from across the ecosystem.",
    },
    {
      logo: imgref.developerchatlogo,
      heading: "Developer Chat",
      description:
        "Have technical questions about Cosmos tools? Ask a developer on the Community Discord.",
    },
    {
      logo: imgref.cosmosforumlogo,
      heading: "Cosmos Forum",
      description:
        "Thinking about becoming a validator or interested in network matters? Join the discussion.",
    },
  ];

  return (
    <div className="snap-start mt-[50vh] min-h-[100vh] block tablet:flex justify-between mx-auto w-[80%] max-w-[100vw] lmax-w-[1043px]">
      <motion.div
        variants={fadeInAnimationVariantsFast}
        initial="hidden"
        whileInView="visible"
        className=" max-w-[411px] flex flex-col gap-[34.33px]"
      >
        <h1 className=" text-[44.56px] tablet:text-[65.34px] font-extrabold tracking-[-3.7px] leading-[54px] tablet:leading-[79.1px]">
          Meet the worldwide community.
        </h1>
        <p className="text-[#D1D1D2] text-sm tablet:text-[21.33px] tracking-[-0.16px] leading-[23.2px] tablet:leading-[34px] font-extralight">
          Join a fast-growing community of developers and innovators connected
          all over the world, building the new era of the internet.
        </p>

        <h1 className=" font-semibold text-xs tablet:text-[20.33px] tracking-[-0.36px] leading-[27.4px] flex gap-4">
          Community
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
      </motion.div>
      <motion.div
        variants={fadeInAnimationVariantsSlow}
        initial="hidden"
        whileInView="visible"
        className=" mt-[25vh] tablet:mt-0 max-w-[447.67px] flex  flex-col gap-16"
      >
        {CommunityArr.map((things, index) => (
          <motion.div
            variants={fadeInAnimationVariantslist}
            initial="hidden"
            whileInView="visible"
            custom={index}
            key={index}
            className=" flex  gap-[44.63px]"
          >
            <div>
              <img
                src={things.logo}
                alt=""
                className=" min-h-[32px] min-w-[32px]"
              />
            </div>

            <div>
              <h1 className=" font-bold text-[20.33px] tracking-[-0.63px] leading-[27.4px] flex gap-[12.62px]">
                {things.heading}
                <svg
                  width="10"
                  height="10"
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

              <p className=" mt-[9px] font-light text-[#808081] text-base">
                {things.description}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default Community;
