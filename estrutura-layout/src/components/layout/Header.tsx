import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-gray-800 text-white p-4">
      <nav className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">Meu Site</h1>
        <ul className="flex gap-4">
          <li>
            <Link href="/" className="hover:text-gray-300">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-gray-300">
              Sobre
            </Link>
          </li>
          <li>
            <Link href="/github" className="hover:text-gray-300">
              Repositórios
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
