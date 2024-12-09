import { prisma } from "@/lib/prisma";
import { Categoria, Noticia } from "@prisma/client";
import { NextResponse } from "next/server";

export async function getAllCategories(): Promise<Categoria[]> {
  try {
    await prisma.$connect();
    const categories: Categoria[] = await prisma.categoria.findMany();
    return categories;
  } catch (error) {
    console.error("Erro ao buscar categorias:", error);
    throw new Error("Não foi possível buscar as categorias.");
  } finally {
    await prisma.$disconnect();
  }
}

export async function getCategoryById(id: number) {
  try {
    await prisma.$connect();
    const category = await prisma.categoria.findUnique({
      where: {
        id,
      },
    });
    return category;
  } catch (error) {
    console.log("Erro ao buscar categoria por id:", error);
  } finally {
    await prisma.$disconnect();
  }
}

export async function getNewsByCategory(categoryId: number) {
  try {
    await prisma.$connect();
    const news = await prisma.noticia.findMany({
      where: {
        categoriaId: categoryId,
      },
    });    
    return news;
  } catch (error) {
    console.log("Erro ao buscar notícias por categoria:", error);
  } finally {
    await prisma.$disconnect();
  }
}

export async function createNews(news: Noticia) {
  try {
    await prisma.$connect();
    await prisma.noticia.create({
      data: {
        titulo: news.titulo,
        conteudo: news.conteudo,
        categoriaId: news.categoriaId,
        autorId: news.autorId,
      },
    });
  } catch (error) {
    console.error("Erro ao criar notícia:", error);
  } finally {
    await prisma.$disconnect();
  }
}

export async function deleteNew(id: number){
  try {
    await prisma.$connect();
    await prisma.noticia.delete({
      where: {
        id,
      },
    });
  } catch (error) {
    console.error("Erro ao deletar notícia:", error);
  } finally {
    await prisma.$disconnect();
  }
}