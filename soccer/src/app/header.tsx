export default function Header() {
  return (
    <header className="flex justify-around w-[100%] h-[10vh] bg-black text-white ">
      <div className="w-[70%] flex flex-col text-center justify-center">
        <h1 className="w-[10%] h-[50%]">Soccer</h1>
      </div>
        <ul className="w-[30%] flex justify-around items-center">
          <li>Home</li>
          <li>News</li>
          <li>Teams</li>
          <li>Players</li>
          <li><a href="/competitions">Leagues</a></li>
        </ul>
    </header>
  );
}
