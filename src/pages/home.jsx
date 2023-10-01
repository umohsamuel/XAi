import React from "react";
import Hero from "../screens/hero";
import Navbar from "../components/navbar";
import Constilations from "../screens/constilations";

// import ThreedModel from "../components/threedmodel";
import Chatbox from "../screens/chatbox";
import CoInVad from "../screens/coinvad";
import Unlike from "../screens/unlike";
import Exchange from "../screens/exchange";
import Community from "../screens/community";
import Future from "../screens/future";
import Footer from "../screens/footer";
import ThinExCard from "../components/exchangecardthin";
import video from "../components/video";

function Home() {
  const handleContextMenu = (e) => {
    e.preventDefault();
  };
  return (
    <div className="w-full relative snap-mandatory snap-y scroll-smooth tablet:overflow-auto  overflow-hidden">
      <Navbar />

      <Hero />

      <Constilations />

      <Chatbox />
      {/* <div className=" h-[25vh] bg-gradient-to-b from-transparent to-[#05080A]"></div> */}

      <CoInVad />

      <Unlike />

      <Exchange />

      <Community />

      <div className="relative my-[25vh] h-[100vh]">
        {/* <div className="absolute h-[20vh] top-0 translate-y-[-50%] w-full bg-gradient-to-b from-[#000000] to-transparent from-70% z-50 blur-sm border border-transparent"></div>
        <video
          src={video.unstablepage}
          autoPlay
          loop
          muted
          controls={false}
          onContextMenu={handleContextMenu}
          className=" absolute w-full h-[100vh] lw-[100vw] object-cover  z-[-1]"
          loading="lazy"
        />
        <div className="absolute h-[20vh] bottom-0 translate-y-[50%] w-full bg-gradient-to-t from-[#000000] to-transparent from-70% z-50 blur-sm border border-transparent"></div> */}
      </div>

      <Future />

      <Footer />
      {/* <ThreedModel /> */}
      {/* <video
        src={video.bg1p1}
        autoPlay
        loop
        muted
        controls={false}
        // onContextMenu={handleContextMenu}
        className="egbon absolute w-[90%] tablet:w-[95%] h-[95%] object-cover rounded-3xl border z-[1]"
      /> */}
    </div>
  );
}

export default Home;
