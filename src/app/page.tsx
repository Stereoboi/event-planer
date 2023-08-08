import ButtonGroup from "./components/MainPage/ButtonGroup";
import { Post } from "../../types/PostType";
import EventList from "./components/MainPage/EventList";
import getEvents from "../../lib/getEvent";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Events page",
  description: "Events page",
};

export default async function Home() {
  const result: Post[] = await getEvents("1");

  return (
    <main>
      <ButtonGroup />
      {result.length > 0 ? (
        <EventList data={result} />
      ) : (
        <h2 className="text-center text-lg font-poppins mt-32">
          There are no events yet ¯\_(ツ)_/¯
        </h2>
      )}
    </main>
  );
}
