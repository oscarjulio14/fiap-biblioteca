import express from 'express';
import { PrismaClient } from '@prisma/client';

const router = express.Router();
const prisma = new PrismaClient();

// GET - Listar todos os anos de publicação
router.get('/', async (req, res) => {
  try {
    const anos = await prisma.anoPublicacao.findMany();
    res.json(anos);
  } catch (error) {
    res.status(500).json({ erro: 'Erro ao buscar anos de publicação.', detalhes: error });
  }
});

// POST - Adicionar um novo ano de publicação
router.post('/', async (req, res) => {
  const { ano } = req.body;
  try {
    const novoAno = await prisma.anoPublicacao.create({
      data: { ano: Number(ano) },
    });
    res.status(201).json(novoAno);
  } catch (error) {
    res.status(500).json({ erro: 'Erro ao criar ano de publicação.', detalhes: error });
  }
});

export default router;
