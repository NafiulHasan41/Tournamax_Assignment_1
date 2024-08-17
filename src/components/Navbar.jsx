import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center bg-gray-400 rounded-xl px-8 py-3">
      <Link className="text-white font-bold" href={"/"}>
       Simple Note App
      </Link>
      <Link className=" p-2 rounded-xl bg-white" href={"/addTopic"}>
        Add Topic
      </Link>
    </nav>
  );
}
