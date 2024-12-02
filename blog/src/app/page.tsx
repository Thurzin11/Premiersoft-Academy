import Image from "next/image"
import Link from "next/link"
import { getPosts } from "@/lib/api"
import { ArrowRight, Zap, BookOpen, MessageCircle } from "lucide-react"

export default async function HomePage() {
  const recentPosts = (await getPosts()).slice(0, 3)

  return (
    <div className="max-w-6xl mx-auto">
      {/* Hero Section */}
      <section className="py-12 md:py-20">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Bem-vindo ao Meu Blog
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Um espaço dedicado a compartilhar conhecimento, experiências e
            descobertas no mundo do desenvolvimento web.
          </p>
          <Link
            href="/blog"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
          >
            Ver todos os posts
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* Featured Posts Section */}
      <section className="py-12 border-t border-gray-200">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">
          Posts Recentes
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {recentPosts.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <div className="relative">
                <Image
                  src={`https://picsum.photos/seed/${post.id}/800/600`}
                  alt="Post cover"
                  width={400}
                  height={300}
                  className="object-cover w-full h-48"
                  priority={post.id <= 3}
                />
              </div>
              <div className="p-6">
                <h3 className="font-semibold text-xl mb-2">{post.title}</h3>
                <p className="text-gray-600 mb-4 line-clamp-2">{post.body}</p>
                <Link
                  href={`/blog/${post.id}`}
                  className="text-blue-600 hover:text-blue-800 inline-flex items-center"
                >
                  Ler mais
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 border-t border-gray-200">
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="p-6">
            <div className="bg-blue-100 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
              <Zap className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Conteúdo Atualizado</h3>
            <p className="text-gray-600">
              Artigos e tutoriais sempre atualizados com as últimas tecnologias.
            </p>
          </div>
          <div className="p-6">
            <div className="bg-blue-100 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
              <BookOpen className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Tutoriais Práticos</h3>
            <p className="text-gray-600">
              Aprenda com exemplos práticos e código fonte completo.
            </p>
          </div>
          <div className="p-6">
            <div className="bg-blue-100 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
              <MessageCircle className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Comunidade Ativa</h3>
            <p className="text-gray-600">
              Participe das discussões e compartilhe suas experiências.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 border-t border-gray-200">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Comece a Explorar</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Descubra todos os nossos artigos, tutoriais e dicas para se tornar
            um desenvolvedor melhor.
          </p>
          <Link
            href="/blog"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
          >
            Explorar o Blog
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  )
}