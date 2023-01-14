import axios from "axios";
import {React, useState} from "react";
import {useNavigate, Navigate} from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState("hinayonjomari@gmail.com");
  const [password, setPassword] = useState("pass123");
  const navigate = useNavigate()

  const handleLogin = (event) => {

    event.preventDefault();

    // console.log(email)
    // console.log(password)
    axios
      .post("http://localhost:3001/login", {
        email: email,
        password: password,

      })
      .then(() => {
        console.log("User successfull login.");
        navigate('/userprofile', {state:{email: email}})
      });
  
    
  };

  return (
    <section id="login-section">
      <div className="flex justify-center text-center">
        <div className="w-[80vh] ">
          <form onSubmit={handleLogin}>
            <h1 className="text-2xl font-black mx-10 mt-5 mb-10 ">
              Welcome Back!
            </h1>
            <input
              type="text"
              placeholder="Email or Username"
              value={email}
              name="username"
              className="px-2 py-1 border-black text-sm border-[1px] mb-10 w-3/4"
              onChange={(event) => {
                setEmail(event.target.value);
              }}
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={password}
              className="px-2 py-1 border-black text-sm border-[1px] mb-10 w-3/4"
              onChange={(event) => {
                setPassword(event.target.value);
              }}
            />
            <div className="flex justify-around pb-5 mb-8">
              <div>
                <input type="checkbox" value="remember" nae="remember" />
                <label className="pl-2 text-sm">Remember Me</label>
              </div>
              <a
                className="text-orange-600 text-sm pt-1 font-[500]"
                href="google.com"
              >
                Forget Password?
              </a>
            </div>
            <button
              className="bg-orange-500 py-1 w-3/4 text-white text-xl font-bold mb-8"
              type="submit"
            >
              Log In
            </button>
          </form>
          <hr className="border-black border-[1px] w-3/4 mx-14 mb-2" />
          <p className="text-[0.8rem] font-semibold">
            Don't have an account?
            <span className="ml-2 text-orange-600">Sign Up</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Login;
