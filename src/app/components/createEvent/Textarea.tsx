import React, { useState } from "react";
import { IoIosClose } from "react-icons/io";

export default function TextareaField({
  label,
  id,
  name,
  value,
  onChange,
  error,
}: {
  label: string;
  id: string;
  name: string;
  value: string;
  onChange: any;
  error: any;
}) {
  const [isActive, setIsActive] = useState(false);

  const clearTextarea = () => {
    onChange({ target: { name, value: "" } });
    setIsActive(false);
  };

  return (
    <div className="relative mb-[20px]">
      {isActive && value && (
        <div className="absolute cursor-pointer top-9 right-2 hover-icon">
          <IoIosClose
            size={25}
            color="#7B61FF"
            strokeWidth={1}
            onClick={clearTextarea}
          />
        </div>
      )}
      <div className=" mb-1 flex  items-center justify-between">
        <label htmlFor={id} className="block  text-sm font-medium text-main">
          {label}
        </label>
        <p className=" text-xs text-red-600">{error}</p>
      </div>
      <textarea
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        onFocus={() => setIsActive(true)}
        rows={6}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-3"
        placeholder="Write your thoughts here..."
      />
    </div>
  );
}
