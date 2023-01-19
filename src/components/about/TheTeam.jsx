import React from "react";
import Jemimah from "../../assets/jemimah.jpg";
import Jomari from "../../assets/jomari.jpg";
import Parohinog from "../../assets/parohinog.jpg";
import Manalo from "../../assets/manalo.png";
import Rosales from "../../assets/rosales-img.jpg";
import Espanola from "../../assets/espanola.jpg";
import Aguilar from "../../assets/aguilar.jpg";
import Card from "./TeamCard";

const TheTeam = () => {
  return (
    <section id="team-section">
      <div className=" flex flex-col container mx-auto pb-10">
        <div className="flex flex-col self-center items-center py-5 w-60">
          <h1 className="text-4xl font-semibold pb-2">Our Team</h1>
          <hr className="border-orange-600 border-2 w-1/2 " />
        </div>
        <div className="">
          {/* Jemimah */}
          <div className="flex flex-row px-4 py-10">
            <div className="flex flex-col py-3 px-8 justify-center">
              <h1 className="text-3xl font-semibold pb-2">Jemimah Cayetano</h1>
              <h2 className="text-2xl font-semibold pb-3 text-orange-500">
                Project Manager
              </h2>
              <p className="text-slate-500">
                Leading the team of Group 6, Jemimah is driven in developing
                digital solutions to help businesses and organizations elevate
                their online presence and scale their operations. He has also
                built a community of thousands of developers and shares his
                passion for programming and emerging technologies.
              </p>
            </div>
            <img src={Jemimah} className="w-[300px] rounded-full" />
          </div>
          {/* Jomari */}
          <div className="flex flex-row p-4">
            <img src={Jomari} className="w-[840px] h-[300px] rounded-full" />
            <div className="flex flex-col py-3 px-8 justify-center">
              <h1 className="text-3xl font-semibold pb-2">Jomari Hinayon</h1>
              <h2 className="text-2xl font-semibold pb-3 text-orange-500">
                Web Developer
              </h2>
              <p className="text-slate-500">
                A highly-skilled developer, Jomari is all about learning and
                improving his skill sets. He sets the technical direction,
                defines the technology stack, and drives the day-to-day
                development process. He's naturally curious and explores new
                languages, frameworks, and techniques in his spare time.
              </p>
            </div>
          </div>
          <div className="grid grid-rows-2 grid-flow-col gap-10 mt-32 px-2 ">
            <Card
              image={Aguilar}
              name="Francis Aguilar"
              title="Software Engineer"
              description="Francis is passionate about learning new web technologies and applying them to current projects."
            />
            <Card
              image={Parohinog}
              name="Sebastian Parohinog"
              title="Documenter"
              description="Well-organized. Contstantly take notes and utilize a variety of tools to keep on track with deadlines. Constantly interested in learning new things."
            />
            <Card
              image={Espanola}
              name="Danei Espanola"
              title="Web Developer"
              description="Danrei is always prepared to assist and deliver assignments on time and of the best quality. His forte is in creating great visual designs."
            />
            <Card
              image={Rosales}
              name="Seros Rosales"
              title="Documenter"
              description="Fond of creating and trying new things. Highly inquisitive about technology. Enthusiastic, adventurous, and loves to project positive vibes."
            />
            <Card
              image={Manalo}
              name="Joshua Manalo"
              title="Data Analyst"
              description="Optimistic and a very social person. He is always eager to learn and explore new things."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TheTeam;
