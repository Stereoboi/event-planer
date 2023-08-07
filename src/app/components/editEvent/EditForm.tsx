"use client";
import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import InputField from "../createEvent/InputField";
import TextareaField from "../createEvent/Textarea";
import SelectField from "../createEvent/Select";
import UploadBtn from "../createEvent/UploadButton";
import { categories, priorities } from "../../../../util/variables";
import { EventType } from "../../../../types/EventType";
import addPostToDatabase from "../../../../lib/addPostToDb";
import { Post } from "../../../../types/PostType";
import editEvent from "../../../../lib/editEvent";
import { useRouter } from "next/navigation";

export default function EditEventForm({ data }: { data: Post }) {
  const router = useRouter();
  const [categoryId, setCategoryId] = useState("");
  const [priorityId, setPriorityId] = useState("");
  const [ready, setReady] = useState(false);
  const [eventValue, setEventValue] = useState<EventType>({} as EventType);
  const [image, setImage] = useState<string>();

  useEffect(() => {
    setCategoryId(Date.now().toString());
    setPriorityId(Date.now().toString());
  }, []);

  const formik = useFormik({
    initialValues: {
      title: data.title,
      description: data.description,
      date: data.date,
      time: data.time,
      location: data.location,
      category: data.category,
      priority: data.priority,
    },
    onSubmit: (values) => {
      setEventValue({
        title: values.title,
        description: values.description,
        date: values.date,
        time: values.time,
        location: values.location,
        category: values.category,
        priority: values.priority,
        img: image,
      });

      setReady(true);

      formik.resetForm();
    },
  });

  useEffect(() => {
    if (ready) {
      const addEventValue = async () => {
        try {
          await editEvent(eventValue, data._id);
        } catch (error) {
          console.log(error);
        }
      };
      addEventValue();
      router.push("/");
      router.refresh();
      setReady(false);
    }
  }, [ready, eventValue]);

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
        <UploadBtn state={setImage} />
      </div>

      <div className="flex justify-center md:flex-row-reverse md:justify-start">
        <button
          type="submit"
          className="text-white bg-main px-[74px] py-[16px] rounded-lg font-poppins hover:bg-action ease-in duration-300 text-[16px] block"
        >
          Edit event
        </button>
      </div>
    </form>
  );
}
