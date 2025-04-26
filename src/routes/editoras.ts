import { Router } from 'express';
import { PrismaClient } from '@prisma/client';

const router = Router();
const prisma = new PrismaClient();

// GET - Buscar todas as editoras
router.get('/', async (req, res) => {
    try {
      const editoras = await prisma.editora.findMany();
      res.json(editoras);
    } catch (error) {
      res.status(500).json({ erro: 'Erro ao buscar editoras', detalhes: error });
    }
  });

// POST /Criar uma nova editora
router.post('/', async (req, res) => {
  const { nome } = req.body;

  try {
    const novaEditora = await prisma.editora.create({
      data: {
        nome,
      },
    });

    res.status(201).json(novaEditora);
  } catch (erro) {
    console.error("Erro ao criar editora:", erro);
    res.status(500).json({ erro: "❌ Erro ao criar editora." });
  }
});

// PUT: Atualizar uma editora pelo ID
router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const { nome } = req.body;
  
    try {
      const editoraAtualizada = await prisma.editora.update({
        where: { id },
        data: { nome },
      });
  
      res.json(editoraAtualizada);
    } catch (erro) {
      res.status(400).json({
        erro: 'Erro ao atualizar a editora',
        detalhes: erro,
      });
    }
  });

  // DELETE: Remover uma editora pelo ID
router.delete('/:id', async (req, res) => {
    const { id } = req.params;
  
    try {
      await prisma.editora.delete({
        where: { id },
      });
  
      res.json({ mensagem: 'Editora deletada com sucesso' });
    } catch (erro) {
      res.status(400).json({
        erro: 'Erro ao deletar a editora',
        detalhes: erro,
      });
    }
  });
  
  

export default router;
