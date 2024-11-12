function prepararPedido(numeroPedido, callback) {
    console.log(`Preparando pedido #${numeroPedido}`);
    
    // Simulando tempo de preparo
    setTimeout(() => {
        const pedido = {
            numero: numeroPedido,
            status: 'pronto'
        };
        callback(pedido);
    }, 3000);
}

function notificarCliente(pedido) {
    console.log(`🔔 Pedido #${pedido.numero} está ${pedido.status}!`);
}

// Usando o callback
prepararPedido(123, notificarCliente);