import React, { useState } from "react";
import moment from "moment";
import Sheet from "./Sheet";
import { AiFillThunderbolt } from "react-icons/ai";

// Dummy JSON Data for Table
const dummyData = {
  rows: [
    {
      issue: "ATL-0011 Issue summary",
      logged: "0",
      data: Array(15).fill(""), // Empty cells
    },
    {
      issue: "ATL-0011 Issue summary",
      logged: "4.5",
      data: Array(15).fill(""), // Empty cells
    },
    {
      issue: "ATL-0011 Issue summary",
      logged: "4.5",
      data: Array(15).fill(""), // Empty cells
    },
    {
      issue: "ATL-0011 Issue summary",
      logged: "4.5",
      data: Array(15).fill("4.5"), // Some cells have data
    },
    {
      issue: "ATL-0011 Issue summary",
      logged: "4.5",
      data: Array(15).fill(""), // Empty cells
    },
    {
      issue: "ATL-0011 Issue summary",
      logged: "4.5",
      data: Array(15).fill(""), // Empty cells
    },
    {
      issue: "ATL-0011 Issue summary",
      logged: "4.5",
      data: Array(15).fill("4.5"), // Some cells have data
    },
    {
      issue: "ATL-0011 Issue summary",
      logged: "4.5",
      data: Array(15).fill(""), // Empty cells
    },
    {
      issue: "ATL-0011 Issue summary",
      logged: "4.5",
      data: Array(15).fill(""), // Empty cells
    },
    {
      issue: "ATL-0011 Issue summary",
      logged: "4.5",
      data: Array(15).fill(""), // Empty cells
    },
  ],
};

const generateDates = () => {
  const startDate = moment().startOf("day");
  return Array.from({ length: 15 }, (_, i) => startDate.clone().add(i, "days"));
};

const CustomCalendar = () => {
  const [hoveredRowIndex, setHoveredRowIndex] = useState(null);
  const dates = generateDates();
  const today = moment().format("YYYY-MM-DD");

  const getTotalForDay = (dayIndex) => {
    return dummyData.rows.reduce((total, row) => {
      const loggedHours = parseFloat(row.data[dayIndex]) || 0;
      return total + loggedHours;
    }, 0);
  };

  return (
    <div className="font-rubik font-normal">
      <Sheet />

      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300 text-sm">
          <thead>
            <tr>
              <th
                rowSpan={2}
                className="border border-gray-300 text-[#6B778C] px-2 py-2 text-left font-normal text-[14px]"
              >
                Issue
              </th>
              <th
                rowSpan={2}
                className="border border-gray-300 text-[#6B778C]  py-2 text-center font-normal text-[14px]"
              >
                Logged
              </th>
              {dates.map((date, index) => {
                const isWeekend = date.day() === 0 || date.day() === 6;
                return (
                  <th
                    key={index}
                    className={`border px-2 py-1 text-center font-normal text-[10px] ${
                      isWeekend ? "bg-[#EBECF0]" : ""
                    }`}
                  >
                    <div className="flex flex-col">
                      <div className="text-[#6B778C]">{date.format("ddd")}</div>
                      <div className="text-[14px]">{date.format("D")}</div>
                    </div>
                  </th>
                );
              })}
            </tr>
          </thead>

          <tbody>
            {dummyData.rows.map((row, rowIndex) => (
              <tr
                key={rowIndex}
                onMouseEnter={() => setHoveredRowIndex(rowIndex)}
                onMouseLeave={() => setHoveredRowIndex(null)}
                className={`${
                  hoveredRowIndex === rowIndex ? "bg-[#E9F2FF]" : ""
                }`}
              >
                <td className="border px-4 py-2 text-[10px]">
                  <div className="flex items-center gap-2">
                    <div className="flex items-center justify-center p-2 bg-[#633EFF] w-8 h-8 rounded-[5px]">
                      <AiFillThunderbolt size={30} className="text-white" />
                    </div>
                    <span>{row.issue}</span>
                  </div>
                </td>
                <td className="border  px-4 py-2 text-[14px]">{row.logged}</td>
                {row.data.map((cellData, cellIndex) => {
                  const isWeekend =
                    dates[cellIndex].day() === 0 ||
                    dates[cellIndex].day() === 6;

                  return (
                    <td
                      key={cellIndex}
                      className={`border px-2 py-1 text-center text-[#6B778C] text-[10px] ${
                        isWeekend ? "bg-[#EBECF0]" : ""
                      } ${hoveredRowIndex === rowIndex ? "bg-[#E9F2FF] hover:bg-[#B3D4FF]" : ""}`}
                    >
                      {cellData}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>

          <tfoot>
            <tr>
              <td
                colSpan={2}
                className="border border-gray-300 px-4 py-2 text-[10px] font-normal bg-[#F4F5F7]"
              >
                <div className="flex justify-between text-[14px] font-semibold">
                  <span>Total</span>
                  <span>75.5%</span>
                </div>
              </td>
              {dates.map((_, index) => {
                const isWeekend =
                  dates[index].day() === 0 || dates[index].day() === 6;
                return (
                  <td
                    key={index}
                    className={`border border-gray-300 px-2 py-1 text-center text-[10px] font-normal ${
                      isWeekend ? "bg-[#EBECF0]" : ""
                    }`}
                  >
                    {getTotalForDay(index).toFixed(2)}
                  </td>
                );
              })}
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default CustomCalendar;
