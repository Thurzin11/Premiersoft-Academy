import axios from "axios"

// Usando a API do JSONPlaceholder como exemplo
const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
})

export interface Post {
  id: number
  title: string
  body: string
  userId: number
}

export async function getPosts(): Promise<Post[]> {
  const response = await api.get<Post[]>("/posts")
  return response.data
}

export async function getPost(id: number): Promise<Post> {
  const response = await api.get<Post>(`/posts/${id}`)
  return response.data
}