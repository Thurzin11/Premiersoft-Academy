export default function List() {
  return (
    <div className="grid grid-cols-12">
      <div className="flex flex-col col-span-2">
        <label htmlFor="task">Task</label>
        <input
          className="border border-black placeholder:text-black px-2"
          type="text"
          placeholder="Insira uma Task"
        />
      </div>
    </div>
  );
}
