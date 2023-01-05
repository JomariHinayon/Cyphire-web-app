import React from "react"

const SearchContainer = ({text}) => {
	return (
		<>
			{/* TOP SECTION */}
			<div className="flex flex-column bg-orange-600 py-4 justify-center">
				<h1 className="text-4xl font-semibold pr-20">{text}</h1>
				<div className="w-[600px] h-12 flex flex-column ">
					<input
						type="text"
						placeholder="  Projecs, skills, keyword, etc."
						className="w-[80%] h-full p-2 text-[1rem] font-medium"
					/>
					<button className="w-[120px] bg-black text-white flex flex column p-2 text-[1.2rem] font-semibold">
						<span className="pr-2">Search</span>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth="1.5"
							stroke="currentColor"
							className="w-7 h-7"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
							/>
						</svg>
					</button>
				</div>
			</div>
			{/* END: TOP SECTION */}
		</>
	)
}

export default SearchContainer
