import React from "react";
import video from "../components/video";
import Hero from "../screens/hero";
import Navbar from "../components/navbar";
import Constilations from "../screens/constilations";

import ThreedModel from "../components/threedmodel";
import Chatbox from "../screens/chatbox";
import CoInVad from "../screens/coinvad";
import Unlike from "../screens/unlike";
import Exchange from "../screens/exchange";

function Home() {
  return (
    <div className="w-full relative ">
      <Navbar />

      <Hero />

      <Constilations />

      <Chatbox />

      <CoInVad />

      <Unlike />

      <Exchange />

      {/* <ThreedModel /> */}
    </div>
  );
}

export default Home;
