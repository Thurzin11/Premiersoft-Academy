import { nextAuthOptions } from "@/app/api/auth/[...nextauth]/route";
import ButtonLogout from "@/components/ButtonLogout";
import { getServerSession } from "next-auth";
import React from "react";

const page = async () => {
  const session = await getServerSession(nextAuthOptions);  
  return (
    <>
      <div className="w-[100vw] h-[90vh] flex justify-center items-center text-center">
        <div className="w-[50%] h-[25%]">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Olá, {session?.user.name} Bem-vindo ao La Bella Pizza!
          </h2>
          <p className="text-gray-700">
            Explore os sabores mais incríveis de pizzas artesanais. Confira
            nosso cardápio repleto de combinações deliciosas e surpreendentes.
            Descubra a pizza perfeita para você e tenha uma experiência saborosa
            e inesquecível!
          </p>
          <ButtonLogout />
        </div>
      </div>
    </>
  );
};

export default page;
