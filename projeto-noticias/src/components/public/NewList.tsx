import { getNewsByCategory } from "@/utils/api";
import NewCard from "./NewCard";

export default async function NewList(props: any) {
    const news =  await getNewsByCategory(props.categoryId);
    return (
        <main>
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center mt-3">{props.categoryName? props.categoryName: 'All News'}</h2>
            <div className="grid grid-cols-12 gap-y-5">
                {Array.isArray(news)? news.map((newItem) => (
                    <NewCard key={newItem.id} new={newItem}/>
                )):<p className="col-span-12 text-center text-gray-600">No news available</p>}
            </div>
        </main>
    );
}