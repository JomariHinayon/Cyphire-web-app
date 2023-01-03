import React from "react";
import Navbar from "../components/Navbar2";

const Browse = () => {
  return (
    <>
      <Navbar />
      <section id="browse-section">
        <div className="flex flex-column bg-orange-500 py-8 justify-center">
          <h1 className="text-4xl font-semibold pr-20">
            Look for a Freelancer
          </h1>
          <div className="w-[600px] flex flex-column">
            <input
              type="text"
              placeholder="  Projecs, skills, keyword, etc."
              className="w-[80%] h-full p-2 text-[1.5rem] font-medium"
            />
            <button className="w-[120px] bg-black text-white flex flex column p-2 text-[1.2rem] font-semibold">
              <span className="pr-2">
                Search
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-7 h-7"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Browse;
