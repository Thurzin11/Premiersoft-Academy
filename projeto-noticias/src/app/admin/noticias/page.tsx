import NewList from "@/components/public/NewList";
import Link from "next/link";

export default function NoticiasPage() {
  return (
    <main>
      <div className="flex justify-between items-center p-1">
        <h1 className="">Notícias</h1>
        <Link href={"noticias/novaNoticia"} className="border bg-green-800 text-white rounded p-1">Adicionar</Link>
      </div>
      <NewList />
    </main>
  );
}
