function calcularConta(valorConsumido, numeroPessoas, qualidadeServico) {
  if (numeroPessoas <= 0) {
    alert("Quantidade de pessoas invalida");
    return;
  }

  let gorjeta = calcularGorjeta(valorConsumido, qualidadeServico);
  let total = gorjeta + valorConsumido;
  return {
    valorDoConsumo: valorConsumido.toFixed(2),
    valorGorjetaSugerida: gorjeta.toFixed(2),
    valorTotal: total.toFixed(2),
    valorPorPessoa: (total / numeroPessoas).toFixed(2),
    quantidadePessoas: numeroPessoas.toFixed(2),
  };
}
function calcularGorjeta(valorConsumido, qualidadeServico) {
  switch (qualidadeServico) {
    case "excelente":
      return valorConsumido * 0.15;
    case "bom":
      return valorConsumido * 0.1;
    case "regular":
      return valorConsumido * 0.05;
    default:
      alert("Qualidade do Serviço invalida!!!");
      return;
  }
}

let conta =  calcularConta(120, 3, "excelente");

console.log(conta);
