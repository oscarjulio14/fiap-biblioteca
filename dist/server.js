"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const livros_1 = __importDefault(require("./routes/livros"));
const editoras_1 = __importDefault(require("./routes/editoras"));
const usuarios_1 = __importDefault(require("./routes/usuarios"));
const anos_publicacao_1 = __importDefault(require("./routes/anos-publicacao"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use('/livros', livros_1.default);
app.use('/editoras', editoras_1.default);
app.use('/usuarios', usuarios_1.default);
app.use('/anos-publicacao', anos_publicacao_1.default);
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
});
