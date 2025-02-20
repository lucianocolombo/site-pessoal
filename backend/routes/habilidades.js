const express = require('express');
const router = express.Router();
const db = require('../db');

// Rota GET para listar habilidades
router.get('/', async (req, res) => {
    try {
        const result = await db.query('SELECT * FROM usuarios');
        res.json(result.rows);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Erro ao listar habilidades' });
    }
});

module.exports = router;