import Link from "next/link";

export default function Header() {
  return (
    <header className="flex justify-around w-[100%] h-[10vh] bg-black text-white ">
      <div className="w-[70%] flex flex-col text-center justify-center">
        <h1 className="w-[10%] h-[50%]"><Link href={"/"}>Soccer</Link></h1>
      </div>
        <ul className="w-[30%] flex justify-around items-center">
          <li><Link href={"/"}>Home</Link></li>
          <li><Link href={"/competitions/teams"}>Teams</Link></li>
          <li><Link href="/competitions">Leagues</Link></li>
        </ul>
    </header>
  );
}