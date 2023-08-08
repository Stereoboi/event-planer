"use client";
import React, { useState } from "react";
import Link from "next/link";
import { IoIosAdd } from "react-icons/io";
import { LiaFilterSolid } from "react-icons/lia";
import { categories } from "../../../../util/variables";
import { useRouter } from "next/navigation";
export default function ButtonGroup() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Category");

  const toggleSelect = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option: string) => {
    router.push(`/sorted/${option}`);
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className="lg:flex lg: flex-row-reverse  items-center justify-between">
      <div className="flex flex-row-reverse font-poppins mb-[40px] md:mb-[24px] lg:mb-[40px]">
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
                {categories.map((el) => {
                  return (
                    <li
                      className="border-b-2  border-slate-400 p-2 text-slate-400 hover:text-action"
                      onClick={() => handleOptionClick(el.value)}
                      key={el.value}
                    >
                      {el.label}
                    </li>
                  );
                })}
              </ul>
            </>
          )}
        </div>
      </div>
      <h2 className="hidden md:block md:mb-[24px] md:text-[32px] font-semibold font-poppins">
        My events
      </h2>
    </div>
  );
}
