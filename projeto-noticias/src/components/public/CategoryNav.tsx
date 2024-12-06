import { getAllCategories } from "@/utils/api";
import Link from "next/link";

export default async function CategoryNav() {

  const categories = await getAllCategories();
  
  return (
    <nav className="bg-gray-100 py-4 shadow-md">
      <ul className="flex flex-wrap justify-center gap-4 px-4">
        {Array.isArray(categories)? categories.map((category) => (
          <li key={category.id}>
            <Link
              href={`/categoria/${category.id}`}
              className="text-blue-600 hover:text-blue-800 font-medium transition"
            >
              {category.nome}
            </Link>
          </li>
        )): (
          <li>Carregando...</li>
        )}
      </ul>
    </nav>
  );
}
