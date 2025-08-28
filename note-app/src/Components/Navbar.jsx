import React from "react";
import Logo from "../Components/Logo";
function Navbar() {
  return (
    <div className="h-[60px] flex items-center justify-between px-5 ">
      <div className="flex gap-2 ">
        <Logo />
        <h1 className="font-semibold text-[25px]">Dashboard</h1>
      </div>
      <h1 className="text-[#6760eb] font-semibold border-b-2 border-[#7d52e1]">Sign Out</h1>
    </div>
  );
}

export default Navbar;
