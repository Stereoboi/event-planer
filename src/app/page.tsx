import Link from "next/link";
export default function Home() {
  return (
    <main>
      <Link href="/create" className="text-lg ">
        Create event
      </Link>
    </main>
  );
}
