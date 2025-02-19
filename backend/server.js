const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Rotas
const usuariosRoutes = require('./routes/usuarios');
const habilidadesRoutes = require('./routes/habilidades');
const experienciasRoutes = require('./routes/experiencias');
const formacaoRoutes = require('./routes/formacao');
const projetosRoutes = require('./routes/projetos');

app.use('/api/usuarios', usuariosRoutes);
app.use('/api/habilidades', habilidadesRoutes);
app.use('/api/experiencias', experienciasRoutes);
app.use('/api/formacao', formacaoRoutes);
app.use('/api/projetos', projetosRoutes);

// Iniciar o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});