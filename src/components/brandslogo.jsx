import { useEffect } from "react";
import ramplogo from "../assets/images/Vector.svg"
import imgref from "./imgref";

function Brandslogo() { 
  useEffect(() => {
  const scrollers = document.querySelectorAll(".scroller");

  if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    addAnimation();
  }
  function addAnimation() {
    scrollers.forEach((scroller) => {
      scroller.setAttribute("data-animated", "true");

      const scrollerInner = scroller.querySelector(".scroller__inner");
      const scrollerContent = Array.from(scrollerInner?.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        // @ts-ignore
        duplicatedItem.setAttribute("aria-hidden", "true");

        scrollerInner?.appendChild(duplicatedItem);
      });
    });
  }
}, []);
  return (
    <div className="scroller flex lmt-[10vh] overflow-x-hidden">
      <div className="scroller__inner">
        <img src={imgref.alanlogo} alt="" />
        <img src={imgref.arclogo} alt="" />
        <img src={imgref.cashapplogo} alt="" />
        <img src={imgref.decariptlogo} alt="" />
        <img src={imgref.loomlogo} alt="" />
        <img src={imgref.opensealogo} alt="" />
        <img src={imgref.pitchlogo} alt="" />
        <img src={imgref.ramplogo} alt="" />
        <img src={imgref.raycastlogo} alt="" />
        <img src={imgref.vercellogo} alt="" />
      </div>
    </div>
  );
}
export default Brandslogo;
