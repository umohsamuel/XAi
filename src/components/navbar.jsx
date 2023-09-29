import React, { useState } from "react";
import imgref from "./imgref";

function Navbar() {

  
  const [openModal, setOpenModal] = useState(false);
  return (
    <nav className="z-[99999] absolute flex justify-between items-center w-[80%] tablet:w-[90%] mt-[3.5%] h-14 border-[0.5px] border-[#807DA9] rounded-xl px-[1rem] tablet:pr-14 tablet:pl-9 left-[50%] translate-x-[-50%] backdrop-blur-[2px] top-[0.25%] tablet:top-0">
      <img src={imgref.xailogo} alt="" />

      <ul className=" hidden tablet:flex gap-8 text-[#6A6B6D]">
        <li>Resources</li>
        <li>Login</li>
        <li className="flex items-center gap-4 text-white">
          Start Now{" "}
          <svg
            width="6"
            height="9"
            viewBox="0 0 6 9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.44112 0.237305L0.445312 1.23312L3.67994 4.4748L0.445312 7.71649L1.44112 8.71231L5.67863 4.4748L1.44112 0.237305Z"
              fill="#D2D4D7"
            />
          </svg>
        </li>
      </ul>
      <button
        onClick={() => setOpenModal(!openModal)}
        className="tablet:hidden"
      >
        <img
          src={openModal ? imgref.cancelburger : imgref.menuburger}
          alt=""
          className={`${openModal ? "rotate" : ""}`}
        />
      </button>

      {/* Nav modal  */}
      <div
        className={`${
          openModal ? "block" : "hidden"
        }  w-[91vw] rounded-2xl h-[80vh] fixed left-[50%] translate-x-[-50%] top-[125%] bg-[#050624] lbg-gradient-to-tr from-[#050624] to-transparent flex flex-col items-center gap-8 backdrop-blur-[2px] border-[0.5px] border-[#807DA9]`}
      >
        <ul className=" w-[85%] pt-10 flex flex-col gap-10 ">
          {/* <div className=" flex justify-center" onClick={() => setOpenModal(!openModal)}>
          <img src={imgref.cancelburger} alt="" className={`${!openModal ? "rotate" : ""}`} />
        </div> */}
          <li>Resources</li>
          <li>Login</li>
          <li className="flex items-center gap-4 text-white">
            Start Now{" "}
            <svg
              width="6"
              height="9"
              viewBox="0 0 6 9"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.44112 0.237305L0.445312 1.23312L3.67994 4.4748L0.445312 7.71649L1.44112 8.71231L5.67863 4.4748L1.44112 0.237305Z"
                fill="#D2D4D7"
              />
            </svg>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
