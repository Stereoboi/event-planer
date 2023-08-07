import { EventType } from "../types/EventType";

export default async function editEvent(value: EventType, id: string) {
  const { title, description, date, time, location, category, priority, img } =
    value;

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_DEPLOY_URL}/api/editevent/${id}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        description,
        date,
        time,
        location,
        category,
        priority,
        img,
      }),
    }
  );
}
