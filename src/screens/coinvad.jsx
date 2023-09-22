import React from "react";
import imgref from "../components/imgref";

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
  return (
    <div className=" h-[100vh] mt-[25vh] w-[80%] flex items-center justify-between mx-auto relative">
      <img
        src={imgref.greensource}
        className=" absolute top-[-29vh] left-[-4vw] w-full h-full z-[-1]"
      />
      {CoInVadArr.map((things, index) => (
        <div key={index} className="max-w-[271px]">
          <p className=" font-semibold text-[13px] text-[#808181]">
            {things.title}
          </p>
          <div className=" mt-[62.33px]">
            <h1 className=" font-bold text-[27.43px] tracking-[-0.73px] flex gap-4">
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
        </div>
      ))}
    </div>
  );
}

export default CoInVad;
