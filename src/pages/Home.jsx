import React from "react";
import Hero from "../components/home/Hero";
import Services from "../components/home/Services";
import SampleProjects from "../components/home/SampleProjects";
import Footer from "../components/Footer";

const Welcome = () => {
  return (
    <>
      <div className="flex flex-col">
        <Hero />
        <SampleProjects />
        <Services />
        <Footer />
      </div>
    </>
  );
};

export default Welcome;
