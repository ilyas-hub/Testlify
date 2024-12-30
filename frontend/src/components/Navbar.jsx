import React from "react";
import { IoMdSquare } from "react-icons/io";
import jira from "../assets/jiralogo.jpg";
import { FiSearch } from "react-icons/fi";
import { TbBellRinging2Filled } from "react-icons/tb";
import { FaQuestionCircle, FaChevronDown } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import profile from "../assets/img.jpg";

const Navbar = () => {
  return (
    <nav className="flex flex-wrap items-center justify-between px-4 bg-white shadow-md text-[14px]">
      <div className="flex gap-5 items-center">
        <IoMdSquare size={40} />
        <div className="w-[70px] h-[70px] flex items-center sm:w-[20px] sm:h-[20px] md:w-[70px] md:h-[70px]">
          <img src={jira} alt="jira-img" className="object-cover" />
        </div>

        <div>Your Work</div>

        <div className="hidden sm:flex items-center gap-10">
          <div className="flex items-center gap-1">
            Projects Filters <FaChevronDown size={10} />
          </div>
          <div className="flex items-center gap-1">
            Dashboards <FaChevronDown size={10} />
          </div>
          <div className="flex items-center gap-1">
            People <FaChevronDown size={10} />
          </div>
          <div className="flex items-center gap-1">
            Apps <FaChevronDown size={10} />
          </div>
        </div>

        <button className="bg-[#0052CC] px-4 py-1 rounded text-white">
          Create
        </button>
      </div>

      <div className="flex items-center gap-5">
        <div className="relative max-w-sm w-full">
          <input
            type="text"
            placeholder="Search"
            className="w-full border border-gray-300 rounded py-2 px-10 focus:outline-none"
          />
          <FiSearch
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            size={20}
          />
        </div>

        {/* Icons */}
        <div className="flex items-center gap-4">
          <TbBellRinging2Filled className="text-gray-600"size={35} />
          <FaQuestionCircle className="text-gray-600"size={35} />
          <IoMdSettings className="text-gray-600"size={35} />
          <img
            src={profile}
            alt="profile"
            className="w-10 h-10 object-cover rounded-full"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
