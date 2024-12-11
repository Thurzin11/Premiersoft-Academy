import express, { Request, Response } from "express";
import ITask from "./types/ITask";
const app = express();

let countId = 0;

let tasks: ITask[] = [];


app.use(express.json());

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

app.get("/", (req: Request, res: Response) => {
  const message: string = "Hello World";
  res.json({ message });
});

app.get("/tasks", (req: Request, res: Response) => {
  res.json({ tasks });
});

app.get("/task/:id", (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const task = tasks.find((task) => task.id === id);
  task
    ? res.status(200).json({ task })
    : res.status(404).json({ message: "Task not found" });
});

app.post("/tasks", (req: Request, res: Response) => {
  const newTask: ITask = {
    id: countId++,
    ...req.body,
    createdAt: new Date(),
    isDone: false,
    finishedAt: null,
  };
  tasks = [...tasks, newTask];
  res.json({ task: newTask });
});

app.put("/task/:id", (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const updatedTask: ITask = req.body;
  tasks = tasks.map((task) => {
    if (task.id === id) {
      return { ...task, ...updatedTask };
    }
    return task;
  });
  res.json({ task: updatedTask });
});

app.delete("/task/:id", (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    tasks = tasks.filter((task) => task.id !== id);
    res.json({ message: "Task deleted" });
});
