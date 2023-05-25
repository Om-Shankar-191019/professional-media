import React, { useState } from "react";
import { GoogleSignInAPI, LoginAPI } from "../api/AuthAPI";
import LinkedInLogo from "../assets/LinkedInLogo.png";
import { BiShow, BiHide } from "react-icons/bi";
import { FcGoogle } from "react-icons/fc";
import { SiFacebook } from "react-icons/si";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
const LoginComponent = () => {
  let navigate = useNavigate();
  const [credentails, setCredentails] = useState({});

  const login = async () => {
    try {
      let res = await LoginAPI(credentails.email, credentails.password);
      toast.success("Signed In successfull");
    } catch (err) {
      toast.error("please check your credentials");
    }
  };

  const googleSignIn = async () => {
    try {
      let res = await GoogleSignInAPI();
      // console.log(res);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <img src={LinkedInLogo} className="h-16 my-4 mx-8 mb-2 sm:h-20" alt="" />
      <div className="flex justify-center items-center  ">
        <div className="flex flex-col p-8 space-y-4 ">
          <p className="text-4xl sm:text-5xl mb-2 ">
            Welcome to your professional world
          </p>
          <input
            type="text"
            placeholder="Email or Phone number"
            className="border-2 outline-none border-gray-800 rounded-md px-2 py-2"
            onChange={(event) =>
              setCredentails({ ...credentails, email: event.target.value })
            }
          />
          <div className="flex items-center justify-between border-2  border-gray-800 rounded-md ">
            <input
              type="password"
              placeholder="Password"
              className="outline-none px-2 py-2"
              onChange={(event) =>
                setCredentails({ ...credentails, password: event.target.value })
              }
            />
            <BiHide size={24} className="mr-2 cursor-pointer text-gray-600" />
          </div>
          <div>
            <a href="#" className="text-[#0077b5] text-bold font-bold text-lg">
              Forget Password?
            </a>
          </div>
          <button
            onClick={login}
            className="border rounded-3xl p-3 bg-[#0077b5] text-white font-semibold"
          >
            Sign In
          </button>

          <div className="inline-flex items-center justify-center w-full">
            <hr className="w-full h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
            <span className="absolute px-3 font-medium text-gray-400 -translate-x-1/2 bg-white left-1/2 dark:text-white dark:bg-gray-900">
              or
            </span>
          </div>

          <button
            onClick={googleSignIn}
            className="flex justify-center items-center border border-gray-500 rounded-3xl p-3 text-gray-600 font-semibold "
          >
            <FcGoogle size={24} className="mr-2 cursor-pointer" />
            Sign In with Google
          </button>

          <button className="flex justify-center items-center border border-gray-500 rounded-3xl p-3 text-gray-600 font-semibold ">
            <SiFacebook
              size={24}
              className="mr-2 cursor-pointer  text-blue-700"
            />
            Sign In with Facebook
          </button>

          <p className="font-semibold text-center">
            New to LinkedIn?{" "}
            <span
              className="text-[#0077b5] cursor-pointer"
              onClick={() => navigate("/register")}
            >
              Join Now
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginComponent;
