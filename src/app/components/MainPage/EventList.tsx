import React from "react";
import EventCard from "./EventCard";
import { Post } from "../../../../types/PostType";
export default function EventList({ data }: { data: Post[] }) {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 lg:gap-y-10">
      {data.map((el) => (
        <EventCard data={el} key={el._id} />
      ))}
    </div>
  );
}
