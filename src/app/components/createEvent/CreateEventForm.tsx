"use client";
import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import InputField from "./InputField";
import TextareaField from "./Textarea";
import SelectField from "./Select";
import UploadBtn from "./UploadButton";
import { v4 as uuidv4 } from "uuid";

export default function CreateEventForm() {
  const [categoryId, setCategoryId] = useState("");
  const [priorityId, setPriorityId] = useState("");

  // const categoryId = generateUniqueId();
  // const priorityId = generateUniqueId();
  useEffect(() => {
    setCategoryId(Date.now().toString());
    setPriorityId(Date.now().toString());
  }, []);

  const categories = [
    { value: "category1", label: "Category 1" },
    { value: "category2", label: "Category 2" },
    { value: "category3", label: "Category 3" },
    { value: "category4", label: "Category 4" },
  ];

  const priorities = [
    { value: "low", label: "Low" },
    { value: "medium", label: "Medium" },
    { value: "high", label: "High" },
  ];

  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
      date: "",
      time: "",
      location: "",
      category: "",
      priority: "",
    },
    onSubmit: (values) => {
      console.log(values);
      console.log(categoryId);

      formik.resetForm();
    },
  });

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="mt-[24px] px-[16px] py-[40px] md:px-[24px]  lg:p-[40px]  bg-white rounded-lg shadow-custom"
    >
      <div
        className="md:grid md:grid-rows-4 md:grid-flow-col md:gap-3 
       lg:grid-rows-3  lg:gap-3"
      >
        <InputField
          label="Title"
          id="title"
          name="title"
          type="text"
          value={formik.values.title}
          onChange={formik.handleChange}
        />

        <div className="row-span-2">
          <TextareaField
            label="Description"
            id="description"
            name="description"
            value={formik.values.description}
            onChange={formik.handleChange}
          />
        </div>

        <SelectField
          label="Category"
          id={categoryId}
          name="category"
          value={formik.values.category}
          options={categories}
          onChange={formik.handleChange}
        />

        <SelectField
          label="Priority"
          id={priorityId}
          name="priority"
          value={formik.values.priority}
          options={priorities}
          onChange={formik.handleChange}
        />
        <InputField
          label="Select date"
          id="date"
          name="date"
          type="date"
          value={formik.values.date}
          onChange={formik.handleChange}
        />

        <InputField
          label="Select time"
          id="time"
          name="time"
          type="time"
          value={formik.values.time}
          onChange={formik.handleChange}
        />

        <InputField
          label="Location"
          id="location"
          name="location"
          type="text"
          value={formik.values.location}
          onChange={formik.handleChange}
        />
      </div>
      <div className="flex justify-center">
        <UploadBtn />
      </div>

      <div className="flex justify-center md:flex-row-reverse md:justify-start">
        <button className="text-white bg-main px-[74px] py-[16px] rounded-lg font-poppins hover:bg-action ease-in duration-300 text-[16px] block">
          Add event
        </button>
      </div>
    </form>
  );
}
