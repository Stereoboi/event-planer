"use client";

import { useRouter } from "next/navigation";
import { BsArrowLeft } from "react-icons/bs";

export default function BackButton() {
  const router = useRouter();

  return (
    <button
      className=" flex w-fit  items-center text-main font-poppins hover:text-action mb-[24px] lg:mb-[17px]"
      type="button"
      onClick={() => router.back()}
    >
      <BsArrowLeft size={24} />
      <span className="ml-[8px] font-[14px]">Back</span>
    </button>
  );
}
