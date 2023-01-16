import React from "react";
import ProjectCard from "./ProjectCard";
import Project1 from '../../assets/sample1-project.png'
import Project2 from '../../assets/sample2-project.png'
import Project3 from '../../assets/sample3-project.png'
import Project4 from '../../assets/sample4-project.png'


const SampleProjects = () => {
  return (
    <section id="sample">
      <div className="bg-orange-100 pt-10 pb-20">
        <div className="container mx-auto flex flex-col">
          <h1 className="text-3xl font-semibold pb-5 text-right">
            Get inspired with projects made by our freelancers
          </h1>
          <div className="flex space-x-10 justify-between">
            <ProjectCard image={Project1} title="Project" description="Created by Jemimah Cayetano"/>
            <ProjectCard image={Project2} title="Project" description="Created by Francis Aguilar"/>
            <ProjectCard image={Project3} title="Project" description="Created by Sebastian Parohinog"/>
            <ProjectCard image={Project4} title="Project" description="Created by Danrei Espanola"/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SampleProjects;
