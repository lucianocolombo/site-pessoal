const express = require('express');
const router = express.Router();
const db = require('../db');

// Rota GET para buscar os dados do usuário
router.get('/', async (req, res) => {
    try {
        const [rows] = await db.query('SELECT * FROM usuarios');
        res.json(rows);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Erro ao buscar dados do usuário' });
    }
});

module.exports = router;