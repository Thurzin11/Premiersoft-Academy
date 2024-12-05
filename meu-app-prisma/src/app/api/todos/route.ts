import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

// GET: Busca todas as tarefas
export async function GET() {
  const todos = await prisma.todo.findMany({
    orderBy: { createdAt: "desc" },
  });
  return NextResponse.json(todos);
}

// POST: Cria uma nova tarefa
export async function POST(request: Request) {
  const json = await request.json();
  const todo = await prisma.todo.create({
    data: {
      title: json.title,
    },
  });
  return NextResponse.json(todo);
}

export async function DELETE(request: Request) {
  const { id } = await request.json();
  await prisma.todo.delete({
    where: { id },
  });
  return NextResponse.json({ success: true });
}

export async function PATCH(request: Request) {
  const json = await request.json();
  await prisma.todo.update({
    where: {
      id: json.id,
    },
    data: {
      title: json.title,
      completed: json.completed,
    },
  });
  return NextResponse.json({ success: true });
}