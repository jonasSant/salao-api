// /routes/gastos.js
const express = require('express');
const router = express.Router();
const db = require('../models/db');

router.post('/', (req, res) => {
  const { nome_produto, preco, data } = req.body;
  const sql = 'INSERT INTO gastos (nome_produto, preco, data) VALUES (?, ?, ?)';
  db.query(sql, [nome_produto, preco, data], (err, result) => {
    if (err) return res.status(500).send(err);
    res.send('Gasto registrado com sucesso');
  });
});

router.get('/', (req, res) => {
  db.query('SELECT * FROM gastos', (err, result) => {
    if (err) return res.status(500).send(err);
    res.json(result);
  });
});

module.exports = router;

// swgger comment to get route


/**
 * @swagger
 * /gastos:
 *   get:
 *     summary: Retorna todos os gastos
 *     responses:
 *       200:
 *         description: Lista de gastos
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                   nome_produto:
 *                     type: string
 *                   preco:
 *                     type: number
 *                   data:
 *                     type: string
 *                     format: date
 */



//swagger comment to post route

/**
 * @swagger
 * /gastos:
 *   post:
 *     summary: Registra um novo gasto
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome_produto:
 *                 type: string
 *               preco:
 *                 type: number
 *               data:
 *                 type: string
 *                 format: date
 *     responses:
 *       200:
 *         description: Gasto registrado com sucesso
 */






