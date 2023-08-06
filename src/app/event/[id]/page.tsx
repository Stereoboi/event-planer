import React from "react";

type Params = {
  params: {
    id: string;
  };
};

export default function EventPage({ params: { id } }: Params) {
  return <div>EventPage {id}</div>;
}
