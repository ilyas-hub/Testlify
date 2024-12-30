import React from "react";
import Navbar from "../components/Navbar";
import Rightsidebar from "../components/Rightsidebar";
import CustomCalendar from "../components/CustomCalendar";

const TimeSheetReport = () => {
  return (
    <div className="flex flex-col h-full w-full">
      <div className="w-full relative z-10 shadow-md bg-white">
        <Navbar />
      </div>

      <div className="flex flex-1 flex-col md:flex-row">
        <div className="hidden md:block w-[5%] bg-gray-100">
          <Rightsidebar />
        </div>

        <div className="flex-1 h-full bg-white ">
          <CustomCalendar />
        </div>
      </div>
    </div>
  );
};

export default TimeSheetReport;
