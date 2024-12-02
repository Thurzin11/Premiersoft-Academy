export default function Cart(props) {
  console.log(props.cart);
  return (
    <footer className="fixed w-[20vw] left-[79vw] h-[100vh] bg-black text-white p-5">
      <div className="h-[80vh] overflow-y-auto snap-y snap-mandatory">
        {props.cart.map((item, index) => (
          <div
            key={index}
            className="hover:bg-gray-100 transition duration-200 mb-5 border border-gray-300 rounded-lg shadow-lg p-4 max-w-sm bg-white"
          >
            <h2 className="text-lg font-semibold text-gray-800 mb-2">
              {item.nome}
            </h2>
            <div className="flex justify-between items-center">
              <span className="text-gray-600 text-sm">
                {item.quantidade}x R$ {item.valor.toFixed(2)}
              </span>
              <button
                onClick={() => props.handleRemoveFromCart(item)}
                className="text-red-500"
              >
                Remover
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-col text-sm absolute top-[88vh]">
        <span className="font-semibold">
          Total: R${" "}
          {props.cart
            .reduce((acc, item) => acc + item.valor * item.quantidade, 0)
            .toFixed(2)}
        </span>
        <span className="font-semibold">
          Itens no Carrinho:{" "}
          {props.cart.reduce((acc, item) => acc + item.quantidade, 0)}
        </span>
      </div>
    </footer>
  );
}
