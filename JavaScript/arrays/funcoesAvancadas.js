// function prepararPedido(numeroPedido, callback) {
//     console.log(`Preparando pedido #${numeroPedido}`);
    
//     // Simulando tempo de preparo
//     setTimeout(() => {
//         const pedido = {
//             numero: numeroPedido,
//             status: 'pronto'
//         };
//         callback(pedido);
//     }, 3000);
// }

// function notificarCliente(pedido) {
//     console.log(`🔔 Pedido #${pedido.numero} está ${pedido.status}!`);
// }

// // Usando o callback
// prepararPedido(123, notificarCliente);



function criarContadorVisitas() {
    let visitas = 0;
    
    return {
        registrarVisita: function() {
            visitas++;
            return visitas;
        },
        obterTotalVisitas: function() {
            return visitas;
        }
    };
}

const contadorBlog = criarContadorVisitas();
console.log(contadorBlog.registrarVisita()); // 1
console.log(contadorBlog.registrarVisita()); // 2
console.log(contadorBlog.obterTotalVisitas()); // 2