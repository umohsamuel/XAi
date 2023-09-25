import React from "react";
import imgref from "./imgref";

function Navbar() {
  return (
    <nav className="z-[99999] absolute flex justify-between items-center w-[90%] mt-[3.5%] h-14 border rounded-xl pr-14 pl-9 left-[50%] translate-x-[-50%] backdrop-blur-[2px] top-[2.5%] tablet:top-0">
      <img src={imgref.xailogo} alt="" />

      <ul className="flex gap-8 text-[#6A6B6D]">
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
    </nav>
  );
}

export default Navbar;
