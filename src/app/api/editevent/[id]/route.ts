import Event from "@/models/EventPost";
import connect from "../../../../../util/mongoConnect";
import { NextResponse, NextRequest } from "next/server";

export const PUT = async (request: Request, { params }: { params: any }) => {
  const { id } = params;

  const { title, description, date, time, location, category, priority, img } =
    await request.json();

  await connect();

  const updatePost = await Event.findOneAndUpdate(
    { _id: id },
    {
      $set: {
        title,
        description,
        date,
        time,
        location,
        category,
        priority,
        img,
      },
    },
    { new: true }
  );

  try {
    return new NextResponse(JSON.stringify(updatePost), {
      status: 201,
    });
  } catch (error: any) {
    return NextResponse.json("some wierd error", {
      status: 500,
    });
  }
};
