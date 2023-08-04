import { NextResponse, NextRequest } from "next/server";
import connect from "../../../../util/mongoConnect";
import Event from "@/models/EventPost";

export const GET = async (request: Request) => {
  const url = new URL(request.url);

  try {
    await connect();

    const posts = await Event.find();

    return new NextResponse(JSON.stringify(posts), { status: 200 });
  } catch (err) {
    return new NextResponse("Database Error", { status: 500 });
  }
};
