import React, { useState } from "react"
import { Eye, EyeOff } from "lucide-react"
import { useNavigate } from "react-router-dom"

function Loginpage() {
  const [showOtp, setShowOtp] = useState(false)
  const [form, setForm] = useState({ email: "", otp: "" })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const navigate = useNavigate()

  const handleChange = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value })
  }

  // Request OTP
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
        body: JSON.stringify({ email: form.email }),
      })
      const data = await res.json()
      if (res.ok) {
        alert("OTP sent! (check backend console if using test)")
      } else {
        setError(data.message || "Failed to send OTP")
      }
    } catch (err) {
      setError("Server error")
    } finally {
      setLoading(false)
    }
  }

  // Verify OTP
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
        body: JSON.stringify({ email: form.email, otp: form.otp }),
      })
      const data = await res.json()
      if (res.ok) {
        localStorage.setItem("token", data.token)
        localStorage.setItem("user", JSON.stringify(data.user))
        navigate("/")
      } else {
        setError(data.message || "Invalid OTP")
      }
    } catch (err) {
      setError("Server error")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex items-center justify-center h-[680px] bg-white px-3 gap-5">
      <div className="w-[40%] p-4 sm:px-[7%]">
        <h2 className="text-2xl font-bold sm:text-start text-center mb-2">
          Sign In
        </h2>
        <p className="text-gray-500 sm:text-start text-center mb-6">
          Please login to continue to your account.
        </p>

        {/* Email */}
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

        {/* OTP */}
        <div className="relative mt-9">
          <input
            type={showOtp ? "text" : "password"}
            id="otp"
            value={form.otp}
            onChange={handleChange}
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

        {/* Error */}
        {error && <p className="text-red-500 mt-2">{error}</p>}

        {/* Buttons */}
        <div className="mt-5 flex flex-col gap-3">
          <button
            onClick={getOtp}
            disabled={loading}
            className="w-[95%] h-[50px] rounded-lg text-white bg-blue-700"
          >
            {loading ? "Sending..." : "Get OTP"}
          </button>
          <button
            onClick={verifyOtp}
            disabled={loading}
            className="w-[95%] h-[50px] rounded-lg text-white bg-green-700"
          >
            {loading ? "Verifying..." : "Sign in"}
          </button>
        </div>

        <h1 className="mt-3 text-center text-gray-500">
          Need an account??{" "}
          <a className="text-[#335db9]" href="/signup">
            Create one
          </a>
        </h1>
      </div>

      <div className="sm:w-[60%] hidden sm:block">
        <img
          className="rounded-2xl w-full h-[670px]"
          src="/blue.png"
          alt="login illustration"
        />
      </div>
    </div>
  )
}

export default Loginpage
