import React from 'react'

function Signup() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
    <div className=" w-[600px] p-6 bg-white rounded-2xl shadow-lg">
      <h2 className="text-2xl font-bold text-center mb-2">Sign up</h2>
      <p className="text-gray-500 text-center mb-6">
        Sign up to enjoy the feature of HD
      </p>
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
      <div className="relative mt-9">
        <input
          type="date"
          id="name"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg peer focus:outline-none focus:ring-1 focus:ring-blue-400"
          placeholder=" "
        />
        <label
          htmlFor="name"
          className="absolute -top-2 left-3 bg-white px-1 text-sm text-gray-500"
        >
          Date of Birth
        </label>
      </div>
      <div className="relative mt-9">
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
          Email
        </label>
      </div>
      <button className='w-[95%] h-[50px] rounded-lg text-white bg-blue-700 mt-9'>
        Get OTP
      </button>
    </div>
  </div>

  )
}

export default Signup
