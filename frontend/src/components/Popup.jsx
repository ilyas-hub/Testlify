import React from "react";
import { FaRegCalendarAlt } from "react-icons/fa";
import { format } from "date-fns";

const Popup = ({
  startDate,
  endDate,
  handleDateSelect,
  handleQuickSelect,
  onCancel,
  onApply,
}) => {
  return (
    <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 bg-white shadow-md p-4 rounded-[12px] w-[70%] lg:w-[70%] md:w-[90%] sm:w-[95%] max-h-[80vh] overflow-auto border">
      <div className="flex flex-col md:flex-col sm:flex-col lg:flex-row gap-4">
        <div className="flex-1 mb-4 md:mb-0 sm:mb-4">
          <div className="relative mb-6 font-semibold">
            <p className="font-semibold text-[10px] sm:text-[12px] text-[#6B778C] mb-1">
              Start date
            </p>
            <div className="border p-2 rounded-md cursor-pointer border-[#F4F5F7] bg-[#F4F5F7] px-3 py-2 flex items-center gap-2 justify-between">
              <input
                type="text"
                value={startDate ? format(startDate, "dd/MMM/yyyy") : ""}
                readOnly
                className="focus:outline-none bg-[#F4F5F7] font-normal text-[12px] sm:text-[14px] text-[#7A869A]"
                placeholder="Start Date"
              />
              <FaRegCalendarAlt size={16} />
            </div>
          </div>
          <h4 className="font-bold text-[12px] sm:text-[14px] mb-2 text-center text-[#172B4D]">
            {startDate ? format(startDate, "MMMM yyyy") : ""}
          </h4>
          <Calendar
            selectedDate={startDate}
            onDateChange={(date) => handleDateSelect(date, "start")}
          />
        </div>

        {/* End Date Calendar */}
        <div className="flex-1 mb-4 md:mb-0 sm:mb-4">
          <div className="relative mb-6">
            <p className="font-semibold text-[10px] sm:text-[12px] text-[#6B778C] mb-1">
              End Date
            </p>
            <div className="p-2 rounded-md cursor-pointer border border-[#F4F5F7] bg-[#F4F5F7] px-3 py-2 flex items-center gap-2 justify-between">
              <input
                type="text"
                value={endDate ? format(endDate, "dd/MMM/yyyy") : ""}
                readOnly
                className="focus:outline-none bg-[#F4F5F7] font-normal text-[12px] sm:text-[14px] text-[#7A869A]"
                placeholder="End Date"
              />
              <FaRegCalendarAlt size={16} />
            </div>
          </div>
          <h4 className="font-bold text-[12px] sm:text-[14px] mb-2 text-center text-[#172B4D]">
            {endDate ? format(endDate, "MMMM yyyy") : ""}
          </h4>
          <Calendar
            selectedDate={endDate}
            onDateChange={(date) => handleDateSelect(date, "end")}
          />
        </div>

        {/* Quick Select Options */}
        <div className="flex flex-col justify-center gap-2 mt-4 border-2 border-[#F4F5F7] rounded-[4px] text-[#0052CC] text-[12px] sm:text-[14px] font-semibold p-6 h-full md:mt-0 sm:mt-4 lg:mt-0">
          <button onClick={() => handleQuickSelect("currentWeek")}>
            Current Week
          </button>
          <button onClick={() => handleQuickSelect("lastWeek")}>
            Last Week
          </button>
          <button onClick={() => handleQuickSelect("currentMonth")}>
            Current Month
          </button>
          <button onClick={() => handleQuickSelect("lastMonth")}>
            Last Month
          </button>
          <button onClick={() => handleQuickSelect("currentQuarter")}>
            Current Quarter
          </button>
          <button onClick={() => handleQuickSelect("lastQuarter")}>
            Last Quarter
          </button>
        </div>
      </div>

      <div className="flex justify-end gap-5 mt-4 lg:justify-end md:justify-center sm:justify-center">
        <button
          className="text-[#0052CC] text-[12px] sm:text-[14px]"
          onClick={onCancel}
        >
          Cancel
        </button>
        <button
          className="bg-[#0052CC] px-4 py-2 text-white rounded hover:bg-blue-600 text-[12px] sm:text-[14px]"
          onClick={onApply}
        >
          Apply
        </button>
      </div>
    </div>
  );
};

const Calendar = ({ selectedDate, onDateChange }) => {
  const handleDateClick = (date) => {
    onDateChange(date);
  };

  return (
    <div className="grid grid-cols-7 gap-1 md:gap-2 sm:gap-1">
      {Array.from({ length: 30 }, (_, i) => {
        const date = new Date(2024, 5, i + 1); // Example June 2024 dates
        return (
          <button
            key={i}
            className={`py-1 px-2 md:py-2 md:px-3 sm:py-1 sm:px-2 rounded ${
              selectedDate?.getDate() === date.getDate()
                ? "bg-[#42526E] text-white"
                : "hover:bg-gray-200"
            } text-[10px] sm:text-[12px] md:text-[14px]`}
            onClick={() => handleDateClick(date)}
          >
            {date.getDate()}
          </button>
        );
      })}
    </div>
  );
};

export default Popup;
