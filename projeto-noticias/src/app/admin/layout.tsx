// app/admin/layout.tsx
import { getServerSession } from "next-auth"
import { redirect } from "next/navigation"
import { authConfig } from "@/auth.config"
import AdminSidebar from "./Sidebar"

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await getServerSession(authConfig)

  if (!session) {
    redirect("/auth/login")
  }

  return (
    <div className="flex min-h-screen">
      <AdminSidebar />
      <main className="flex-1 p-8">{children}</main>
    </div>
  )
}
