function soma(a, b) {
  return a + b;
}

function subtracao(a, b) {
  return a - b;
}
function multiplicacao(a, b) {
  return a * b;
}
function divisao(a, b) {
  if (b === 0) {
    return "Não é possivel divisao por zero";
  }
  return a / b;
}
function potencia(a, b) {
  return a ** b;
}
module.exports = { soma, subtracao, multiplicacao, divisao, potencia };
