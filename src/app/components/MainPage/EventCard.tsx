import React from "react";
import { Post } from "../../../../types/PostType";
import Link from "next/link";
import { formatDate } from "../../../../util/dateFormatter";

export default function EventCard({ data }: { data: Post }) {
  console.log(data);

  return (
    <div className="relative h-[480px] shadow-custom bg-slate-50 rounded-lg font-poppins group">
      <div className="absolute flex left-3 top-3 text-[14px] ">
        <p className="bg-slate-50 text-main  rounded-lg px-[12px] py-[6px]">
          {data.category}
        </p>
        <p
          className={`bg-slate-50 ml-[12px] rounded-lg px-[12px] py-[6px] ${
            data.priority === "low"
              ? "text-green-500"
              : data.priority === "medium"
              ? "text-yellow-500"
              : "text-rose-700"
          }`}
        >
          {data.priority}
        </p>
      </div>

      <img
        src={data.img}
        alt={data.title}
        className="rounded-t-lg h-4/5 w-full object-cover"
      />

      <div className="absolute bottom-0 w-full">
        <div
          className=" flex justify-between w-full px-[16px] py-[8px] 
         text-main bg-slate-50 bg-opacity-80 text-sm "
        >
          <p>
            {formatDate(data.date)} <span className="px-[2px]">at</span>{" "}
            {data.time}
          </p>
          <p>{data.location}</p>
        </div>
        <div className="p-[16px] bg-slate-50 rounded-b-lg">
          <p className=" text-base font-bold mb-[8px] text-ellipsis overflow-hidden line-clamp-1">
            {data.title}
          </p>
          <p className=" text-sm  my-[8px] text-ellipsis overflow-hidden line-clamp-3">
            {data.description}
          </p>
        </div>
        <div className=" hidden group-hover:flex justify-end w-full">
          <Link
            href={`/event/${data._id}`}
            className=" mr-4 mb-4 px-[24px] py-[10px] rounded-lg text-white
             bg-main hover:bg-action ease-in duration-300"
          >
            More info
          </Link>
        </div>
      </div>
    </div>
  );
}
