import React from "react";
import Search from "../components/SearchContainer";

const Tutorial = () => {
  return (
    <>
      <Search text="Learn Programming" />
      <div className="h-[70vh] flex">
        {/* LEFT CONTAIER */}
        <div className="left-container flex flex-col w-1/4 h-[73.5vh] bg-gray-200 items-center">
          {/* programming languages */}
          <div className=" mt-10">
            <h1 className="font-semibold mb-2">Programming Languages</h1>
            <select
              name="skills"
              id="skills"
              className="border-2 border-black text-sm w-full"
            >
              <option value="JavaScript">JavaScript</option>
              <option value="Java">Java</option>
              <option value="Python">Python</option>
              <option value="C#">C#</option>
              <option value="C++">C++</option>
              <option value="C">C</option>
              <option value="PHP">PHP</option>
            </select>
          </div>
          {/* Topics */}
          <div className=" mt-3 w-52">
            <h1 className="font-semibold mb-2">Topics</h1>
            <select
              name="skills"
              id="skills"
              className="border-2 border-black text-sm w-full"
            >
              <option value="Web Design">For loop</option>
              <option value="Front End Developer">
                Conditional Statements
              </option>
              <option value="Back End Developer">Variables</option>
            </select>
          </div>
        </div>
		{/* RIGHT CONTAINER */}
		<div className="flex flex-col pt-10 px-10">
			<h1 className="text-2xl text-slate-500 font-semibold pb-5">Results</h1>
			<div className="container border-2 border-slate-500 p-3">
				<h1 className="text-3xl font-semibold">For Loop</h1>
				<h1 className="text-1xl font-semibold text-slate-500">Programming Langguage: JAVA</h1>
				<p className="mt-8">A For loop is a type of loop used when you want to repeat a particular block
				of code. Often used to specify the number of iterations before entering a loop.</p>
			</div>
		</div>
      </div>
    </>
  );
};

export default Tutorial;
