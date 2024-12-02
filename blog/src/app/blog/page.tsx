import Image from "next/image"
import Link from "next/link"
import { getPosts } from "@/lib/api"

export default async function BlogPage() {
  const posts = await getPosts()

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Blog Posts</h1>
      <div className="grid gap-8">
        {posts.map((post) => (
          <article
            key={post.id}
            className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col md:flex-row"
          >
            <div className="relative md:w-64">
              <Image
                src={`https://picsum.photos/seed/${post.id}/800/600`}
                alt="Post cover"
                width={320}
                height={240}
                className="object-cover w-full h-48 md:h-full"
                priority={post.id <= 2}
              />
            </div>
            <div className="p-6 flex-grow">
              <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
              <p className="text-gray-600 mb-4">
                {post.body.substring(0, 150)}...
              </p>
              <Link
                href={`/blog/${post.id}`}
                className="text-blue-600 hover:text-blue-800 font-medium"
              >
                Ler mais →
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}