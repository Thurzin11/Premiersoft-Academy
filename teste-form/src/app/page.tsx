import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
      <div className="flex flex-col items-center justify-center w-[50%] h-[90vh] mx-auto">
        <h1 className="font-bold">
          Hello, welcome the page build with React and Next.js
        </h1>
        <p>Click <Link className="text-blue-900 font-bold" href={"/signup"}>here</Link> to be redirect to the form</p>
      </div>
  );
}
