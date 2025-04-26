import { Biblioteca } from '../../src/Biblioteca';
import { Livro } from '../../src/models/Livro';
import { Usuario } from '../../src/models/Usuario';
import { Editora } from '../../src/models/Editora';
import { AnoPublicacao } from '../../src/models/AnoPublicacao';

const biblioteca = new Biblioteca();

// Criando dados
const editora = new Editora('1', 'Laboratório Fantasma');
const ano = new AnoPublicacao(1, 2025);
const usuario = new Usuario('1', 'Julio Oscar', 'julio@email.com');
const livro = new Livro('1', 'A Rua é noiz', editora.id, ano.id, usuario.id);

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

listarTudo()