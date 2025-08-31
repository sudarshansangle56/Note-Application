import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import Logo from "../Components/Logo"

function Signup() {
  const [showOtp, setShowOtp] = useState(false)
  const [form, setForm] = useState({ name: "", dob: "", email: "", otp: "" })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const navigate = useNavigate()

  const handleChange = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value })
  }

  const getOtp = async () => {
    if (!form.email) {
      setError("Email is required")
      return
    }
    setError("")
    setLoading(true)
    try {
      const res = await fetch("http://localhost:5000/auth/request-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: form.email })
      })
      const data = await res.json()
      if (res.ok) {
        setShowOtp(true)
      } else {
        setError(data.message || "Failed to send OTP")
      }
    } catch (err) {
      setError("Server error")
      console.log(err)
    } finally {
      setLoading(false)
    }
  }

  const verifyOtp = async () => {
    if (!form.otp) {
      setError("Enter OTP")
      return
    }
    setError("")
    setLoading(true)
    try {
      const res = await fetch("http://localhost:5000/auth/verify-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: form.email, otp: form.otp })
      })
      const data = await res.json()
      if (res.ok) {
        localStorage.setItem("token", data.token)
        localStorage.setItem("user", JSON.stringify(data.user))
        navigate("/dashboard")
      } else {
        setError(data.message || "Invalid OTP")
      }
    } catch (err) {
      setError("Server error")
      console.log(err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex items-center justify-center h-[680px] bg-white px-3 gap-5">
      <div className="w-[40%] p-4 sm:px-[7%]">
        <h2 className="text-2xl font-bold sm:text-start text-center mb-2">
          Sign up
        </h2>
        <p className="text-gray-500 sm:text-start text-center mb-6">
          Sign up to enjoy the feature of HD
        </p>

        <div className="relative">
          <input
            type="text"
            id="name"
            value={form.name}
            onChange={handleChange}
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
            id="dob"
            value={form.dob}
            onChange={handleChange}
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

        <div className="relative mt-9">
          <input
            type="text"
            id="email"
            value={form.email}
            onChange={handleChange}
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

        {showOtp && (
          <div className="relative mt-9">
            <input
              type="text"
              id="otp"
              value={form.otp}
              onChange={handleChange}
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

        {error && <p className="text-red-500 mt-2">{error}</p>}

        {!showOtp ? (
          <button
            className="w-[95%] h-[50px] rounded-lg text-white bg-blue-700 mt-9"
            onClick={getOtp}
            disabled={loading}
          >
            {loading ? "Sending..." : "Get OTP"}
          </button>
        ) : (
          <button
            className="w-[95%] h-[50px] rounded-lg text-white bg-green-700 mt-9"
            onClick={verifyOtp}
            disabled={loading}
          >
            {loading ? "Verifying..." : "Verify OTP"}
          </button>
        )}

        <h1 className="mt-3 text-center text-gray-500">
          Already have an account??{" "}
          <a className="text-[#335db9]" href="/login">
            Sign in
          </a>
        </h1>
      </div>

      <div className="sm:w-[60%] hidden sm:block">
        <img
          className="rounded-2xl w-full h-[670px]"
          src="/blue.png"
          alt=""
        />
      </div>
    </div>
  )
}

export default Signup
