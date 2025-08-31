import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react"; 

function Loginpage() {
  const [showOtp, setShowOtp] = useState(false);

  return (
    <div className="flex items-center justify-center h-[680px] bg-white px-3 gap-5">
      <div className="w-[40%] p-4 sm:px-[7%]">
        <h2 className="text-2xl font-bold sm:text-start text-center mb-2">
          Sign In
        </h2>
        <p className="text-gray-500 sm:text-start text-center mb-6">
          Please login to continue to your account.
        </p>

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

        <div className="relative mt-9">
          <input
            type={showOtp ? "text" : "password"}
            id="otp"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg peer focus:outline-none focus:ring-1 focus:ring-blue-400 pr-10"
            placeholder=" "
          />
          <label
            htmlFor="otp"
            className="absolute -top-2 left-3 bg-white px-1 text-sm text-gray-500"
          >
            OTP
          </label>
          <button
            type="button"
            onClick={() => setShowOtp(!showOtp)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
          >
            {showOtp ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        </div>

        <div className="mt-3">
          <a href="#" className="text-blue-600 underline text-sm">
            Resend OTP
          </a>
        </div>

       
        <div className="flex items-center gap-2 mt-4">
          <input
            type="checkbox"
            id="keepLoggedIn"
            className="w-4 h-4 accent-blue-600"
          />
          <label htmlFor="keepLoggedIn" className="text-gray-600 text-sm">
            Keep me Logged in
          </label>
        </div>

        <button className="w-[95%] h-[50px] rounded-lg text-white bg-blue-700 mt-9">
          Get OTP
        </button>
        <button className="w-[95%] h-[50px] rounded-lg text-white bg-blue-700 mt-4">
          Sign in
        </button>

        <h1 className="mt-3 text-center text-gray-500">
          Need an account??{" "}
          <a className="text-[#335db9]" href="/signup">
            Create one
          </a>
        </h1>
      </div>

      <div className="sm:w-[60%]">
        <img
          className="rounded-2xl w-full h-[670px]"
          src="/blue.png"
          alt="login illustration"
        />
      </div>
    </div>
  );
}

export default Loginpage;
