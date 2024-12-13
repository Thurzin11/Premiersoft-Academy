import { Request, Response } from "express";
import { pool } from "../config/database";

export const livroController = {
  async criar(req: Request, res: Response) {
    try {
      const { titulo, autor, ano_publicacao } = req.body;

      const result = await pool.query(
        "INSERT INTO livros (titulo, autor, ano_publicacao) VALUES ($1, $2, $3) RETURNING *",
        [titulo, autor, ano_publicacao]
      );

      res.status(201).json(result.rows[0]);
    } catch (error) {
      console.error("Erro ao criar livro:", error);
      res.status(500).json({ erro: "Erro ao criar livro" });
    }
  },

  async listar(req: Request, res: Response) {
    try {
      const result = await pool.query("SELECT * FROM livros");
      res.json(result.rows);
    } catch (error) {
      console.error("Erro ao listar livros:", error);
      res.status(500).json({ erro: "Erro ao listar livros" });
    }
  },
  async buscarPorId(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const result = await pool.query("SELECT * FROM livros WHERE id = $1", [
        id,
      ]);
      if (result.rowCount === 0) {
        res.status(404).json({ erro: "Livro não encontrado" });
      } else {
        res.status(200).json(result.rows[0]);
      }
    } catch (error) {
      console.error("Erro ao buscar livro:", error);
      res.status(500).json({ erro: "Erro ao buscar livro" });
    }
  },
  async atualizar(req: Request, res: Response) {
    try {
      const { titulo, autor, ano_publicacao, disponivel } = req.body;
      const { id } = req.params;
      const result = await pool.query(
        "UPDATE livros SET titulo = $1, autor = $2, ano_publicacao = $3, disponivel = $4  WHERE id = $5 RETURNING *",
        [titulo, autor, ano_publicacao, disponivel, id]
      );
      if (result.rowCount === 0) {
        res.status(404).json({ erro: "Livro não encontrado" });
      } else {
        res.status(200).json(result.rows[0]);
      }
    } catch (error) {
      console.error("Erro ao atualizar livro:", error);
    }
  },
  async deletar(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const result = await pool.query("DELETE FROM livros WHERE id = $1", [id]);
      if (result.rowCount === 0) {
        res.status(404).json({ erro: "Livro não encontrado" });
      } else {
        res.status(204).send();
      }
    } catch (error) {
      console.error("Erro ao deletar livro:", error);
    }
  },
};
