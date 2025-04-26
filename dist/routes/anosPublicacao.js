"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const client_1 = require("@prisma/client");
const router = express_1.default.Router();
const prisma = new client_1.PrismaClient();
// GET - Listar todos os anos de publicação
router.get('/', async (req, res) => {
    try {
        const anos = await prisma.anoPublicacao.findMany();
        res.json(anos);
    }
    catch (error) {
        res.status(500).json({ erro: 'Erro ao buscar anos de publicação.', detalhes: error });
    }
});
// POST - Adicionar um novo ano de publicação
router.post('/', async (req, res) => {
    const { ano } = req.body;
    try {
        const novoAno = await prisma.anoPublicacao.create({
            data: { ano: Number(ano) },
        });
        res.status(201).json(novoAno);
    }
    catch (error) {
        res.status(500).json({ erro: 'Erro ao criar ano de publicação.', detalhes: error });
    }
});
exports.default = router;
