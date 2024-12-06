import { prisma } from "@/lib/prisma";
import { log } from "console";

export async function getAllCategories() {
    try {
        await prisma.$connect();
        const categories = await prisma.categoria.findMany();
        return categories;
      } catch (error) {
        console.error('Erro ao buscar categorias:', error);
        throw new Error('Não foi possível buscar as categorias.');
      } finally {
        await prisma.$disconnect();
      }
}

export async function getCategoryById(id: number) {
    try {
        await prisma.$connect();
        const category = await prisma.categoria.findUnique({
            where: {
                id
            }
        });        
        return category;
    } catch (error) {
        console.log('Erro ao buscar categoria por id:', error);
    }
}

export async function getNewsByCategory(categoryId: number) {
    try {
        await prisma.$connect();
        const news = await prisma.noticia.findMany({
            where: {
                categoriaId: categoryId
            }
        });
        return news;
    } catch (error) {
        console.log('Erro ao buscar notícias por categoria:', error);
    }
}