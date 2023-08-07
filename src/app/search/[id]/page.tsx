import React from "react";
import EventList from "@/app/components/MainPage/EventList";
import ButtonGroup from "@/app/components/MainPage/ButtonGroup";
import BackButton from "@/app/components/BackButton";
type Params = {
  params: {
    id: string;
  };
};

async function findByKeyWord(id: string) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_DEPLOY_URL}/api/findbykeyword/${id}`,
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
  console.log(id);

  const post = await findByKeyWord(id);
  console.log(post);

  return (
    <>
      <ButtonGroup />
      {post.length > 0 ? (
        <>
          <BackButton />
          <h2 className="text-lg font-poppins mb-[12px] ">
            Sorted by keyword: {id}
          </h2>
          <EventList data={post} />
        </>
      ) : (
        <h2 className="text-center text-lg font-poppins mt-32">
          There are no events with this keyword yet ¯\_(ツ)_/¯
        </h2>
      )}
    </>
  );
}
