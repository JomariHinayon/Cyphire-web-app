import { React, useState, useEffect } from "react";
import DefaultProfileImage from "../assets/user-default.png";
import SearchContainer from "../components/SearchContainer";
import { useLocation, useParams } from "react-router-dom";
import axios from "axios";
// import Navbar from '../components/Navbar2'

const UserProfile = () => {
  const [stars, setStars] = useState([1, 2, 3, 4, 5]);
  const [username, setUsername] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState();
  const location = useLocation();
  const [isVisiting, setIsVisiting] = useState(false);
  const [loginStatus, setLoginStatus] = useState("");

  useEffect(() => {
    setEmail(location.state.email);
    setIsVisiting(location.state.isVisiting);

    if (email != undefined) {
      // console.log(email + "asdasds")

      axios
        .get("http://localhost:3001/userInfo", {
          params: {
            email: email,
          },
        })
        .then((response) => {
          // console.log(response.data[0])
          setUsername(response.data[0].username);
          setFirstname(response.data[0].firstname);
          setLastname(response.data[0].lastname);
        });
    }
  }, [email]);

  return (
    <>
      <SearchContainer text="Hire a programmer" />
      <div className="flex flex-row">
        {/* Left Container */}
        <div className="w-[30%] h-[90vh] bg-gray-300 flex flex-col space-y-5 py-5 px-5">
          <img
            src={DefaultProfileImage}
            className="w-48 rounded-full  place-self-center"
          />
          <p className="">
            <span className="font-bold">Address: </span>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <div className="flex flex-col">
            <p className="font-bold">Contact Number:</p>
            <p>09232312556</p>
          </div>
          <div className="flex flex-col">
            <p className="font-bold">Email:</p>
            <p>jomari@gmail.com</p>
          </div>
        </div>
        {/* Right Conatiner */}
        <div className="w-70% p-5">
          <h1 className="text-4xl font-bold">@{username}</h1>
          <div className="pl-2 relative">
            <h4 className="text-2xl font-semibold">
              {firstname} {lastname} | Programmer
            </h4>
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
              <span>(7)</span>
            </div>
            <p className="">Starting at 250.00 Php</p>
            {isVisiting && (
              <div className="absolute right-0 top-0">
                <button className="bg-red-600 p-2 text-white">Message</button>
              </div>
            )}
            <div className="border-[2px] w-[800px] h-[150px] border-gray-400 p-3 my-5">
              <h6 className="font-semibold text-3xl">Portfolio</h6>
            </div>
            <div className="border-[2px] w-[800px] h-[150px] border-gray-400 p-3">
              <h6 className="font-semibold text-3xl">Education</h6>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserProfile;
