import React, { useEffect } from "react"
import Search from "../components/SearchContainer"
import axios from "axios"
import { useState } from "react"
import UserInfo from "../components/UserInfo"

const Browse = () => {
	const [userList, setUserList] = useState([])

	useEffect(() => {
		axios.get("http://localhost:3001/users").then((response) => {
			setUserList(response.data)
			console.log(userList)
		})
	}, [])

	return (
		<>
			<section id="browse-section">
				<Search text="Look for a Freelancer" />
				{/* HERO SECTION */}
				<div className="flex flex-row">
					{/* LEFT CONTAINER */}
					<div className=" left-container flex flex-col w-1/4 h-[75vh] bg-gray-200 items-center">
						{/* skills */}
						<div className=" mt-10">
							<h1 className="font-semibold mb-2">Skills</h1>
							<select
								name="skills"
								id="skills"
								className="border-2 border-black"
							>
								<option value="Web Design">Web Design</option>
								<option value="Front End Developer">Front End Developer</option>
								<option value="Back End Developer">Back End Developer</option>
							</select>
						</div>
						{/* ratings */}
						<div className=" mt-3">
							<h1 className="font-semibold mb-2">Ratings</h1>
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
						{/* hourly rate */}
						<div className=" mt-3">
							<h1 className="font-semibold mb-2">Hourly rate</h1>
							<select
								name="skills"
								id="skills"
								className="border-2 border-black w-48"
							>
								<option value="250">250 php</option>
								<option value="500">500 php</option>
								<option value="750">750 php</option>
								<option value="1000">1000 php</option>
							</select>
						</div>
						{/* Date */}
						<div className=" mt-3">
							<h1 className="font-semibold mb-2">Date</h1>
							<select
								name="skills"
								id="skills"
								className="border-2 border-black w-48"
							>
								<option value="2022">2022</option>
								<option value="2021">2021</option>
								<option value="2020">2020</option>
								<option value="2019">2019</option>
								<option value="2018">2018</option>
							</select>
						</div>
					</div>
					{/* END: LEFT CONTAINER */}

					{/* RIGHT CONTAINER */}
					<div className="px-10 pt-5 w-3/4">
						{userList.map((val, key) => {
							return (
								<UserInfo
									key={val.id}
									username={val.username}
									firstname={val.firstname}
									lastname={val.lastname}
									email={val.email}
								/>
							)
						})}
					</div>
				</div>
				{/* END: HERO SECTION */}
			</section>
		</>
	)
}

export default Browse
