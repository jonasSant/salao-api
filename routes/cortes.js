// /routes/cortes.js
const express = require('express');
const router = express.Router();
const db = require('../models/db');

router.post('/', (req, res) => {
  const { nome, preco, quantidade, data } = req.body;
  const sql = 'INSERT INTO cortes (nome, preco, quantidade, data) VALUES (?, ?, ?, ?)';
  db.query(sql, [nome, preco, quantidade, data], (err, result) => {
    if (err) return res.status(500).send(err);
    res.send('Corte registrado com sucesso');
  });
});

router.get('/', (req, res) => {
  db.query('SELECT * FROM cortes', (err, result) => {
    if (err) return res.status(500).send(err);
    res.json(result);
  });
});

module.exports = router;


//swagger comment to get route

/**
 * @swagger
 * /cortes:
 *   get:
 *     summary: Retorna todos os cortes
 *     responses:
 *       200:
 *         description: Lista de cortes
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                   nome:
 *                     type: string
 *                   preco:
 *                     type: number
 *                   quantidade:
 *                     type: integer
 *                   data:
 *                     type: string
 *                     format: date
 */





//swgger comment to post route



/**
 * @swagger
 * /cortes:
 *   post:
 *     summary: Registra um novo corte
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome:
 *                 type: string
 *               preco:
 *                 type: number
 *               quantidade:
 *                 type: integer
 *               data:
 *                 type: string
 *                 format: date
 *     responses:
 *       200:
 *         description: Corte registrado com sucesso
 */