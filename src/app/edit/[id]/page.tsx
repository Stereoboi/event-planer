import React from "react";
import EditEventForm from "../../components/editEvent/EditForm";
import getEventById from "../../../../lib/getEventById";
import BackButton from "@/app/components/BackButton";
type Params = {
  params: {
    id: string;
  };
};

export async function generateMetadata({ params: { id } }: Params) {
  const event = await getEventById(id);

  return {
    title: `${event.title} edit page`,
    description: `${event.title} edit page`,
  };
}

export default async function EditPage({ params: { id } }: Params) {
  const event = await getEventById(id);

  return (
    <div>
      <BackButton />
      <EditEventForm data={event} />
    </div>
  );
}
