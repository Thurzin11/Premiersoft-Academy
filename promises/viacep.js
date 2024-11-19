async function buscarEndereco() {
    try {
        const response = await fetch('https://viacep.com.br/ws/01001000/json/');
        const dados = await response.json();
        console.log(dados);
    } catch (erro) {
        console.error(erro);
    }
}

buscarEndereco();