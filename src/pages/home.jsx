import React from "react";
import video from "../components/video";

function Home() {
  return (
    <div className="w-full h-[100vh]">
      <div className="  flex flex-col items-center relative w-full h-full">
        <div className=" h-full w-full flex absolute justify-center items-center rounded-3xl">
          <video
            src={video.bg1p1}
            autoPlay
            loop
            muted
            className="w-[95%] h-[95%] object-cover rounded-3xl border z-[1]"
          />
        </div>
        <nav className="z-20 flex justify-between items-center w-[90%] mt-[3.5%] h-14 border rounded-xl pr-14 pl-9 ">
          <svg
            width="35"
            height="32"
            viewBox="0 0 35 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M21.9006 0C20.9307 0.00037588 20.0006 0.385857 19.3147 1.07172C18.6288 1.75759 18.2433 2.68771 18.243 3.65767C18.2436 4.32081 18.4245 4.9713 18.7662 5.53961C19.108 6.10791 19.5977 6.57267 20.1831 6.88419L18.1664 10.7106C17.6731 10.5501 17.1577 10.4678 16.6389 10.4667C15.3205 10.4667 14.0562 10.9904 13.1239 11.9227C12.1917 12.8549 11.668 14.1193 11.668 15.4377C11.6702 15.7932 11.7107 16.1474 11.7885 16.4943L7.77485 17.9636C7.39592 17.3604 6.87023 16.8632 6.24693 16.5185C5.62363 16.1737 4.92308 15.9926 4.21079 15.9922C3.09438 15.9926 2.02378 16.4361 1.23423 17.2254C0.444674 18.0147 0.000751728 19.0852 0 20.2016C0 21.3187 0.443785 22.3901 1.23373 23.18C2.02367 23.97 3.09506 24.4138 4.21221 24.4138C5.32911 24.4134 6.40013 23.9694 7.18977 23.1795C7.9794 22.3896 8.42299 21.3185 8.42299 20.2016C8.42134 19.899 8.38711 19.5976 8.32088 19.3024L12.1729 17.6104C12.5805 18.4485 13.2155 19.1551 14.0054 19.6497C14.7953 20.1442 15.7084 20.4067 16.6403 20.4072C17.7323 20.4059 18.7934 20.045 19.6598 19.3804L22.8877 22.4537C22.1958 23.4678 21.8256 24.6668 21.8255 25.8944C21.8255 26.6963 21.9834 27.4904 22.2904 28.2313C22.5973 28.9721 23.0471 29.6452 23.6142 30.2122C24.1814 30.7792 24.8546 31.2289 25.5955 31.5356C26.3364 31.8424 27.1305 32.0002 27.9325 32C29.5515 32 31.1043 31.3569 32.2492 30.2122C33.3942 29.0675 34.0377 27.5149 34.038 25.8958C34.038 24.2765 33.3948 22.7236 32.2497 21.5786C31.1047 20.4335 29.5518 19.7903 27.9325 19.7903C26.5277 19.7913 25.1662 20.2766 24.0776 21.1646L20.6398 18.3791C21.2682 17.527 21.608 16.4964 21.6099 15.4377C21.61 14.6307 21.4137 13.8358 21.0379 13.1217C20.662 12.4076 20.118 11.7957 19.4527 11.3389L21.1603 7.23875C21.4038 7.28938 21.6519 7.31504 21.9006 7.31534C22.8711 7.31534 23.8018 6.92983 24.488 6.24362C25.1742 5.55741 25.5597 4.6267 25.5597 3.65625C25.559 2.68629 25.1731 1.75632 24.487 1.07072C23.8009 0.38512 22.8706 -2.91436e-07 21.9006 0Z"
              fill="white"
            />
          </svg>

          <ul className="flex gap-8">
            <li>Resources</li>
            <li>Login</li>
            <li className="flex items-center gap-4">
              Start{" "}
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
        <div className="z-30  w-[34.125rem] absolute top-44 left-32">
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
          <h1 className="font-bold text-5xl mt-5">
            A.I That Answers Everything About the Universe
          </h1>
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
      </div>
    </div>
  );
}

export default Home;
