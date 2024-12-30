import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

const LogTime = ({ togglePopup }) => {
  const [formData, setFormData] = useState({
    issue: "",
    date: "",
    time: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    console.log("Form Data Submitted:", formData);
    togglePopup();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-10">
      <div className="bg-white w-full max-w-md sm:max-w-lg md:w-[500px] rounded-[12px] p-[16px] sm:p-[20px] relative mx-4 sm:mx-0">
        <h2 className="text-lg sm:text-xl font-bold mb-4">Log Time</h2>

        <div className="flex flex-col gap-4">
          <div className="relative">
            <FaSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              name="issue"
              placeholder="Search issues"
              value={formData.issue}
              onChange={handleChange}
              className="w-full border-2 pl-10 pr-3 py-2 text-[#7A869A] border-[#DFE1E6] focus:outline-none"
            />
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="w-full border-2 text-[#7A869A] px-3 py-2 border-[#DFE1E6] focus:outline-none"
              />
            </div>
            <div className="flex-1">
              <input
                type="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                className="w-full border-2 text-[#7A869A] px-3 py-2 border-[#DFE1E6] focus:outline-none"
              />
            </div>
          </div>

          <div>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows="2"
              className="w-full border-2 text-[#7A869A] px-3 py-2 border-[#DFE1E6] focus:outline-none"
              placeholder="description"
            />
          </div>
        </div>

        <div className="flex justify-end gap-4 mt-4">
          <button
            className="bg-gray-200 px-4 py-2 rounded hover:bg-gray-300"
            onClick={togglePopup}
          >
            Cancel
          </button>
          <button
            className="bg-[#0747A6] px-4 py-2 text-white rounded hover:bg-blue-600"
            onClick={handleSubmit}
          >
            Log time
          </button>
        </div>
      </div>
    </div>
  );
};

export default LogTime;
