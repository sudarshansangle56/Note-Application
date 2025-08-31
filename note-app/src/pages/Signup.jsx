import React, { useState } from "react";
import Logo from "../Components/Logo";

function Signup() {
  const [showOtp, setShowOtp] = useState(false);

  return (
    <div className="flex items-center justify-center h-[680px] bg-white px-3 gap-5">
      <div className="w-[40%] p-4 sm:px-[7%]">
        {/* <div className=" flex items-center ">
          <Logo />
          <h1 className="font-bold text-[30px] text-[#222222e7]">HD</h1>
        </div> */}
        <h2 className="text-2xl font-bold sm:text-start text-center mb-2">
          Sign up
        </h2>
        <p className="text-gray-500 sm:text-start text-center mb-6">
          Sign up to enjoy the feature of HD
        </p>

        {/* Name */}
        <div className="relative">
          <input
            type="text"
            id="name"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg peer focus:outline-none focus:ring-1 focus:ring-blue-400"
            placeholder=" "
          />
          <label
            htmlFor="name"
            className="absolute -top-2 left-3 bg-white px-1 text-sm text-gray-500"
          >
            Your Name
          </label>
        </div>

        {/* DOB */}
        <div className="relative mt-9">
          <input
            type="date"
            id="dob"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg peer focus:outline-none focus:ring-1 focus:ring-blue-400"
            placeholder=" "
          />
          <label
            htmlFor="dob"
            className="absolute -top-2 left-3 bg-white px-1 text-sm text-gray-500"
          >
            Date of Birth
          </label>
        </div>

        {/* Email */}
        <div className="relative mt-9">
          <input
            type="text"
            id="email"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg peer focus:outline-none focus:ring-1 focus:ring-blue-400"
            placeholder=" "
          />
          <label
            htmlFor="email"
            className="absolute -top-2 left-3 bg-white px-1 text-sm text-gray-500"
          >
            Email
          </label>
        </div>

        {/* OTP input (shows only after button click) */}
        {showOtp && (
          <div className="relative mt-9">
            <input
              type="text"
              id="otp"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg peer focus:outline-none focus:ring-1 focus:ring-blue-400"
              placeholder=" "
            />
            <label
              htmlFor="otp"
              className="absolute -top-2 left-3 bg-white px-1 text-sm text-gray-500"
            >
              Enter OTP
            </label>
          </div>
        )}

        {/* Button */}
        <button
          className="w-[95%] h-[50px] rounded-lg text-white bg-blue-700 mt-9"
          onClick={() => setShowOtp(true)}
        >
          Get OTP
        </button>

        <h1 className="mt-3 text-center text-gray-500">
          Already have an account??{" "}
          <a className="text-[#335db9]" href="/login">
            Sign in
          </a>
        </h1>
      </div>

      <div className="sm:w-[60%]">
        <img
          className="rounded-2xl w-full h-[670px]"
          src="/blue.png"
          alt=""
        />
      </div>
    </div>
  );
}

export default Signup;
