import React from "react";
import Hero from "../screens/hero";
import Navbar from "../components/navbar";
import Constilations from "../screens/constilations";
import Chatbox from "../screens/chatbox";
import CoInVad from "../screens/coinvad";
import Unlike from "../screens/unlike";
import Exchange from "../screens/exchange";
import Community from "../screens/community";
import Future from "../screens/future";
import Footer from "../screens/footer";

function Home() {
  return (
    <div className="w-full h-full relative snap-mandatory snap-y scroll-smooth">
      <Navbar />
      <Hero />
      <Constilations />
      <Chatbox />
      <CoInVad />
      <Unlike />
      <Exchange />
      <Community />
      <Future />
      <Footer />
    </div>
  );
}

export default Home;
