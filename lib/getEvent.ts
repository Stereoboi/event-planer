export default async function getEvents(data: string) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_DEPLOY_URL}/api/getevents`,
    {
      method: "GET",
      cache: "no-store",
    }
  );

  if (!res.ok) {
    console.log("error from fetch", res.status);
  }

  return res.json();
}
