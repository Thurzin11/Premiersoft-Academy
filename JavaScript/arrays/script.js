// // Exemplo prático: Filtrando produtos em estoque
// const produtosLoja = [
//   { nome: "Notebook", emEstoque: true, preco: 3000 },
//   { nome: "Smartphone", emEstoque: false, preco: 1500 },
//   { nome: "Tablet", emEstoque: true, preco: 800 },
// ];

// const produtosDisponiveis = produtosLoja.filter((produto) =>
//   !produto.emEstoque && produto.preco >= 1500
// );

// console.log(produtosDisponiveis);

// Palindromo
// const nome  = "Reinier";

// let nomeInvertido = nome.split("").reverse().join("").toUpperCase();

// console.log(`É um palindromo? ${nomeInvertido==nome.toUpperCase() ? 'Sim' : 'Não'}`);


// Exemplo prático: Calculando valor total de vendas
const vendas = [
    { produto: 'Notebook', valor: 3000 },
    { produto: 'Mouse', valor: 80 },
    { produto: 'Teclado', valor: 150 }
];

const totalVendas = vendas.reduce((total, venda) => total + venda.valor, 0);