async function buscarCep(cep) {
  try {
    const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    const endereco = await response.json();
    console.log(endereco);
    return endereco;
  } catch (erro) {
    console.log(erro);
  }
}
const { cep, logradouro, bairro, localidade, uf, estado, regiao, ddd } =
  await buscarCep("89020430");
console.log(
  `CEP: ${cep}\n${logradouro}\nBairro ${bairro}\nCidade: ${localidade}\nUF:${uf}\nEstado: ${estado}\nRegiao: ${regiao}\nDDD: ${ddd}`
);
