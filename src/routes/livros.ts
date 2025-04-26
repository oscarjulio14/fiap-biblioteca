import { Router } from 'express';
import { PrismaClient } from '@prisma/client';

const router = Router();
const prisma = new PrismaClient();

// GET - livros - Listar todos os livros
router.get('/', async (req, res) => {
  const livros = await prisma.livro.findMany({
    include: {
      editora: true,
      anoPublicacao: true,
      usuario: true,
    },
  });
  res.json(livros);
});

// POST - Inserir um novo livro
router.post('/', async (req, res) => {
  const { id, titulo, editoraId, anoPublicacaoId, usuarioId } = req.body;

  try {
    const novoLivro = await prisma.livro.create({
      data: {
        id,
        titulo,
        editoraId,
        anoPublicacaoId,
        usuarioId,
      },
    });

    res.status(201).json(novoLivro);
  } catch (error) {
    console.error('Erro ao criar livro:', error);
    res.status(500).json({ error: 'Erro ao criar livro' });
  }
});

// PUT - Atualizar um livro por ID
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { titulo, editoraId, anoPublicacaoId, usuarioId } = req.body;

  try {
    const livroAtualizado = await prisma.livro.update({
      where: { id },
      data: {
        titulo,
        editoraId,
        anoPublicacaoId,
        usuarioId,
      },
    });

    res.json({
      mensagem: '📘 Livro atualizado com sucesso!',
      livro: livroAtualizado,
    });
  } catch (error) {
    res.status(500).json({ erro: '❌ Erro ao atualizar o livro.', detalhes: error });
  }

});

// DELETE - Deletar um livro pelo ID
router.delete('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    await prisma.livro.delete({
      where: { id },
    });
    res.json({ mensagem: `✅ Livro com ID ${id} foi removido com sucesso.` });
  } catch (error) {
    console.error('Erro ao deletar o livro:', error);
    res.status(500).json({
      erro: '❌ Erro ao deletar o livro.',
      detalhes: error,
    });
  }
});



export default router;
