import React from "react"
import Search from "../components/SearchContainer"

const AskCommunity = () => {
	return (
		<>
			<Search text="Ask a Question" />
			<div className="h-[70vh]">
				{/* LEFT CONTAIER */}
				<div className="left-container flex flex-col w-1/4 h-full bg-gray-200 items-center">
					{/* topic */}
					<div className=" mt-10 flex items-center w-[85%]">
						<h1 className="font-semibold pr-2">Topic</h1>
						<select
							name="skills"
							id="skills"
							className="border-2 border-black text-sm h-6 w-full"
						>
							<option value="Web Design">Web Design</option>
							<option value="Front End Developer">Front End Developer</option>
							<option value="Back End Developer">Back End Developer</option>
						</select>
					</div>
					{/* rating */}
					<div className=" mt-10 flex items-center w-[85%]">
						<h1 className="font-semibold pr-2">Ratings</h1>
						<select
							name="skills"
							id="skills"
							className="border-2 border-black text-sm h-6 w-full"
						>
							<option value="Web Design">Web Design</option>
							<option value="Front End Developer">Front End Developer</option>
							<option value="Back End Developer">Back End Developer</option>
						</select>
					</div>
          {/* date */}
					<div className=" mt-10 flex items-center w-[85%]">
						<h1 className="font-semibold pr-2">Date</h1>
						<select
							name="skills"
							id="skills"
							className="border-2 border-black text-sm h-6 w-full"
						>
							<option value="Web Design">Web Design</option>
							<option value="Front End Developer">Front End Developer</option>
							<option value="Back End Developer">Back End Developer</option>
						</select>
					</div>
				</div>
			</div>
		</>
	)
}

export default AskCommunity
