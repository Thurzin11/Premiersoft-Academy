"use client";
import { useRouter } from "next/navigation";
import { useAuth } from "../contexts/AuthContext";

// src/app/dashboard/page.tsx
export default function Dashboard() {
  const router = useRouter();
  const { logout } = useAuth();
  const handler = () => {
    logout();
    router.push("/login");
  }


  return (
    <div className="p-8 flex justify-around items-center">
      <div className="w-[90%]">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <p>Página protegida</p>
      </div>
      <div>
        <button onClick={handler} className="bg-red-700 rounded-md p-1 text-white">Logout</button>
      </div>
    </div>
  );
}
