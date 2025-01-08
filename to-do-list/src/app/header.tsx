export default function Header() {
  return (
    <header className="flex flex-col bg-black text-white justify-center items-center h-[20vh]">
      <h1 className="font-bold h-[40%]">To-Do-List</h1>
      <div className="w-[80%] h-[30%] flex justify-around ">
        <input className="w-[70%] rounded-s-md p-1 text-black focus:outline-none" type="text" placeholder="Insira uma tarefa"/>
        <button className="w-[30%] bg-green-800 rounded-e-md outline-0">Salvar</button>
      </div>
    </header>
  );
}
