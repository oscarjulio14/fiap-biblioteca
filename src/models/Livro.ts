export class Livro {
    constructor(
      public id: string,
      public titulo: string,
      public editoraId: string,
      public anoPublicacaoId: number,
      public usuarioId?: string
    ) {}
  }
  