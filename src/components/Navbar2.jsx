import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";
import DefaultProfileImage from "../assets/user-default.png";

const Navbar2 = ({ username }) => {
  return (
    <nav id="navbar-section">
      <div className="flex flex-row mb-10 px-2 py-0 just justify-between items-center">
        <div>
          <Link to="/browse">
            <img src={Logo} width="220" alt="Logo" />
          </Link>
        </div>
        <div className="w-1/2">
          <ul className="flex flex-rows items-center gap-10 text-lg">
            {/* <li className="">
              <Link className="focus:bg-black focus:text-white p-2" to="/">
                Home
              </Link>
            </li> */}
            <li className="">
              <Link
                className="focus:bg-black focus:text-white p-2"
                to="/browse"
              >
                Browse
              </Link>
            </li>
            <li className="">
              <Link
                className="focus:bg-black focus:text-white p-2"
                to="/tutorials"
              >
                Tutorials
              </Link>
            </li>
            <li className="">
              <Link
                className="focus:bg-black focus:text-white p-2"
                to="/askcommunity"
              >
                Ask Community
              </Link>
            </li>
            <a href="#">
              <img src={DefaultProfileImage} className="w-14 rounded-full" />
            </a>
            {/* <li className="">
							<Link
								className="focus:bg-black focus:text-white p-2"
								to="/userprofile"
							>
								Profile
							</Link>
						</li> */}
            {/* <li className="">
							<p>Hello, </p>
							<a>{username}</a>
						</li> */}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar2;
