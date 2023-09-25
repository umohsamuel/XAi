import React from "react";
import Hero from "../screens/hero";
import Navbar from "../components/navbar";
import Constilations from "../screens/constilations";

import ThreedModel from "../components/threedmodel";
import Chatbox from "../screens/chatbox";
import CoInVad from "../screens/coinvad";
import Unlike from "../screens/unlike";
import Exchange from "../screens/exchange";
import Community from "../screens/community";
import Future from "../screens/future";
import Footer from "../screens/footer";
import ThinExCard from "../components/exchangecardthin";

function Home() {
  return (
    <div className="w-full relative snap-mandatory snap-y scroll-smooth">
      <Navbar />

      <Hero />

      <Constilations />

      <Chatbox />
      {/* <div className=" h-[25vh] bg-gradient-to-b from-transparent to-[#05080A]"></div> */}

      <CoInVad />

      <Unlike />

      <Exchange />

      <Community />

      <Future />

      <Footer />
      {/* <ThreedModel /> */}
    </div>
  );
}

export default Home;
