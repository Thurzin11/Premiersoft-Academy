import { deleteNew } from "@/utils/api";

export default function NewCard(props: any) {
    return (
        <div className="col-span-4 max-w-sm bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200">
            <div className="bg-blue-500 h-32 flex justify-end items-start p-1">
            </div>
            <div className="p-4">
                <h2 className="text-lg font-semibold text-gray-800">{props.new.nome}</h2>
                <p className="mt-2 text-sm overflow-y-scroll h-[70px] text-gray-600">
                    {props.new.conteudo}
                </p>
                <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">
                    Learn More
                </button>
            </div>
        </div>
    );
}
