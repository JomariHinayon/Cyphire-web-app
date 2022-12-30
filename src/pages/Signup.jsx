import { React, useState } from "react"
import { Link } from "react-router-dom"
import axios from "axios"

const Signup = () => {
	const [firstname, setFirstname] = useState("")
	const [lastname, setLastname] = useState("")
	const [username, setUsername] = useState("")
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")
	const [conpassword, setConpassword] = useState("")
	const [eula, setEula] = useState(false)

	const addUser = () => {
		console.log("added user")
		axios.post("http://localhost:3001/create", {
			firstname: firstname,
			lastname: lastname,
			username: username,
			email: email,
			password: password
		}).then(() => {
			console.log("User successfully added.")
		})
	}

	return (
		<section id="signup-section">
			<div className="flex justify-center text-center">
				<div className="w-[80vh] ">
					<form method="post" action='/'>
						<h1 className="text-2xl font-black mx-10 mt-5 mb-10 ">Sign Up</h1>
						<input
							type="text"
							placeholder="Firstname"
							name="firstname"
							className="px-2 py-1 border-black text-sm border-[1px] mb-10 w-3/4"
							onChange={(event) => {
								setFirstname(event.target.value)
							}}
						/>
						<input
							type="text"
							placeholder="Lastname"
							name="lastname"
							className="px-2 py-1 border-black text-sm border-[1px] mb-10 w-3/4"
							onChange={(event) => {
								setLastname(event.target.value)
							}}
						/>
						<input
							type="text"
							placeholder="Username"
							name="username"
							className="px-2 py-1 border-black text-sm border-[1px] mb-10 w-3/4"
							onChange={(event) => {
								setUsername(event.target.value)
							}}
						/>
						<input
							type="email"
							placeholder="Email"
							name="email"
							className="px-2 py-1 border-black text-sm border-[1px] mb-10 w-3/4"
							onChange={(event) => {
								setEmail(event.target.value)
							}}
						/>
						<input
							type="password"
							placeholder="Password"
							name="password"
							className="px-2 py-1 border-black text-sm border-[1px] mb-10 w-3/4"
							onChange={(event) => {
								setPassword(event.target.value)
							}}
						/>
						<input
							type="password"
							placeholder="Confirm Password"
							name="conpassword"
							className="px-2 py-1 border-black text-sm border-[1px] mb-10 w-3/4"
							onChange={(event) => {
								setConpassword(event.target.value)
							}}
						/>
						<div className="flex justify-around pb-5 mb-8">
							<div>
								<input
									type="checkbox"
									value="remember"
									name="eula"
								/>
								<label className="pl-2 text-[0.8rem]">
									I agree to the
									<span className="text-orange-600">
										<a href="#"> User Agreement </a>
									</span>
									and
									<span className="text-orange-600">
										<a href="#"> Privacy Policy</a>
									</span>
								</label>
							</div>
						</div>
						<button
							className="bg-orange-500 py-1 w-3/4 text-white text-xl font-bold mb-8"
							type="submit"
							onClick={addUser}
						>
							Sign Up
						</button>
					</form>
					<hr className="border-black border-[1px] w-3/4 mx-14 mb-2" />
					<p className="text-[0.8rem] font-semibold">
						Aready have an account?
						<span className="ml-2 text-orange-600">
							<Link to="signup">Login</Link>
						</span>
					</p>
				</div>
			</div>
		</section>
	)
}

export default Signup
