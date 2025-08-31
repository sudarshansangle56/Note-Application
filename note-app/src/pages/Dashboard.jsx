import React from "react";
import { Trash2 } from "lucide-react";
import Logo from "../Components/Logo";
import Navbar from "../Components/Navbar";

function Dashboard() {
  return (
    <div className="px-4">
      <Navbar />
      <div className="border-2 border-[#222222a7] rounded-xl p-7 mt-4">
        <h1 className="font-bold text-lg sm:text-xl">
          Welcome , Jonas Kahnwald !
        </h1>
        <p className="text-sm sm:text-base">Email: xxxx@xxx.com</p>
      </div>

      <div className="mt-5 space-y-4 max-w-lg">
        <div className="flex items-center justify-between bg-[#dbdbdb] rounded-lg px-4 py-2">
          <h1 className="text-sm sm:text-base">Note 1</h1>
          <button className="text-black hover:text-red-800">
            <Trash2 size={20} />
          </button>
        </div>
        <div className="flex items-center justify-between bg-[#dbdbdb] rounded-lg px-4 py-2">
          <h1 className="text-sm sm:text-base">Note 2</h1>
          <button className="text-black hover:text-red-800">
            <Trash2 size={20} />
          </button>
        </div>
      </div>

      <button className="w-full sm:w-[95%] h-[50px] rounded-lg text-white bg-blue-700 mt-9">
        Create Note
      </button>
    </div>
  );
}

export default Dashboard;
