"use client";
import React, { useState } from "react";
import { IoIosClose } from "react-icons/io";

export default function InputField({
  label,
  id,
  name,
  type,
  value,
  onChange,
  error,
}: {
  label: string;
  id: string;
  name: string;
  type: string;
  value: string;
  onChange: any;
  error: any;
}) {
  const [isActive, setIsActive] = useState(false);

  const clearInput = () => {
    onChange({ target: { name, value: "" } });
    setIsActive(false);
  };

  return (
    <div className="relative font-poppins mb-[20px]">
      {isActive && type === "text" && value && (
        <div className="absolute cursor-pointer top-9 right-2 hover-icon">
          <IoIosClose
            size={25}
            color="#7B61FF"
            strokeWidth={1}
            onClick={clearInput}
          />
        </div>
      )}
      <div className=" mb-1 flex  items-center justify-between">
        <label htmlFor={id} className="block  text-sm font-medium text-main">
          {label}
        </label>
        <p className=" text-xs text-red-600">{error}</p>
      </div>
      <input
        id={id}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        onFocus={() => setIsActive(true)}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5"
      />
    </div>
  );
}
