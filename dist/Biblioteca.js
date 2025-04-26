"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Biblioteca = void 0;
class Biblioteca {
    constructor() {
        this.livros = [];
        this.usuarios = [];
        this.editoras = [];
        this.anosPublicacao = [];
    }
    // --- LIVROS ---
    adicionarLivro(livro) {
        this.livros.push(livro);
    }
    listarLivros() {
        return this.livros;
    }
    removerLivro(id) {
        const index = this.livros.findIndex(l => l.id === id);
        if (index >= 0) {
            this.livros.splice(index, 1);
            return true;
        }
        return false;
    }
    editarLivro(id, dadosAtualizados) {
        const livro = this.livros.find(l => l.id === id);
        if (!livro) {
            return false; // Livro não encontrado
        }
        // Atualiza só os campos informados
        if (dadosAtualizados.titulo !== undefined) {
            livro.titulo = dadosAtualizados.titulo;
        }
        if (dadosAtualizados.editoraId !== undefined) {
            livro.editoraId = dadosAtualizados.editoraId;
        }
        if (dadosAtualizados.anoPublicacaoId !== undefined) {
            livro.anoPublicacaoId = dadosAtualizados.anoPublicacaoId;
        }
        if (dadosAtualizados.usuarioId !== undefined) {
            livro.usuarioId = dadosAtualizados.usuarioId;
        }
        return true;
    }
    // --- USUÁRIOS ---
    adicionarUsuario(usuario) {
        this.usuarios.push(usuario);
    }
    listarUsuarios() {
        return this.usuarios;
    }
    removerUsuario(id) {
        const index = this.usuarios.findIndex(u => u.id === id);
        if (index >= 0) {
            this.usuarios.splice(index, 1);
            return true;
        }
        return false;
    }
    editarUsuario(id, dadosAtualizados) {
        const usuario = this.usuarios.find(u => u.id === id);
        if (!usuario) {
            return false; // Usuário não encontrado
        }
        // Atualiza apenas os campos informados
        if (dadosAtualizados.nome !== undefined) {
            usuario.nome = dadosAtualizados.nome;
        }
        if (dadosAtualizados.email !== undefined) {
            usuario.email = dadosAtualizados.email;
        }
        return true;
    }
    // --- EDITORAS ---
    adicionarEditora(editora) {
        this.editoras.push(editora);
    }
    listarEditoras() {
        return this.editoras;
    }
    removerEditora(id) {
        const index = this.editoras.findIndex(e => e.id === id);
        if (index >= 0) {
            this.editoras.splice(index, 1);
            return true;
        }
        return false;
    }
    editarEditora(id, dadosAtualizados) {
        const editora = this.editoras.find(e => e.id === id);
        if (!editora) {
            return false; // Editora não encontrada
        }
        // Atualiza apenas os campos informados
        if (dadosAtualizados.nome !== undefined) {
            editora.nome = dadosAtualizados.nome;
        }
        return true;
    }
    // --- ANOS DE PUBLICAÇÃO ---
    adicionarAnoPublicacao(ano) {
        this.anosPublicacao.push(ano);
    }
    listarAnosPublicacao() {
        return this.anosPublicacao;
    }
    removerAnoPublicacao(id) {
        const index = this.anosPublicacao.findIndex(a => a.id === id);
        if (index >= 0) {
            this.anosPublicacao.splice(index, 1);
            return true;
        }
        return false;
    }
}
exports.Biblioteca = Biblioteca;
