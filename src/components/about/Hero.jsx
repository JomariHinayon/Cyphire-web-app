import React from "react";
import aboutimage from "../../assets/about-img.jpg";
import OrangeCircle from "../../assets/circle-orange.png";

const Hero = () => {
  return (
    <section id="about-section relative" className="h-[85vh]">
      <div className="left-container">
        <img
          src={aboutimage}
          alt="programming"
          className="absolute top-[150px] left-[-50px] rounded-full w-[550px] h-[550px]"
        />
        <img
          src={OrangeCircle}
          width="100"
          className="absolute top-1/2 left-[-50px]"
          alt="orange-circle"
        />
      </div>
      <div className="right-container grid grid-cols-3">
        <img
          src={OrangeCircle}
          width="140"
          className="absolute top-1/4 right-[100px]"
          alt="orange-circle"
        />
        <div className="left-section"></div>
        <div className="right-section col-span-2 pl-16 py-5 grid-cols-3">
          <div className="col-span-3">
            <h1 className="font-[500] mb-10 text-[1.2rem]">FREELANCE PROGRAMMING SERVICES</h1>
          </div>
          <div className="col-span-1 pb-4">
            <h1 className="text-6xl font-extrabold">
              JUST
              <br /> ONE
              <br />
              <span className="text-orange-600 font-black">CLICK</span>
            </h1>
          </div>
          <div className="col-span-2 w-[730px] text-md font-[500]">
            <p className="">
            A website application for freelance programming services. Students and other people
            will be able to browse through the website to look for programmers to hire. Users will
            also have access to tutorials and search for computer programming-related topics to see
            relevant code samples and in-depth explanations of each syntax, providing them with numerous
            programming lessons. A forum for questions and answers is also available to users where they
            may post queries and recieve responses regarding programming, while developers and experienced
            programmers can share their experties and help them find solutions. 
            </p>
            <img
              src={OrangeCircle}
              width="80"
              className="absolute bottom-12 right-[120px]"
              alt="orange-circle"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
