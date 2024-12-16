const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
app.use(express.json());

// Conexão com MongoDB
mongoose.connect('mongodb://localhost:27017/minha-database')
  .then(() => console.log('Conectado ao MongoDB'))
  .catch(err => console.error('Erro na conexão:', err));

// Definindo um modelo
const Usuario = mongoose.model('Usuario', {
  nome: String,
  email: String,
  idade: Number
});

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});

// POST /usuarios
app.post('/usuarios', async (req, res) => {
    try {
      const usuario = new Usuario(req.body);
      await usuario.save();
      res.status(201).json(usuario);
    } catch (error) {
      res.status(400).json({ erro: error.message });
    }
  });

  // GET /usuarios
app.get('/usuarios', async (req, res) => {
    try {
      const usuarios = await Usuario.find();
      res.json(usuarios);
    } catch (error) {
      res.status(500).json({ erro: error.message });
    }
  });
  
  // GET /usuarios/:id
  app.get('/usuarios/:id', async (req, res) => {
    try {
      const usuario = await Usuario.findById(req.params.id);
      if (!usuario) return res.status(404).json({ message: 'Usuário não encontrado' });
      res.json(usuario);
    } catch (error) {
      res.status(500).json({ erro: error.message });
    }
  });

  // PUT /usuarios/:id
app.put('/usuarios/:id', async (req, res) => {
    try {
      const usuario = await Usuario.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      );
      if (!usuario) return res.status(404).json({ message: 'Usuário não encontrado' });
      res.json(usuario);
    } catch (error) {
      res.status(500).json({ erro: error.message });
    }
  });

  // DELETE /usuarios/:id
app.delete('/usuarios/:id', async (req, res) => {
    try {
      const usuario = await Usuario.findByIdAndDelete(req.params.id);
      if (!usuario) return res.status(404).json({ message: 'Usuário não encontrado' });
      res.json({ message: 'Usuário removido com sucesso' });
    } catch (error) {
      res.status(500).json({ erro: error.message });
    }
  });