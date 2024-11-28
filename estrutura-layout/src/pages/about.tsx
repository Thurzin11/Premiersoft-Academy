import { useEffect, useState } from "react";
import { marked } from "marked";

export default function GitHub() {
  const [readmeContent, setReadmeContent] = useState<string | null>(null);

  useEffect(() => {
    fetch("https://api.github.com/repos/Thurzin11/Thurzin11/readme")
      .then((res) => res.json())
      .then(async (data) => {
        if (data.content) {
          const decodedContent = atob(data.content);
          const htmlContent = await marked(decodedContent); // Converte Markdown para HTML
          setReadmeContent(htmlContent);
        }
      })
      .catch((error) => {
        console.error("Erro ao buscar o README:", error);
      });
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-100 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4 text-gray-800">
        GitHub Profile README
      </h1>
      {readmeContent ? (
        <div
          className="prose prose-gray max-w-none"
          dangerouslySetInnerHTML={{ __html: readmeContent }}
        />
      ) : (
        <p className="text-gray-600">Carregando conteúdo do README...</p>
      )}
    </div>
  );
}
