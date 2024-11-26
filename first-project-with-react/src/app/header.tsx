import Image from "next/image";
export default function cabecalho(){
    return <header className="flex justify-around items-center bg-white text-black">
        <h2 className="border">Flamengo</h2>
        <Image className="border" src="https://i.pinimg.com/736x/6e/ef/ef/6eefef244382fab016f75de0a0c29b3d.jpg" alt="Flamengo" width={100} height={100} />
    </header>
}