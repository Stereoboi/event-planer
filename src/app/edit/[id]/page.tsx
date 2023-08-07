import React from "react";
import EditEventForm from "../../components/editEvent/EditForm";
import getEventById from "../../../../lib/getEventById";
import BackButton from "@/app/components/BackButton";
type Params = {
  params: {
    id: string;
  };
};

export default async function EditPage({ params: { id } }: Params) {
  const event = await getEventById(id);
  console.log(event);

  return (
    <div>
      <BackButton />
      <EditEventForm data={event} />
    </div>
  );
}
