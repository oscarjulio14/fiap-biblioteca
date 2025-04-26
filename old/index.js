"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Biblioteca_1 = require("./Biblioteca");
const Livro_1 = require("./models/Livro");
const Usuario_1 = require("./models/Usuario");
const Editora_1 = require("./models/Editora");
const AnoPublicacao_1 = require("./models/AnoPublicacao");
const biblioteca = new Biblioteca_1.Biblioteca();
// Criando dados
const editora = new Editora_1.Editora('1', 'Laboratório Fantasma');
const ano = new AnoPublicacao_1.AnoPublicacao(1, 2025);
const usuario = new Usuario_1.Usuario('1', 'Julio Oscar', 'julio@email.com');
const livro = new Livro_1.Livro('1', 'A Rua é noiz', editora.id, ano.id, usuario.id);
// Adicionando dados
biblioteca.adicionarEditora(editora);
biblioteca.adicionarAnoPublicacao(ano);
biblioteca.adicionarUsuario(usuario);
biblioteca.adicionarLivro(livro);
// Editando dados (U do CRUD)
biblioteca.editarLivro("1", { titulo: "Novo Título" });
biblioteca.editarUsuario("1", { nome: "Julio C. Oscar", email: "julio.oscar@email.com" });
biblioteca.editarEditora("1", { nome: "Editora Independente" });
// Exibindo os dados
function listarTudo() {
    console.log('Livros:', biblioteca.listarLivros());
    console.log('Usuários:', biblioteca.listarUsuarios());
    console.log('Editoras:', biblioteca.listarEditoras());
    console.log('Anos:', biblioteca.listarAnosPublicacao());
}
listarTudo();
