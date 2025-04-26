"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
async function main() {
    // Inserir uma editora
    const novaEditora = await prisma.editora.create({
        data: {
            id: "1",
            nome: "Companhia das Letras",
        },
    });
    // Inserir um ano de publicação
    const novoAno = await prisma.anoPublicacao.create({
        data: {
            id: 1,
            ano: 2023,
        },
    });
    // Inserir um usuário
    const novoUsuario = await prisma.usuario.create({
        data: {
            id: "1",
            nome: "João Silva",
            email: "joao@email.com",
        },
    });
    // Inserir um livro
    const novoLivro = await prisma.livro.create({
        data: {
            id: "1",
            titulo: "O Mundo de João",
            editoraId: novaEditora.id,
            anoPublicacaoId: novoAno.id,
            usuarioId: novoUsuario.id,
        },
    });
    // Buscar e listar todos os livros
    const livros = await prisma.livro.findMany({
        include: {
            editora: true,
            anoPublicacao: true,
            usuario: true,
        },
    });
    // Atualizar o título do livro com id "1"
    const livroAtualizado = await prisma.livro.update({
        where: { id: "1" },
        data: {
            titulo: "O Mundo de João - Edição Atualizada",
        },
    });
    console.log("📚 Livros encontrados:");
    console.dir(livros, { depth: null });
    console.log("✅ Livro atualizado:");
    console.dir(livroAtualizado, { depth: null });
}
main()
    .catch((e) => {
    console.error(e);
})
    .finally(async () => {
    await prisma.$disconnect();
});
