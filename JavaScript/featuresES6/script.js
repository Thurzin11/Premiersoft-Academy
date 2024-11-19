const pedido = {
  id: null,
  cliente: {
    nome: "Ana Silva",
    contato: {
      email: "ana@email.com",
      telefone: "11999999999",
    },
  },
  produtos: [
    { nome: "Notebook", preco: 3500 },
    { nome: "Mouse", preco: 120 },
  ],
};

//   const nPedido = pedido.id ?? 0;
//   console.log(nPedido);

// Destructuring aninhado com renomeação
const {
  id,
  cliente: {
    nome: nomeCliente,
    contato: { email, telefone },
  },
} = pedido;

const numeroPedido = id ?? 0;

console.log(numeroPedido, nomeCliente, email, telefone);
