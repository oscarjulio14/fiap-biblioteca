"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Livro = void 0;
class Livro {
    constructor(id, titulo, editoraId, anoPublicacaoId, usuarioId) {
        this.id = id;
        this.titulo = titulo;
        this.editoraId = editoraId;
        this.anoPublicacaoId = anoPublicacaoId;
        this.usuarioId = usuarioId;
    }
}
exports.Livro = Livro;
