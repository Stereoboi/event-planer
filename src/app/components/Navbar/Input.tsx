"use client";
import React, { useState, ChangeEvent } from "react";
import { IconContext } from "react-icons";
import { CiSearch } from "react-icons/ci";
import { IoIosClose } from "react-icons/io";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";

const SearchInput = () => {
  const router = useRouter();
  const [isActive, setIsActive] = useState(false);

  const formik = useFormik({
    initialValues: {
      search: "",
    },

    onSubmit: (values) => {
      router.push(`/search/${values.search}`);
      formik.resetForm();
    },
  });

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    formik.handleChange(event);
    setIsActive(!!event.target.value);
  };

  const clearSearch = () => {
    formik.setFieldValue("search", "");
    setIsActive(false);
  };

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="relative border rounded-md shadow-custom "
    >
      <div className="absolute top-3 left-2">
        <CiSearch size={25} color="#7B61FF" strokeWidth={1} />
      </div>

      {isActive && (
        <div
          className="absolute cursor-pointer top-3 right-2 hover-icon"
          onClick={clearSearch}
        >
          <IoIosClose size={25} color="#7B61FF" strokeWidth={1} />
        </div>
      )}

      <label
        htmlFor="search"
        className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
      >
        Search
      </label>
      <input
        type="text"
        id="search"
        name="search"
        onChange={handleInputChange}
        value={formik.values.search}
        className="block w-full outline-none h-[48px] px-10 py-2 font-poppins rounded-lg text-main bg-white border-none focus:border-blue-500 \
        md:w-[368px] lg:w-[410px]
        "
        placeholder="Search by keywords"
        required
      />
    </form>
  );
};

export default SearchInput;
