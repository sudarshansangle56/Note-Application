import React from "react";
import Logo from "../Components/Logo";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const handleSignOut = () => {
    // remove token or user data
    localStorage.removeItem("token"); 
    localStorage.removeItem("user"); 

    
    navigate("/login");
  };

  return (
    <div className="h-[60px] flex items-center justify-between px-5">
      <div className="flex gap-2">
        <Logo />
        <h1 className="font-semibold text-[25px]">Dashboard</h1>
      </div>

      <button
        onClick={handleSignOut}
        className="text-[#6760eb] font-semibold border-b-2 border-[#7d52e1] hover:text-red-500 transition"
      >
        Sign Out
      </button>
    </div>
  );
}

export default Navbar;
