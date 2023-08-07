import React from "react";
import { Post } from "../../../../types/PostType";
import EventCard from "@/app/components/modal/EventCard";
import BackButton from "@/app/components/BackButton";

type Params = {
  params: {
    id: string;
  };
};

async function getEventById(id: string) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_DEPLOY_URL}/api/getevents/${id}`,
    {
      method: "GET",
      cache: "no-store",
    }
  );

  if (!res.ok) {
    return undefined;
  }

  return res.json();
}

export default async function EventPage({ params: { id } }: Params) {
  const post: Post = await getEventById(id);
  console.log(post);

  return (
    <div>
      <BackButton />
      <h1 className="  font-semibold mb-[24px] lg:mb-[24px] text-[24px] md:text-[32px] text-main">
        {post.title}
      </h1>
      <div className="  lg:flex lg:flex-col lg:justify-center lg:items-center lg:align-middle ">
        <EventCard data={post} />
      </div>
    </div>
  );
}
