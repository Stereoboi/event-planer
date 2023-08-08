import React from "react";
import ButtonGroup from "../../components/MainPage/ButtonGroup";
import EventList from "@/app/components/MainPage/EventList";
import BackButton from "@/app/components/BackButton";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Category page",
  description: "Category page",
};

type Params = {
  params: {
    id: string;
  };
};

async function sortByCategory(id: string) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_DEPLOY_URL}/api/sortbycategory/${id}`,
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

export default async function SortedPage({ params: { id } }: Params) {
  const post = await sortByCategory(id);

  return (
    <>
      <ButtonGroup />
      {post.length > 0 ? (
        <>
          <BackButton />
          <h2 className="text-lg font-poppins mb-[12px] ">
            Sorted by category: {id}
          </h2>
          <EventList data={post} />
        </>
      ) : (
        <h2 className="text-center text-lg font-poppins mt-32">
          There are no events with this category yet ¯\_(ツ)_/¯
        </h2>
      )}
    </>
  );
}
