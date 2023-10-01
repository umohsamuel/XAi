import React from "react";
import imgref from "../components/imgref";
import Footerlogo from "../components/footerlogos";

function Footer() {
  return (
    <footer className="snap-start w-[95%] h-full mx-auto mt-[25vh] mb-[3px] p-[1.1px] bg-gradient-to-tr from-[#FFFFFF]  to-[#353436] rounded-[37.39px] ">
      <div className=" min-h-fit lpt-[68px] tablet:py-[26.167px] px-[10%] tablet:px-[88px] bg-gradient-to-tr from-[#0D0C0F] to-[#222124] rounded-[37.39px] relative flex flex-col gap-[74px] py-14">
        <img
          src={imgref.footervector}
          alt=""
          className="absolute right-0 top-0 w-[178px] tablet:w-fit"
          // loading="lazy"
        />

        <div className=" flex w-[70%] tablet:w-[40%] justify-between z-[999]">
          <div>
            <h3 className=" font-medium text-[8px] tablet:text-[10px] text-[#5E5E61]">
              COMPANY
            </h3>
            <ul className=" mt-4 text-[10px] tablet:text-[13px] font-normal flex flex-col gap-[7.5px] text-[#A9AAAD]">
              <li>About</li>
              <li>Customers</li>
              <li>Blog</li>
              <li>Deploy</li>
              <li>Newsroom</li>
            </ul>
          </div>

          <div>
            <h3 className=" font-medium text-[8px] tablet:text-[10px] text-[#5E5E61]">
              RESOURCES
            </h3>
            <ul className=" mt-4 text-[10px] tablet:text-[13px] font-normal flex flex-col gap-[7.5px] text-[#A9AAAD]">
              <li>FAQs</li>
              <li>Careers</li>
              <li>Partnerships</li>
              <li>Contact Us</li>
              <li>Changelog</li>
              <li>Sign up for The Recap</li>
            </ul>
          </div>
        </div>

        <hr className="h-px bg-[#2B2B2D] border-0"></hr>

        <div>
          <div className=" tablet:flex gap-4 justify-between">
            <img
              src={imgref.cosmoslogo}
              alt=""
              className=" border-r pr-6 border-[#2A292B] mb-4 tablet:mb-0"
              loading="lazy"
            />
            <Footerlogo />
          </div>

          <div className=" mt-[59.44px]">
            <p className=" font-light text-[13px] tracking-[0.05px] text-[#888789]">
              Cosmos is a registered trademark of the{" "}
              <span className=" text-white">Interchain Foundation.</span>
            </p>
            <p className=" pt-[22.99px] font-light text-[13px] text-[#888789] tracking-[0.05px] leading-[21.1px]">
              This website is maintained by the Interchain Foundation (ICF) on
              behalf of the decentralized community. The contents and opinions
              of this website do not necessarily reflect those of the ICF. This
              website links to projects, dApps and cryptocurrency exchanges as a
              service to the public. The ICF does not warrant that the
              information provided by these websites is correct, complete, and
              up-to-date. The ICF is not responsible for the content of those
              websites and expressly rejects any liability for damages of any
              kind resulting from the use, reference to, or reliance on any
              information contained within these websites. If you spot an error
              or issue on this website, please email
              marketing-[at]-interchain.io
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
