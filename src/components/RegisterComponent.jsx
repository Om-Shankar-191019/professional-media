import React, { useState } from "react";
import { RegisterAPI } from "../api/AuthAPI";
import { useForm } from "react-hook-form";
import LinkedInLogoText from "../assets/LinkedInLogoText.png";
import { BiShow, BiHide } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const RegisterComponent = () => {
  let navigate = useNavigate();
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  function togglePasswordVisibility() {
    setIsPasswordVisible((prevState) => !prevState);
  }
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const registerApi = async (email, password) => {
    try {
      let res = await RegisterAPI(email, password);
      // res.user.sendEmailVerification();
      toast.success("Account Created!");
      // navigate("/home");
      console.log(res);
    } catch (err) {
      console.log(err);
      toast.error("Oops ! something went wrong.");
    }
  };

  return (
    <div>
      <img
        src={LinkedInLogoText}
        className="h-16 my-4 mx-8 mb-2 sm:h-20"
        alt=""
      />
      <div className="flex justify-center items-center  ">
        <div className="flex flex-col p-8 space-y-4 ">
          <p className="text-4xl sm:text-5xl mb-2 ">
            Make the most of your professional life
          </p>
          <form
            onSubmit={handleSubmit((data) =>
              registerApi(data.email, data.password)
            )}
          >
            <input
              {...register("email", {
                required: "Email is required.",
                pattern: {
                  value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
                  message: "Invalid email address.",
                },
              })}
              type="text"
              placeholder="Email"
              className="border-2 hover:border-[#0077b5] duration-150 outline-none rounded-md px-2 py-3 w-full mb-8"
            />
            {errors.email && (
              <p className="text-sm text-red-600 mb-4 -mt-8">
                {errors.email.message}
              </p>
            )}
            <div
              style={{ outline: "blue" }}
              className=" hover:border-[#0077b5] duration-150 flex items-center justify-between border-2  mb-8 rounded-md outline-[#0077b5] "
            >
              <input
                {...register("password", {
                  required: "Password is required.",
                  minLength: {
                    value: 6,
                    message: "password must be more than 5 characters",
                  },
                  maxLength: {
                    value: 15,
                    message: "password can not exceed more than 15 characters",
                  },
                  validate: (value) => {
                    return (
                      [/[a-z]/, /[A-Z]/, /[0-9]/, /[^a-zA-Z0-9]/].every(
                        (pattern) => pattern.test(value)
                      ) ||
                      "must include lower, upper, number, and special charcters"
                    );
                  },
                })}
                type={isPasswordVisible ? "text" : "password"}
                placeholder="Password"
                className="outline-none px-2 py-3 w-4/5"
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
            {errors.password && (
              <p className="text-sm text-red-600 mb-4 -mt-8">
                {errors.password.message}
              </p>
            )}

            <p className=" text-center mb-1">
              By clicking Agree & Join you agree to the LinkedIn{" "}
              <span
                className="text-[#0077b5] cursor-pointer"
                onClick={() => navigate("/register")}
              >
                User Agreement Privacy Policy{" "}
              </span>
              and{" "}
              <span className="text-[#0077b5] cursor-pointer">
                Cookie Policy
              </span>
            </p>

            <button
              type="submit"
              className="border rounded-3xl p-3 bg-[#0077b5] text-white font-semibold w-full"
            >
              Agree & Join
            </button>
          </form>

          <p className="font-semibold text-center">
            Already on LinkedIn?{" "}
            <span
              className="text-[#0077b5] cursor-pointer"
              onClick={() => navigate("/")}
            >
              Sign in
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterComponent;
