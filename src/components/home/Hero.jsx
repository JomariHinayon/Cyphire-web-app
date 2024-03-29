import React from "react";
import MainImage from "../../assets/hero-main.png";
import OrangeCircle from "../../assets/circle-orange.png";
// import wholeCircle from '../assets/orange-circle-whole.png'
import "../../style/App.css";

const Hero = () => {
  return (
    <section id="hero-section">
      <div className="flex flex-col h-[85vh] mb-10">
        {/* TOP SECTION */}
        <div className="top-container text-center mb-5 pl-48 relative">
          {/* <h1 className="text-md font-[500]">FREELANCE PROGRAMMING SERVICES</h1> */}
          <img
            src={OrangeCircle}
            className="absolute top-[0.5rem] left-[13rem] z-10"
            width="50"
            alt="orange"
          />
          <img
            src={OrangeCircle}
            className="absolute top-[0.5rem] right-[13rem] z-10"
            width="45"
            alt="orange"
          />
          <img
            src={OrangeCircle}
            className="absolute top-[-2rem] right-[16rem] z-10"
            width="30"
            alt="orange"
          />
        </div>
        {/* CENTER SECTION */}
        <div className="center-container container-fluid flex flex-row h-100 bg-black w-full relative justify-end py-6 z-0">
          <div className="w-[542px] pl-24 flex flex-row right-side absolute self-start top-[-4rem] left-0">
            <img src={MainImage} alt="programming" className="rounded-full " />
          </div>
          <div className="left-side grid grid-cols-4 w-[53rem]">
            <div className="w-20">
              <h1 className="text-white text-5xl font-extrabold pb-5">
                JUST ONE <span className="text-orange-600">CLICK</span>
              </h1>
            </div>
            <div className="flex items-stretch pb-6">
              <button className="p-2 w-56 text-sm font-[450] bg-orange-600 self-end">
                Hire a programmer
              </button>
            </div>
            <div className="col-span-3">
              <p className="text-white text-[0.9rem]">
                A website application for freelance programming services.
                Students and other people will be able to browse through the
                website to look for programmrs to hire
              </p>
            </div>
          </div>
        </div>
        {/* bottom container */}
        <div className="bottom-container flex flex-col justify-center items-center relative pt-5">
          <img
            src={OrangeCircle}
            className="absolute top-[-2rem] right-[15rem] z-10"
            width="90"
            alt="orange"
          />
          {/* <svg height="100" width="300" className='absolute bottom-[-9rem] left-[31rem] z-10' alt='orange'>
                    <circle cx="150" cy="260" r="220" stroke="black" stroke-width="0" fill="#ff8600" />
                </svg> */}
          <div className="text-center py-10 w-1/2 flex flex-col justify-center items-center">
            <h1 className="text-3xl font-semibold">Common Talent Searches</h1>
            <hr className="border-[2px] border-orange-500 w-1/4 text-center mt-5 " />
          </div>
          <div className="flex space-x-20 px-20 text-orange-800">
            <div className="flex flex-col space-y-4">
              <a href="#">Virtual Assistant</a>
              <a href="#">Wordpress Developer</a>
              <a href="#">Graphic design</a>
              <a href="#">PHP Developer</a>
            </div>
            <div className="flex flex-col space-y-4">
              <a href="#">Shopify Developer</a>
              <a href="#">Web Developer</a>
              <a href="#">Data Entry Specialist</a>
              <a href="#">Customer Service</a>
            </div >
            <div className="flex flex-col space-y-4">
              <a href="#">Facebook Marketing</a>
              <a href="#">Web Designer</a>
              <a href="#">Magento Developer</a>
              <a href="#">Customer Service</a>
            </div>
            <div className="flex flex-col space-y-4">
              <a href="#">Lead Generation</a>
              <a href="#">Marketing Specialist</a>
              <a href="#">Video Editor</a>
              <a href="#">Content Writer</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
