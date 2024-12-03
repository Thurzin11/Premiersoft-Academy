import Link from "next/link";

export default function Main() {
  return (
    <div className="flex flex-col items-center justify-center h-[90vh]">
      <h1 className="text-4xl font-bold">Welcome to the To-Do-List App</h1>
      <p className="text-lg">
        This is a simple To-Do-List app built with Next.js and Tailwind CSS
      </p>
      <Link className="text-blue-700" href={'/list'}>Click here</Link>
    </div>
  );
}
