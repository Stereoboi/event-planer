import { EventType } from "../types/EventType";
export default async function addPostToDatabase(value: EventType) {
  const { img, title, description, date, time, location, category, priority } =
    value;

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_DEPLOY_URL}/api/addevent`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        img,
        title,
        description,
        date,
        time,
        location,
        category,
        priority,
      }),
    }
  );
}
