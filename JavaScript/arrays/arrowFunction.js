// Converta as seguintes funções para arrow functions
const multiplicacao = (a, b) =>a*b;

const parOuImpar = (numero) => {
    if (numero % 2 === 0) {
        return "Par";
    }
    return "Ímpar";
}

console.log(multiplicacao(4,5));
console.log(parOuImpar(4));
