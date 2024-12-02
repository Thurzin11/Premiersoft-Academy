"use client";
import { useCart } from '@/contexts/CartContext';

const products = [   
  {     
    id: 1,     
    name: "Tênis Nike Air Max",     
    price: 299.99,     
    image: "https://http2.mlstatic.com/D_NQ_NP_2X_865244-MLB73527339573_122023-F.webp"   
  },   
  {     
    id: 2,     
    name: "Camiseta Adidas Originals",     
    price: 89.99,     
    image: "https://t-static.dafiti.com.br/GjkrTpIz88YlPT-T-mnA5QT9OBQ=/fit-in/430x623/static.dafiti.com.br/p/adidas-originals-camiseta-adidas-originals-3-stripes-preta-4908-7902737-1-zoom.jpg"   
  },
  {
    id: 3,
    name: "Bermuda Puma Essentials",
    price: 129.90,
    image: "https://imgcentauro-a.akamaihd.net/768x768/96062402.jpg"
  },
  {
    id: 4,
    name: "Moletom Under Armour",
    price: 249.99,
    image: "https://imgcentauro-a.akamaihd.net/768x768/96182131.jpg"
  },
  {
    id: 5,
    name: "Tênis Asics Gel-Nimbus",
    price: 499.99,
    image: "https://imgcentauro-a.akamaihd.net/768x768/985973FR.jpg"
  }
];

export default function ProductList() {
  const { addToCart } = useCart();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {products.map((product) => (
        <div 
          key={product.id}
          className="border rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow"
        >
          <img 
            src={product.image}
            alt={product.name}
            className="w-full h-48 object-cover rounded-md p-2"
          />
          <h3 className="mt-2 text-lg font-semibold">{product.name}</h3>
          <p className="text-gray-600">
            R$ {product.price.toFixed(2)}
          </p>
          <button
            onClick={() => addToCart(product)}
            className="mt-2 w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition-colors"
          >
            Adicionar ao Carrinho
          </button>
        </div>
      ))}
    </div>
  );
}