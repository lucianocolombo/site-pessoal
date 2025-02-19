const express = require('express');
const router = express.Router();
const db = require('../db');

// Rota GET para listar habilidades
router.get('/', async (req, res) => {
    try {
        const [rows] = await db.query('SELECT * FROM habilidades');
        res.json(rows);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Erro ao listar habilidades' });
    }
});

module.exports = router;