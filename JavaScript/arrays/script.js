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
// const vendas = [
//     { produto: 'Notebook', valor: 3000 },
//     { produto: 'Mouse', valor: 80 },
//     { produto: 'Teclado', valor: 150 }
// ];

// const totalVendas = vendas.reduce((total, venda) => total + venda.valor, 0);

// console.log(totalVendas);


// // Fazendo uma cópia superficial de um array
// const frutas = ['maçã', 'banana', 'laranja'];
// const frutasCopia = [...frutas];

// // A cópia é independente do original
// frutas.push('manga');
// console.log(frutas);       // ['maçã', 'banana', 'laranja', 'manga']
// console.log(frutasCopia);  // ['maçã', 'banana', 'laranja']

// Usando spread para passar múltiplos argumentos
const numeros = [1, 5, 2, 8, 3];

// Sem spread operator
console.log(Math.max(1, 5, 2, 8, 3));

// Com spread operator
console.log(Math.max(...numeros));

// Exemplo prático: Função de registro de vendas
function registrarVenda(data, vendedor, ...produtos) {
    console.log(`Venda realizada em ${data} por ${vendedor}`);
    produtos.forEach(produto => console.log(`- ${produto}`));
}

registrarVenda('2024-03-15', 'João', 'Notebook', 'Mouse', 'Teclado');