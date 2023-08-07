import React from "react";
import Modal from "@/app/components/modal/Modal";
import EventCard from "@/app/components/modal/EventCard";
import { Post } from "../../../../../types/PostType";

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

export default async function page({ params: { id } }: Params) {
  const post: Post = await getEventById(id);
  console.log(post);

  return (
    <Modal>
      <EventCard data={post} />
    </Modal>
  );
}
