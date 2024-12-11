const express = require("express");
const router = express.Router();

const users = [
  { id: 1, nome: "Arthur", sobrenome: "Gonçalves", idade: 19 },
  { id: 2, nome: "Maria", sobrenome: "Silva", idade: 25 },
  { id: 3, nome: "João", sobrenome: "Santos", idade: 30 },
  { id: 4, nome: "Ana", sobrenome: "Oliveira", idade: 22 },
  { id: 5, nome: "Pedro", sobrenome: "Ferreira", idade: 27 },
];

router.get("/", (req, res) => {
  res.send("Hello World");
});

router.get("/users", (req, res) => {
  res.send(users);
});

router.get("/users/:id", (req, res) => {
  const userFound = users.find((user) => user.id === Number(req.params.id));
  res
    .status(userFound ? 200 : 404)
    .send(userFound ? userFound : "User not found");
});

router.post("/users", (req, res) => {
  const user = req.body;
  console.log(user);
  users.push(user);
  res.status(201).send(user);
});

module.exports = router;
