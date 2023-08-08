"use client";
import React from "react";
import CreateEventForm from "../components/createEvent/CreateEventForm";
import BackButton from "../components/BackButton";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Create page",
  description: "Create page",
};

export default function CreatePage() {
  return (
    <div>
      <div className="flex flex-col ">
        <BackButton />
        <h1
          className="text-[24px] font-poppins font-semibold
        md:text-[32px]
        "
        >
          Create new event
        </h1>
      </div>
      <CreateEventForm />
    </div>
  );
}
