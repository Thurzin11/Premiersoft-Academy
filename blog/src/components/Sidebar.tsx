import Link from "next/link"
import { Home, BookOpen, User, Settings } from "lucide-react"

export default function Sidebar() {
  return (
    <aside className="w-64 bg-white border-r border-gray-200 flex-shrink-0">
      <div className="sticky top-0 p-6">
        <nav className="space-y-4">
          <Link
            href="/"
            className="flex items-center space-x-3 text-gray-700 hover:text-blue-600 transition-colors"
          >
            <Home size={20} />
            <span>Home</span>
          </Link>
          <Link
            href="/blog"
            className="flex items-center space-x-3 text-gray-700 hover:text-blue-600 transition-colors"
          >
            <BookOpen size={20} />
            <span>Blog</span>
          </Link>
          <Link
            href="/about"
            className="flex items-center space-x-3 text-gray-700 hover:text-blue-600 transition-colors"
          >
            <User size={20} />
            <span>Sobre</span>
          </Link>
        </nav>
      </div>
    </aside>
  )
}