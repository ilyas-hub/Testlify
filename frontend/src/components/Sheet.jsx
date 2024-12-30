import React, { useState } from "react";
import { FaRegCalendarAlt } from "react-icons/fa";
import { FaRegCircleQuestion } from "react-icons/fa6";
import { format } from "date-fns";
import Popup from "./Popup";
import profile from "../assets/img.jpg";
import LogTime from "./LogTime";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";

const Sheet = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [showPopup, setShowPopup] = useState(false);
  const [showLogTime, setShowLogTime] = useState(false);

  const toggleLogTime = () => setShowLogTime(!showLogTime);
  const togglePopup = () => setShowPopup(!showPopup);

  const handleDateSelect = (date, type) => {
    if (type === "start") setStartDate(date);
    else setEndDate(date);
  };

  const handleQuickSelect = (option) => {
    const today = new Date();
    let start, end;
  
    switch (option) {
      case "currentWeek":
        start = new Date(today.setDate(today.getDate() - today.getDay()));
        end = new Date(today.setDate(today.getDate() - today.getDay() + 6));
        break;
      case "lastWeek":
        start = new Date(today.setDate(today.getDate() - today.getDay() - 7));
        end = new Date(today.setDate(today.getDate() - today.getDay() - 1));
        break;
      case "currentMonth":
        start = new Date(today.getFullYear(), today.getMonth(), 1);
        end = new Date(today.getFullYear(), today.getMonth() + 1, 0);
        break;
      case "lastMonth":
        start = new Date(today.getFullYear(), today.getMonth() - 1, 1);
        end = new Date(today.getFullYear(), today.getMonth(), 0);
        break;
      case "currentQuarter":
        const currentQuarter = Math.floor(today.getMonth() / 3);
        start = new Date(today.getFullYear(), currentQuarter * 3, 1);
        end = new Date(today.getFullYear(), (currentQuarter + 1) * 3, 0);
        break;
      case "lastQuarter":
        const lastQuarter = Math.floor((today.getMonth() - 3) / 3);
        start = new Date(today.getFullYear(), lastQuarter * 3, 1);
        end = new Date(today.getFullYear(), (lastQuarter + 1) * 3, 0);
        break;
      default:
        return;
    }
  
    setStartDate(start);
    setEndDate(end);
  };
  

  const applyDates = () => {
    setShowPopup(false);
  };

  return (
    <div className="flex flex-col sm:flex-row sm:justify-between items-center p-4 gap-4 bg-white ">
      <div className="flex flex-col gap-3 ">
        <div className="flex gap-3 items-center py-2">
          <img
            src={profile}
            alt="profile"
            className="object-cover w-10 h-10 sm:w-12 sm:h-12 rounded-full"
          />
          <div className="font-medium text-gray-800">Divya Shah</div>
        </div>
        <div className="flex gap-10 items-center">
          <div
            className="cursor-pointer border rounded px-3 py-2 flex items-center gap-2 text-gray-600"
            onClick={togglePopup}
          >
            <span>
              <MdKeyboardArrowLeft size={20} />
            </span>{" "}
            <FaRegCalendarAlt />
            {format(startDate, "dd/MMM/yyyy")} -{" "}
            {format(endDate, "dd/MMM/yyyy")}{" "}
            <span>
              <MdKeyboardArrowRight size={20} />
            </span>
          </div>
          <div className="text-[12px] font-normal text-[#6B778C]">
            <label htmlFor="period">
              <span className="pr-3">Group by</span>
              <select
                className="border rounded px-2 py-1 text-gray-600 pl-3 pr-8"
                name="period"
                id="period"
              >
                <option value="Issue">Issuse</option>
                <option value="Logged">Logged</option>
              </select>
            </label>
          </div>
        </div>
      </div>

      {/* Right Actions Section */}
      <div className="flex gap-4 items-center flex-wrap justify-center sm:justify-end">
        {/* Select Dropdown */}
        <select
          className="border rounded px-2 py-1 text-gray-600"
          name="period"
          id="period"
        >
          <option value="Day">Day</option>
          <option value="Month">Month</option>
        </select>

        {/* Log Time Button */}
        <button
          className="bg-[#0052CC] text-white px-4 py-1 rounded hover:bg-[#0041a8] transition"
          onClick={toggleLogTime}
        >
          Log Time
        </button>

        {/* LogTime Popup */}
        {showLogTime && <LogTime togglePopup={toggleLogTime} />}

        {/* Help Icon */}
        <FaRegCircleQuestion
          size={30}
          className="text-gray-500 hover:text-gray-700 transition"
        />
      </div>

      {/* Date Popup */}
      {showPopup && (
        <Popup
          startDate={startDate}
          endDate={endDate}
          handleDateSelect={handleDateSelect}
          handleQuickSelect={handleQuickSelect}
          onCancel={togglePopup}
          onApply={applyDates}
        />
      )}
    </div>
  );
};

export default Sheet;
