import React from "react";
import Search from "../components/SearchContainer";
import Question from "../components/askcommunity/Question";
import { useNavigate } from "react-router-dom";

const AskCommunity = () => {
  const navigate = useNavigate();

  const handleAsk = () => {
    navigate("/askquestion");
  };

  return (
    <>
      <Search text="Ask a Question" />
      <div className="h-[70vh] flex">
        {/* LEFT CONTAIER */}
        <div className="left-container flex flex-col w-1/4 h-[73.5vh] bg-gray-200 items-center">
          {/* rating */}
          <div className=" mt-10 flex items-center w-[85%]">
            <h1 className="font-semibold pr-2">Ratings</h1>
            <select
              name="skills"
              id="skills"
              className="border-2 border-black w-48"
            >
              <option value="one star">1 star</option>
              <option value="two star">2 star</option>
              <option value="three star">3 star</option>
              <option value="four star">4 star</option>
              <option value="five star">5 star</option>
            </select>
          </div>
          {/* date */}
          <div className=" mt-10 flex items-center w-[85%]">
            <h1 className="font-semibold pr-2">Date</h1>
            <select
              name="skills"
              id="skills"
              className="border-2 border-black w-56"
            >
              <option value="2022">2022</option>
              <option value="2021">2021</option>
              <option value="2020">2020</option>
              <option value="2019">2019</option>
              <option value="2018">2018</option>
            </select>
          </div>
        </div>
        {/* RIGHT CONTAINER */}
        <div className="right-container p-8 flex flex-col">
          <button
            className="bg-red-500 p-2 font-semibold text-white mb-10 self-center"
            onClick={handleAsk}
          >
            Ask Question
          </button>
          <Question />
          <Question />
        </div>
      </div>
    </>
  );
};

export default AskCommunity;
