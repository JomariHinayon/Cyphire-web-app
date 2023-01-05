import React from "react"
import Search from "../components/SearchContainer"

const Tutorial = () => {
	return (
		<>
			<Search text="Learn Programming" />
			<div className="h-[70vh]">
				{/* LEFT CONTAIER */}
				<div className="left-container flex flex-col w-1/4 h-full bg-gray-200 items-center">
                    {/* programming languages */}
						<div className=" mt-10">
							<h1 className="font-semibold mb-2">Programming Languages</h1>
							<select
								name="skills"
								id="skills"
								className="border-2 border-black text-sm w-full"
							>
								<option value="Web Design">Web Design</option>
								<option value="Front End Developer">Front End Developer</option>
								<option value="Back End Developer">Back End Developer</option>
							</select>
						</div>
                    {/* Topics */}
						<div className=" mt-3 w-52">
							<h1 className="font-semibold mb-2">Ratings</h1>
							<select
								name="skills"
								id="skills"
								className="border-2 border-black text-sm w-full"
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

export default Tutorial
