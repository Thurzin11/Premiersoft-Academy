import Link from "next/link";

export default function Home() {
  return (
   <div className="flex flex-col items-center justify-center h-[80vh] border-red-900">
      <h1 className="font-bold">Home</h1>
      <p>Welcome to the home page!</p>
      <p>Click <Link className="text-blue-900 font-bold" href={"/form"}>here</Link> to be redirect to the Form Page</p>
   </div>
  );
}
