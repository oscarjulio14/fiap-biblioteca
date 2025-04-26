import express from 'express';
import { PrismaClient } from '@prisma/client';

const router = express.Router();
const prisma = new PrismaClient();

// GET - Listar todos os usuários
router.get('/', async (req, res) => {
    try {
      const usuarios = await prisma.usuario.findMany();
      res.json(usuarios);
    } catch (erro) {
      res.status(500).json({ erro: 'Erro ao buscar usuários.', detalhes: erro });
    }
  });

// POST - para criar um novo usuário
router.post('/', async (req, res) => {
  const { nome, email } = req.body;

  try {
    const novoUsuario = await prisma.usuario.create({
      data: {
        nome,
        email,
      },
    });
    res.status(201).json(novoUsuario);
  } catch (erro) {
    res.status(500).json({ erro: 'Erro ao criar o usuário.', detalhes: erro });
  }
});

// PUT - Atualizar um usuário pelo ID
router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const { nome, email } = req.body;
  
    try {
      const usuarioAtualizado = await prisma.usuario.update({
        where: { id },
        data: { nome, email },
      });
  
      res.json(usuarioAtualizado);
    } catch (erro) {
      res.status(400).json({ erro: 'Erro ao atualizar o usuário', detalhes: erro });
    }
  });

  // DELETE - Remover um usuário pelo ID
router.delete('/:id', async (req, res) => {
    const { id } = req.params;
  
    try {
      await prisma.usuario.delete({
        where: { id },
      });
  
      res.json({ mensagem: 'Usuário deletado com sucesso' });
    } catch (erro) {
      res.status(400).json({ erro: 'Erro ao deletar o usuário', detalhes: erro });
    }
  });

export default router;
