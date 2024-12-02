import Header from "./header";
import Main from "./main";
export default function Home() {
  return (
    <div className="w-[100vw] h-[90vh] flex justify-center items-center text-center">
      <div className="w-[50%] h-[25%]">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Welcome to the Team Explorer!
        </h2>
        <p className="text-gray-700">
          Explore the most exciting football teams from various competitions
          around the world. Dive into detailed information about your favorite
          teams and discover what makes each of them unique.
        </p>
      </div>
    </div>
  );
}
