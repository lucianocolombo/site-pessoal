const express = require('express');
const router = express.Router();
const db = require('../db');

// Rota GET para listar experiências profissionais
router.get('/', async (req, res) => {
    try {
        const [rows] = await db.query('SELECT * FROM experiencias');
        res.json(rows);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Erro ao listar experiências profissionais' });
    }
});

module.exports = router;