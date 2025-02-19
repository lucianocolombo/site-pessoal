const express = require('express');
const router = express.Router();
const db = require('../db');

// Rota GET para listar projetos do portfólio
router.get('/', async (req, res) => {
    try {
        const [rows] = await db.query('SELECT * FROM projetos');
        res.json(rows);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Erro ao listar projetos do portfólio' });
    }
});

module.exports = router;