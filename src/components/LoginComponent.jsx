import React, { useState } from "react";
import { FacebookSignInAPI, GoogleSignInAPI, LoginAPI } from "../api/AuthAPI";
import LinkedInLogo from "../assets/LinkedInLogo.png";
import { BiShow, BiHide } from "react-icons/bi";
import { FcGoogle } from "react-icons/fc";
import { SiFacebook } from "react-icons/si";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../firebaseConfig";

const LoginComponent = () => {
  let navigate = useNavigate();
  const [credentails, setCredentails] = useState({
    email: null,
    password: null,
  });
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  function togglePasswordVisibility() {
    setIsPasswordVisible((prevState) => !prevState);
  }

  const forgetPassword = () => {
    sendPasswordResetEmail(auth, credentails.email)
      .then(() => {
        // Password reset email sent!
        toast.success("Reset link sent. Check your inbox");
      })
      .catch((error) => {
        if (credentails.email) {
          const errorCode = error.code;
          const errorMessage = error.message;
          if (errorCode === "auth/invalid-email") {
            toast.info("Invalid email format");
            // Provide appropriate prompt to the user for invalid email format
          } else if (errorCode === "auth/user-not-found") {
            toast.info("User not found");
            // Provide appropriate prompt to the user for user not found
          } else {
            console.log(errorMessage);
            // Provide a general error prompt to the user
          }
        } else toast.info("Please! Enter the email");
      });
  };

  const login = async () => {
    try {
      let res = await LoginAPI(credentails.email, credentails.password);
      toast.success("Signed In successfull");
      navigate("/home");
      localStorage.setItem("userEmail", res.user.email);
    } catch (err) {
      console.log(err);
      toast.error("Please check your credentials");
    }
  };

  const googleSignIn = async () => {
    try {
      let res = await GoogleSignInAPI();
      toast.success("Signed In successfull");
      navigate("/home");
      localStorage.setItem("userEmail", res.user.email);
    } catch (err) {
      console.log(err.message);
      toast.error("Please check your credentials");
    }
  };

  const facebookSignIn = async () => {
    try {
      let res = await FacebookSignInAPI();
      toast.success("Signed In successfull");
      navigate("/home");
      localStorage.setItem("userEmail", res.user.email);
    } catch (err) {
      console.log(err.message);
      toast.error("Please check your credentials");
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
            placeholder="Email"
            className="border-2 outline-none border-gray-800 rounded-md px-2 py-3"
            onChange={(event) =>
              setCredentails({ ...credentails, email: event.target.value })
            }
          />
          <div className="flex items-center justify-between border-2  border-gray-800 rounded-md ">
            <input
              type={isPasswordVisible ? "text" : "password"}
              placeholder="Password"
              className="outline-none px-2 py-3 w-4/5"
              onChange={(event) =>
                setCredentails({ ...credentails, password: event.target.value })
              }
            />
            <div onClick={togglePasswordVisibility}>
              {isPasswordVisible ? (
                <BiShow
                  size={24}
                  className="mr-2 cursor-pointer text-gray-600"
                />
              ) : (
                <BiHide
                  size={24}
                  className="mr-2 cursor-pointer text-gray-600"
                />
              )}
            </div>
          </div>
          <div>
            <span
              onClick={forgetPassword}
              className="text-[#0077b5] text-bold font-bold text-lg cursor-pointer"
            >
              Forget Password?
            </span>
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

          <button
            onClick={facebookSignIn}
            className="flex justify-center items-center border border-gray-500 rounded-3xl p-3 text-gray-600 font-semibold "
          >
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
