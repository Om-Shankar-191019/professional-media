import React from "react";
import { LoginAPI } from "../api/AuthAPI";
import LinkedInLogo from "../assets/LinkedInLogo.png";
import { BiShow, BiHide } from "react-icons/bi";
import { FcGoogle } from "react-icons/fc";
import { SiFacebook } from "react-icons/si";

const LoginComponent = () => {
  const login = () => {
    let r = LoginAPI();
    console.log(r);
  };
  return (
    <div>
      <img src={LinkedInLogo} className="h-16 my-4 mx-8 sm:h-20" alt="" />
      <div className="flex justify-center items-center  ">
        <div className="flex flex-col p-8 space-y-4 ">
          <p className="text-4xl sm:text-5xl">
            Welcome to your professional world
          </p>
          <input
            type="text"
            placeholder="Email or Phone number"
            className="border-2 outline-none border-gray-800 rounded-md px-2 py-2"
          />
          <div className="flex items-center justify-between border-2  border-gray-800 rounded-md ">
            <input
              type="password"
              placeholder="Password"
              className="outline-none px-2 py-2"
            />
            <BiHide size={24} className="mr-2 cursor-pointer text-gray-600" />
          </div>
          <div>
            <a href="#" className="text-blue-700 text-bold font-bold text-lg">
              Forget Password?
            </a>
          </div>
          <button className="border rounded-3xl p-3 bg-blue-700 text-white font-semibold">
            Sign In
          </button>

          <div className="inline-flex items-center justify-center w-full">
            <hr className="w-full h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
            <span className="absolute px-3 font-medium text-gray-400 -translate-x-1/2 bg-white left-1/2 dark:text-white dark:bg-gray-900">
              or
            </span>
          </div>

          <button className="flex justify-center items-center border border-gray-500 rounded-3xl p-3 text-gray-600 font-semibold ">
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
            <span className="text-blue-700 cursor-pointer">Join Now</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginComponent;
