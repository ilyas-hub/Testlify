import React from "react";
import jira from "../assets/right.png";
import { IoMdSettings, IoIosDocument } from "react-icons/io";
import { MdOutlineGroups3 } from "react-icons/md";
import { FaRegCircleQuestion } from "react-icons/fa6";

const Rightsidebar = () => {
  return (
    <div className="flex flex-col justify-between h-full items-center border border-[#DFE1E6] bg-[#F4F5F7] w-16 sm:w-20 lg:w-24">
      <div className="flex flex-col items-center gap-6 pt-4">
        <div className="w-10 h-10 flex items-center">
          <img src={jira} alt="jira-img" className="object-cover" />
        </div>
        <div className="flex flex-col items-center gap-6">
          <MdOutlineGroups3 size={24} />
          <IoIosDocument size={24} />
          <IoMdSettings size={24} />
        </div>
      </div>
      <div className="pb-4">
        <FaRegCircleQuestion size={24} />
      </div>
    </div>
  );
};

export default Rightsidebar;
