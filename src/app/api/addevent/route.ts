import Event from "@/models/EventPost";
import connect from "../../../../util/mongoConnect";
import { NextResponse, NextRequest } from "next/server";

export const POST = async (request: Request) => {
  const { img, title, description, date, time, location, category, priority } =
    await request.json();

  await connect();

  const newPost = new Event({
    img,
    title,
    description,
    date,
    time,
    location,
    category,
    priority,
  });

  try {
    await newPost.save();

    return NextResponse.json("Successfully created", {
      status: 201,
    });
  } catch (error: any) {
    return NextResponse.json("some wierd error", {
      status: 500,
    });
  }
};
