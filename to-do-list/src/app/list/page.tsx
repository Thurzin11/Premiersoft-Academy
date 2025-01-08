import Header from "../header";
export default function List() {
  return (
    <div>
      <Header />
      <ul className="bg-gray-800 text-white">
        <li className="flex justify-between px-10 border-b border-b-black">
          <p>Item 1</p>
          <div className="flex justify-around w-[20%] ">
            <button className=" border w-[40%] rounded-md bg-green-900">
              Edit
            </button>
            <button className="bg-red-900 border rounded-md w-[40%]">Delete</button>
          </div>
        </li>
      </ul>
    </div>
  );
}
