import CategoryNav from "@/components/public/CategoryNav";
import NewList from "@/components/public/NewList";
import { getCategoryById } from "@/utils/api";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default async function CategoryById({
  params,
}: {
  params: { id: string };
}) {
  const getCategory = async () => {
    if (!params.id) {
      throw new Error("Id da categoria não informado.");
    }
    return await getCategoryById(Number(params.id));
  };

  const category = await getCategory();
  

  return (
    <>
      {category ? (
        <div>
          <CategoryNav />
          <NewList categoryId={category.id} categoryName={category.nome} />
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
}
