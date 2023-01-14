import React from "react"
import { useState } from "react"
import DefaultImage from "../assets/user-default.png"
import { useNavigate } from "react-router-dom"

const UserInfo = ({email, username, firstname, lastname }) => {
	const [stars, setStars] = useState([1, 2, 3, 4, 5])
	const navigate = useNavigate()

	const userProfileClick = () => {
		event.preventDefault();

		navigate('/userprofile', {state:{email: email, isVisiting: true}})
	}

	return (
		<>
			<div className="w-[95%] pt-5">
				<div className="flex flex-row">
					{/* Profice Picture */}
					<div className="flex place-items-start">
						<a href="#" onClick={userProfileClick}>
							<img
								src={DefaultImage}
								width="200"
								className="rounded-full"
							/>
						</a>
					</div>
					{/* User Info */}
					<div className=" pl-3 flex flex-col">
						<a
							className="text-2xl font-semibold hover:text-orange-400"
							href="#"
							onClick={userProfileClick}
						>
							{username}
						</a>
						<div className="flex felx-row">
							<h4 className="pr-2">{firstname}</h4>
							<h4 className="pr-2">{lastname}</h4>
							<h4 className=""> | Skills</h4>
						</div>
						<div className="flex flex-row">
							{stars.map((val, key) => (
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									strokeWidth="1.5"
									stroke="currentColor"
									className="w-6 h-6"
									key={key}
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
									/>
								</svg>
							))}
						</div>
						<div className="">
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Assumenda sint voluptatem doloremque consequuntur doloribus aut
								adipisci totam, dolorem impedit, magni atque fugit porro.
								Dolorem rerum possimus perferendis veniam excepturi voluptate?
							</p>
						</div>
					</div>
				</div>
				<hr className="border-1 border-black mt-2" />
			</div>
		</>
	)
}

export default UserInfo
