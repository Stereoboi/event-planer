import React from "react";
import SearchInput from "./Input";
import Link from "next/link";
export default function Navbar() {
  return (
    <div
      className=" border-b-2 border-main flex flex-col p-[24px] 
     md:flex-row md:items-center md:justify-between md:pt-[18px] md:px-[40px] md:pb-[18px]
     lg:py-[22px] lg:px-[80px] 
     "
    >
      <Link
        href={"/"}
        className="font-alata text-[24px] text text-main mb-[31px]  \
      md:mb-[0] cursor-pointer
      "
      >
        Event Planner
      </Link>
      <SearchInput />
    </div>
  );
}
