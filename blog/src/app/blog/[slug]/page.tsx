import Image from "next/image"
import { getPost } from "@/lib/api"

export default async function PostPage({
  params,
}: {
  params: { slug: string }
}) {
  const post = await getPost(parseInt(params.slug))

  return (
    <article className="max-w-3xl mx-auto">
      <div className="relative mb-8">
        <Image
          src={`https://picsum.photos/seed/${post.id}/800/600`}
          alt="Post cover"
          width={800}
          height={400}
          className="object-cover w-full h-[400px] rounded-lg"
          priority
        />
      </div>
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      <div className="prose lg:prose-xl">
        <p>{post.body}</p>
      </div>
    </article>
  )
}