import { Request, Response } from "express";
import Recipe from "../models/Recipe";

export const recipeController = {
  // Criar uma nova receita
  async create(req: Request, res: Response): Promise<any> {
    try {
      const { title, ingredients } = req.body;
      if (title.length < 3) {
        return res
          .status(400)
          .json({ error: "O título deve ter no mínimo 3 caracteres" });
      }
      if (ingredients.length === 0) {
        return res
          .status(400)
          .json({ error: "Deve haver no mínimo 1 ingrediente" });
      }
      const recipe = await Recipe.create(req.body);
      return res.status(201).json(recipe);
    } catch (error) {
      return res.status(400).json({ error: "Erro ao criar receita" });
    }
  },

  // Listar todas as receitas
  async list(req: Request, res: Response): Promise<any> {
    try {
      const recipes = await Recipe.find();
      return res.json(recipes);
    } catch (error) {
      return res.status(400).json({ error: "Erro ao listar receitas" });
    }
  },

  // Buscar uma receita específica
  async getById(req: Request, res: Response): Promise<any> {
    try {
      const recipe = await Recipe.findById(req.params.id);
      if (!recipe) {
        return res.status(404).json({ error: "Receita não encontrada" });
      }
      return res.json(recipe);
    } catch (error) {
      return res.status(400).json({ error: "Erro ao buscar receita" });
    }
  },

  async update(req: Request, res: Response): Promise<any> {
    try {
      const { title, ingredients } = req.body;
      if (title.length < 3) {
        return res
          .status(400)
          .json({ error: "O título deve ter no mínimo 3 caracteres" });
      }
      if (ingredients.length === 0) {
        return res
          .status(400)
          .json({ error: "Deve haver no mínimo 1 ingrediente" });
      }
      const recipe = await Recipe.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      });
      if (!recipe) {
        return res.status(404).json({ error: "Receita não encontrada" });
      }
      return res.json(recipe);
    } catch (error) {
      return res.status(400).json({ error: "Erro ao atualizar receita" });
    }
  },

  async delete(req: Request, res: Response): Promise<any> {
    try {
      const recipe = await Recipe.findByIdAndDelete(req.params.id);
      if (!recipe) {
        return res.status(404).json({ error: "Receita não encontrada" });
      }
      return res.json(recipe);
    } catch (error) {
      return res.status(400).json({ error: "Erro ao deletar receita" });
    }
  },

  async search(req: Request, res: Response): Promise<any> {
    try {
      const { title } = req.query;
      if (!title) {
        return res.status(400).json({ error: "O parâmetro 'title' é obrigatório" });
      }
      const recipes = await Recipe.find({ title: new RegExp(title as string, "i") });
      return res.json(recipes);
    } catch (error) {
      return res.status(400).json({ error: "Erro ao buscar receitas" });
    }
  }
};
