"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Post } from "../../../../types/PostType";
import Link from "next/link";
import { formatDate } from "../../../../util/dateFormatter";
import deleteNewsById from "../../../../lib/deleteEventById";
import { redirect } from "next/navigation";

export default function EventCard({ data }: { data: Post }) {
  const router = useRouter();
  const [state, setState] = useState(false);
  useEffect(() => {
    if (state) {
      const deleteEvent = async () => {
        await deleteNewsById(data._id);
        router.back();
        router.refresh();
      };
      deleteEvent();
    }
  }, [state]);

  const deleteEvent = async () => {
    setState(true);
  };

  // const editEvent = () => {
  //   router
  // }

  return (
    <div className="font-poppins bg-slate-50 shadow-custom rounded-lg  ">
      {/* <h1 className="absolute top-28 font-semibold  text-[24px] md:text-[32px] text-main">
        {data.title}
      </h1> */}
      <div className="">
        <img
          src={data.img}
          alt={data.title}
          className="max-h-[168px] md:max-h-[272px] w-full object-cover rounded-lg"
        />
        <div className="px-[16px] md:px-[24px] lg:px-[16px] pt-[20px] pb-[40px] ">
          <p className="font-normal text-[14px] pb-[24px]">
            {data.description}
          </p>
          <div className="flex flex-wrap ">
            <p className="font-semibold text-[14px] px-[12px] py-[6px] mr-[12px] rounded-lg shadow-custom text-main break-words mb-[12px]">
              {data.category}
            </p>
            <p
              className={` text-[14px] px-[12px] py-[6px] mr-[12px] rounded-lg shadow-custom break-words mb-[12px] font-semibold ${
                data.priority === "low"
                  ? "text-green-500"
                  : data.priority === "medium"
                  ? "text-yellow-500"
                  : "text-rose-700"
              }`}
            >
              {data.priority}
            </p>
            <p className="font-semibold text-[14px] px-[12px] py-[6px] mr-[12px] rounded-lg shadow-custom text-main break-words mb-[12px]">
              {data.location}
            </p>
            <p className="font-semibold text-[14px] px-[12px] py-[6px] mr-[12px]  rounded-lg shadow-custom text-main break-words mb-[12px]">
              {formatDate(data.date)} <span className="px-[2px]">at</span>{" "}
              {data.time}
            </p>
          </div>
          <div className="mt-[28px] flex justify-between md:justify-end">
            <a
              href={`/edit/${data._id}`}
              className="px-[42.5px] py-[8px] text-sm font-poppins text-main rounded-lg 
              border-2 border-main cursor-pointer hover:bg-slate-200
              md:mr-[16px] ease-in duration-300 "
            >
              Edit
            </a>

            <button
              onClick={deleteEvent}
              className="px-[16px] py-[8px] text-sm font-poppins bg-main rounded-lg 
              border-2 border-main text-white cursor-pointer hover:bg-action ease-in duration-300"
            >
              Delete Event
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

/* SERVER ACTION VARIANT OF DELETING EVENT */

// import React from "react";
// import { Post } from "../../../../types/PostType";
// import Link from "next/link";
// import { formatDate } from "../../../../util/dateFormatter";
// import deleteNewsById from "../../../../lib/deleteEventById";
// import { redirect } from "next/navigation";

// export default function EventCard({ data }: { data: Post }) {
//   async function deleteEvent(e: FormData) {
//     "use server";
//     const event = e.get("delete")?.toString();
//     await deleteNewsById(event!);
//     redirect("/success");

//   }

//   return (
//     <div className="font-poppins bg-slate-50 shadow-custom rounded-lg  ">
//       {/* <h1 className="absolute top-28 font-semibold  text-[24px] md:text-[32px] text-main">
//         {data.title}
//       </h1> */}
//       <div className="">
//         <img
//           src={data.img}
//           alt={data.title}
//           className="max-h-[168px] md:max-h-[272px] w-full object-cover rounded-lg"
//         />
//         <div className="px-[16px] md:px-[24px] lg:px-[16px] pt-[20px] pb-[40px] ">
//           <p className="font-normal text-[14px] pb-[24px]">
//             {data.description}
//           </p>
//           <div className="flex flex-wrap ">
//             <p className="font-semibold text-[14px] px-[12px] py-[6px] mr-[12px] rounded-lg shadow-custom text-main break-words mb-[12px]">
//               {data.category}
//             </p>
//             <p
//               className={` text-[14px] px-[12px] py-[6px] mr-[12px] rounded-lg shadow-custom break-words mb-[12px] font-semibold ${
//                 data.priority === "low"
//                   ? "text-green-500"
//                   : data.priority === "medium"
//                   ? "text-yellow-500"
//                   : "text-rose-700"
//               }`}
//             >
//               {data.priority}
//             </p>
//             <p className="font-semibold text-[14px] px-[12px] py-[6px] mr-[12px] rounded-lg shadow-custom text-main break-words mb-[12px]">
//               {data.location}
//             </p>
//             <p className="font-semibold text-[14px] px-[12px] py-[6px] mr-[12px]  rounded-lg shadow-custom text-main break-words mb-[12px]">
//               {formatDate(data.date)} <span className="px-[2px]">at</span>{" "}
//               {data.time}
//             </p>
//           </div>
//           <div className="mt-[28px] flex justify-between md:justify-end">
//             <Link
//               href={"/"}
//               className="px-[42.5px] py-[8px] text-sm font-poppins text-main rounded-lg
//               border-2 border-main cursor-pointer
//               md:mr-[16px]"
//             >
//               Edit
//             </Link>
//             <form action={deleteEvent}>
//               <button
//                 type="submit"
//                 name="delete"
//                 value={data._id}
//                 // href={"/"}
//                 className="px-[16px] py-[8px] text-sm font-poppins bg-main rounded-lg
//               border-2 border-main text-white cursor-pointer hover:bg-action"
//               >
//                 Delete Event
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
