const tarefasIniciais = [
  { id: 1, texto: "Estudar JavaScript", concluida: false },
  { id: 2, texto: "Fazer exercícios", concluida: false },
];
const tarefasCasa = [
  { id: 1, texto: "Lavar Roupa", concluida: false },
  { id: 2, texto: "Lavar Louça", concluida: false },
];

// Tarefas:
// 1. Adicione uma nova tarefa sem modificar o array original
// 2. Marque uma tarefa como concluída mantendo imutabilidade
// 3. Combine duas listas de tarefas diferentes
// 4. Remova uma tarefa específica mantendo imutabilidade

const tarefasIniciaisCopy = structuredClone(tarefasIniciais);

const newTask = {
  id: 3,
  texto: "Jogar",
  concluida: true,
};

tarefasIniciaisCopy.push(newTask);

// function alteraTarefa(idTarefa) {
//   const novasTarefasInciaisComTrue = tarefasIniciaisCopy.map((tarefa) => {
//     return tarefa.id === idTarefa ? { ...tarefa, concluida: true } : tarefa;
//   });
//   console.log(novasTarefasInciaisComTrue);
// }
function alteraTarefa(idTarefa) {
  let tarefa = tarefasIniciaisCopy.find((tarefa) => {
    return tarefa.id == idTarefa;
  });
  tarefa.concluida = true;
}

alteraTarefa(1);

console.log(tarefasIniciais);
console.log(tarefasIniciaisCopy);

const tarefasTotais = [...tarefasIniciais, ...tarefasCasa];

// console.log(tarefasTotais);
