"use client";

import { todo } from "node:test";
import { useState, useEffect } from "react";

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

export default function Home() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodo, setNewTodo] = useState("");
  const [changeTodo, setChangeTodo] = useState<Todo>({
    id: 0,
    title: "",
    completed: false,
  });
  const [isEditing, setIsEditing] = useState(false);
  // let isEditing = false;

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    const response = await fetch("/api/todos");
    const data = await response.json();
    setTodos(data);
  };

  const addTodo = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTodo.trim()) return;

    await fetch("/api/todos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title: newTodo }),
    });

    setNewTodo("");
    fetchTodos();
  };

  const deleteTodo = async (id: number) => {
    await fetch("/api/todos", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id }),
    });

    fetchTodos();
  };

  const updateTodo = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log(changeTodo);
    await fetch("/api/todos", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: changeTodo.id,
        title: changeTodo.title,
        completed: changeTodo.completed,
      }),
    });

    fetchTodos();
  };
  const changeToEdit = () => {
    setIsEditing(!isEditing);
  };

  const editTodo = async (todo: Todo) => {
    changeToEdit();
    setChangeTodo(todo);
  };

  return (
    <main className="max-w-4xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Lista de Tarefas</h1>
      <form onSubmit={addTodo} className={`mb-4 ${isEditing ? "hidden" : ""}`}>
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          className="border p-2 rounded mr-2"
          placeholder="Nova tarefa..."
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Adicionar
        </button>
      </form>

      <form
        onSubmit={updateTodo}
        className={`flex justify-between mb-4 ${!isEditing ? "hidden" : ""}`}
      >
        <div>
          <input
            type="text"
            value={changeTodo.title}
            onChange={(e) =>
              setChangeTodo({
                ...changeTodo,
                title: e.target.value,
              })
            }
            className="border p-2 rounded mr-2"
            placeholder="Atualize a tarefa..."
          />
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Atualizar
          </button>
        </div>
        <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded " onClick={changeToEdit}>
          Change to Add ToDo
        </button>
      </form>

      <ul className="space-y-2">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="p-2 bg-gray-100 rounded flex justify-between items-center"
          >
            <span>{todo.title}</span>
            <div className="w-[20%] flex justify-around text-white">
              <button
                className="bg-yellow-800 rounded-md w-[40%]"
                onClick={() => editTodo(todo)}
              >
                Edit
              </button>
              <button
                className="bg-red-700 rounded-md w-[40%]"
                onClick={() => deleteTodo(todo.id)}
              >
                Trash
              </button>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}
