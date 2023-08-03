"use client";
import React, { useState } from "react";
import Link from "next/link";
import { IoIosAdd } from "react-icons/io";
import { LiaFilterSolid } from "react-icons/lia";

export default function ButtonGroup() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Category");

  const toggleSelect = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className="flex flex-row-reverse font-poppins">
      <Link
        href="/create"
        className="cursor-pointer ml-[24px] shadow-custom
         flex hover:bg-action ease-in duration-300 bg-main p-[16px] 
         items-center align-middle justify-center rounded-md"
      >
        <IoIosAdd color="#ffffff" size={24} />
        <p className=" text-white hidden md:block">Add new event</p>
      </Link>
      <div
        className={`relative p-[16px] flex items-center align-middle justify-center shadow-custom
         bg-slate-50 rounded-lg cursor-pointer`}
        onClick={toggleSelect}
      >
        {!isOpen && (
          <>
            <LiaFilterSolid
              className="cursor-pointer"
              size={24}
              color="#7B61FF"
            />
            <p className="hidden md:block text-main">{selectedOption}</p>
          </>
        )}

        {isOpen && (
          <>
            <LiaFilterSolid size={24} color="#7B61FF" />

            <p className="text-main">{selectedOption}</p>
            <ul className="absolute top-[53px] left-0 z-10 bg-white rounded-b-lg shadow-md w-full">
              <li
                className="border-b-2 border-t-2 border-slate-400 p-2 text-slate-400 hover:text-action"
                onClick={() => handleOptionClick("1 variant")}
              >
                1 variant
              </li>
              <li
                className="border-b-2  border-slate-400 p-2 text-slate-400 hover:text-action"
                onClick={() => handleOptionClick("2 variant")}
              >
                2 variant
              </li>
              <li
                className=" border-slate-400 p-2 text-slate-400 hover:text-action"
                onClick={() => handleOptionClick("3 variant")}
              >
                3 variant
              </li>
            </ul>
          </>
        )}
      </div>
    </div>
  );
}
