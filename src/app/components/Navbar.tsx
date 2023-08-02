import React from "react";
import SearchInput from "./Input";
export default function Navbar() {
  return (
    <div
      className=" border-b-2 border-action flex flex-col p-[24px] 
     md:flex-row md:items-center md:justify-between md:pt-[18px] md:px-[40px] md:pb-[18px]
     lg:py-[22px] lg:px-[80px] 
     "
    >
      <h1
        className="font-alata text-[24px] text text-action mb-[31px]  \
      md:mb-[0]
      "
      >
        Event Planner
      </h1>
      <SearchInput />
    </div>
  );
}
