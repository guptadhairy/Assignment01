import React from "react";
import { IoSearch } from "react-icons/io5";
import { IoMdArrowDropdown } from "react-icons/io";

const LeftCard2 = () => {
  return (
    <div className="mt-14 mx-14 border shadow-xl rounded py-6 px-4 w-80">
      <div className="flex justify-between pr-6">
        <h2 className="text-md text-purple-900 font-semibold tracking-wider">
          SEARCH
        </h2>
        <IoMdArrowDropdown size={"25px"} color="purple" />
      </div>
      <div className="flex mt-4 bg-gray-100 rounded px-4 py-1 text-sm ">
        <input
          className="pl-2 bg-transparent outline-none flex-grow "
          placeholder="Search Name..."
        />
        <IoSearch className="text-gray-500 mx-2 my-auto" />
      </div>
      <hr className="h-0.2 bg-black w-full mt-5" />
      <div className="flex justify-between pr-6 mt-5">
        <h2 className="text-md text-purple-900 font-semibold tracking-wider">
          VACENCY TYPE
        </h2>
        <IoMdArrowDropdown size={"25px"} color="purple" />
      </div>
      <div className="mt-5 flex flex-col gap-2">
        <div className="flex gap-5">
          <input type="checkbox" />
          <h3 className="text-xs font-medium">Accounting</h3>
        </div>
        <div className="flex gap-5">
          <input type="checkbox" />
          <h3 className="text-xs font-medium">Automotive & Repair</h3>
        </div>
        <div className="flex gap-5">
          <input type="checkbox" />
          <h3 className="text-xs font-medium">Banking</h3>
        </div>
        <div className="flex gap-5">
          <input type="checkbox" />
          <h3 className="text-xs font-medium">Design</h3>
        </div>
        <div className="flex gap-5">
          <input type="checkbox" />
          <h3 className="text-xs font-medium">Digital</h3>
        </div>
        <div className="flex gap-5">
          <input type="checkbox" />
          <h3 className="text-xs font-medium">Education</h3>
        </div>
        <div className="flex gap-5">
          <input type="checkbox" />
          <h3 className="text-xs font-medium">Engineering</h3>
        </div>
        <div className="flex gap-3">
          <h3 className="text-xs font-medium ml-8">More</h3>
          <IoMdArrowDropdown size={"15px"} color="purple" />
        </div>
        <hr className="h-0.2 bg-black w-full mt-5" />
      </div>
      <div>
        <div className="flex justify-between pr-6 mt-5">
          <h2 className="text-md text-purple-900 font-semibold tracking-wider">
            DATE POSTED
          </h2>
          <IoMdArrowDropdown size={"25px"} color="purple" />
        </div>
        <div className="mt-5 flex flex-col gap-2">
        <div className="flex gap-5">
          <input type="radio" />
          <h3 className="text-xs font-medium">Last 6 Hours</h3>
        </div>
        <div className="flex gap-5">
          <input type="radio" />
          <h3 className="text-xs font-medium">Last 6 Hours</h3>
        </div>
        <div className="flex gap-5">
          <input type="radio" />
          <h3 className="text-xs font-medium">Last 6 Hours</h3>
        </div>
        <div className="flex gap-5">
          <input type="radio" />
          <h3 className="text-xs font-medium">Last 6 Hours</h3>
        </div>
        <div className="flex gap-5">
          <input type="radio" />
          <h3 className="text-xs font-medium">Last 6 Hours</h3>
        </div>
        <div className="flex gap-5">
          <input type="radio" />
          <h3 className="text-xs font-medium">All</h3>
        </div>
        </div>
      </div>
    </div>
  );
};

export default LeftCard2;
