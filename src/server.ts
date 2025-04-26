import express from 'express';
import cors from 'cors';
import livrosRouter from './routes/livros';
import editorasRouter from './routes/editoras';
import usuariosRouter from './routes/usuarios';
import anosPublicacaoRouter from './routes/anos-publicacao';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/livros', livrosRouter);
app.use('/editoras', editorasRouter);
app.use('/usuarios', usuariosRouter);
app.use('/anos-publicacao', anosPublicacaoRouter);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
});
