import React from "react";
import Hero from "../components/home/Hero";
import Services from "../components/home/Services";
import SampleProjects from "../components/home/SampleProjects";

const Welcome = () => {
  return (
    <>
      <div className="flex flex-col">
        <Hero />
        <SampleProjects />
        <Services />
      </div>
    </>
  );
};

export default Welcome;
