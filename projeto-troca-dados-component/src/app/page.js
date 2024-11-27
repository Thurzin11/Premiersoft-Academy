"use client";
import Image from "next/image";
import Card from "./card";
import { useState } from "react";
import Cart from "./cart";

export default function Home() {
  const products = [
    {
      nome: "Smartphone",
      descricao:
        "Celular com tela de 6.5 polegadas, 128GB de armazenamento, câmera tripla.",
      valor: 2500.0,
      quantidade: 10,
      imagem:
        "https://a-static.mlcdn.com.br/800x560/smartphone-samsung-galaxy-a05s-67-128gb-preto-6gb-ram-cam-tripla-50mp-selfie-13mp-bateria-5000mah-dual-chip/magazineluiza/237216700/c5d3f4a35266582bf302c76f566a71e2.jpg",
    },
    {
      nome: "Notebook",
      descricao: "Notebook com processador Intel i7, 16GB RAM, SSD de 512GB.",
      valor: 4500.0,
      quantidade: 5,
      imagem:
        "https://p1-ofp.static.pub//medias/24157957128_CG_202112301038011699957038640.png",
    },
    {
      nome: "Fone de Ouvido",
      descricao: "Fone de ouvido Bluetooth com cancelamento de ruído ativo.",
      valor: 300.0,
      quantidade: 20,
      imagem:
        "https://m.media-amazon.com/images/I/51Z7AxeZKKL.__AC_SX300_SY300_QL70_ML2_.jpg",
    },
    {
      nome: "Smartwatch",
      descricao:
        "Relógio inteligente com monitoramento de frequência cardíaca e GPS.",
      valor: 800.0,
      quantidade: 15,
      imagem:
        "https://m.media-amazon.com/images/I/61isXSksx3L.__AC_SX300_SY300_QL70_ML2_.jpg",
    },
    {
      nome: "Televisão",
      descricao: "TV LED 4K de 50 polegadas com suporte a HDR10.",
      valor: 3500.0,
      quantidade: 8,
      imagem: "https://m.media-amazon.com/images/I/71K5QlnTZpL._AC_SX679_.jpg",
    },
    {
      nome: "Console de Videogame",
      descricao:
        "Console de última geração com suporte a resolução 8K e 1TB de armazenamento.",
      valor: 5000.0,
      quantidade: 6,
      imagem:
        "https://m.media-amazon.com/images/I/71ANJQTALWL.__AC_SY300_SX300_QL70_ML2_.jpg",
    },
    {
      nome: "Câmera Digital",
      descricao: "Câmera DSLR com lente 18-55mm e gravação em 4K.",
      valor: 2800.0,
      quantidade: 7,
      imagem:
        "https://www.loja.canon.com.br/wcsstore/CDBCatalogAssetStore/01_EOS_T7_NOVAFOTO.jpg",
    },
    {
      nome: "Tablet",
      descricao: "Tablet com tela de 10 polegadas e 256GB de armazenamento.",
      valor: 2200.0,
      quantidade: 12,
      imagem: "https://m.media-amazon.com/images/I/71h6PpGaz9L._AC_SL1500_.jpg",
    },
    {
      nome: "Caixa de Som Bluetooth",
      descricao: "Caixa de som portátil com 20W de potência e bateria de 12h.",
      valor: 500.0,
      quantidade: 18,
      imagem:
        "https://www.havan.com.br/media/catalog/product/cache/73a52df140c4d19dbec2b6c485ea6a50/c/a/caixa-de-som-bluetooth-20-rms-xboom-go-xg5-lg_808212.webp",
    },
    {
      nome: "Roteador Wi-Fi",
      descricao: "Roteador com suporte a Wi-Fi 6 e 4 portas Gigabit.",
      valor: 350.0,
      quantidade: 25,
      imagem:
        "https://images2.kabum.com.br/produtos/fotos/384402/roteador-wifi-6-tp-link-ax5400-padrao-ac-5378mbps-dual-band-6-antenas-archer-ax72_1662757968_g.jpg",
    },
  ];

  const [cart, setCart] = useState([]);

  const handleAddToCart = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item == product);
      if (existingProduct) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantidade: item.quantidade + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...product, quantidade: 1 }];
      }
    });    
  };

  const handleRemoveFromCart = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item == product);
      if(existingProduct.quantidade==1){
        prevCart.splice(prevCart.indexOf(existingProduct), 1);
      }else{
        return existingProduct.quantidade--;
      }
    });
  };

  return (
    <div className="grid grid-cols-12">
      <main className="col-span-10 grid grid-cols-3 gap-10 p-[30px]">
        {products.map((product, index) => (
          <Card
            key={index}
            product={product}
            handleAddToCart={() => handleAddToCart(product)}
            handleRemoveFromCart={() => handleRemoveFromCart(product)}
          />
        ))}
      </main>
      <Cart className="col-span-2" cart={cart}/>
    </div>
  );
}
