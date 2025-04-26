import { Livro } from './models/Livro';
import { Usuario } from './models/Usuario';
import { Editora } from './models/Editora';
import { AnoPublicacao } from './models/AnoPublicacao';

export class Biblioteca {
  private livros: Livro[] = [];
  private usuarios: Usuario[] = [];
  private editoras: Editora[] = [];
  private anosPublicacao: AnoPublicacao[] = [];

  // --- LIVROS ---
  adicionarLivro(livro: Livro): void {
    this.livros.push(livro);
  }

  listarLivros(): Livro[] {
    return this.livros;
  }

  removerLivro(id: string): boolean {
    const index = this.livros.findIndex(l => l.id === id);
    if (index >= 0) {
      this.livros.splice(index, 1);
      return true;
    }
    return false;
  }

  editarLivro(id: string, dadosAtualizados: Partial<Livro>): boolean {
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
  adicionarUsuario(usuario: Usuario): void {
    this.usuarios.push(usuario);
  }

  listarUsuarios(): Usuario[] {
    return this.usuarios;
  }

  removerUsuario(id: string): boolean {
    const index = this.usuarios.findIndex(u => u.id === id);
    if (index >= 0) {
      this.usuarios.splice(index, 1);
      return true;
    }
    return false;
  }

  editarUsuario(id: string, dadosAtualizados: Partial<Usuario>): boolean {
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
  adicionarEditora(editora: Editora): void {
    this.editoras.push(editora);
  }

  listarEditoras(): Editora[] {
    return this.editoras;
  }

  removerEditora(id: string): boolean {
    const index = this.editoras.findIndex(e => e.id === id);
    if (index >= 0) {
      this.editoras.splice(index, 1);
      return true;
    }
    return false;
  }

  editarEditora(id: string, dadosAtualizados: Partial<Editora>): boolean {
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
  adicionarAnoPublicacao(ano: AnoPublicacao): void {
    this.anosPublicacao.push(ano);
  }

  listarAnosPublicacao(): AnoPublicacao[] {
    return this.anosPublicacao;
  }

  removerAnoPublicacao(id: number): boolean {
    const index = this.anosPublicacao.findIndex(a => a.id === id);
    if (index >= 0) {
      this.anosPublicacao.splice(index, 1);
      return true;
    }
    return false;
  }
}
