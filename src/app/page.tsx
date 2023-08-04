import ButtonGroup from "./components/MainPage/ButtonGroup";
import { Metadata } from "next";
import { Post } from "../../types/PostType";
import EventList from "./components/MainPage/EventList";

export const metadata: Metadata = {
  title: "Events page",
  description: "Events page",
};

async function getEvents() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_DEPLOY_URL}/api/getevents`,
    {
      method: "GET",
      next: { revalidate: 0 },
    }
  );

  if (!res.ok) {
    console.log("error from fetch", res.status);
  }

  return res.json();
}

export default async function Home() {
  const result: Post[] = await getEvents();
  console.log(result);

  return (
    <main>
      <ButtonGroup />
      <EventList data={result} />
    </main>
  );
}
