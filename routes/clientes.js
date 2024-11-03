// /routes/clientes.js
const express = require('express');
const router = express.Router();
const db = require('../models/db');



router.post('/', (req, res) => {
  const { nome, telefone, email, data_nascimento, extrato } = req.body;
  const sql = 'INSERT INTO clientes (nome, telefone, email, data_nascimento, extrato) VALUES (?, ?, ?, ?, ?)';
  db.query(sql, [nome, telefone, email, data_nascimento, extrato], (err, result) => {
    if (err) return res.status(500).send(err);
    res.send('Cliente cadastrado com sucesso');
  });
});





router.get('/', (req, res) => {
  db.query('SELECT * FROM clientes', (err, result) => {
    if (err) return res.status(500).send(err);
    res.json(result);
  });
});



router.get('/:nome', (req, res) => {
  const { nome } = req.params;
  const sql = 'SELECT * FROM clientes WHERE nome LIKE ?';
  db.query(sql, [`%${nome}%`], (err, results) => {
    if (err) return res.status(500).send(err);
    res.json(results);
  });
});




router.put('/:id', (req, res) => {
  const { id } = req.params;
  const { nome, telefone, email, data_nascimento, extrato } = req.body;
  const sql = 'UPDATE clientes SET nome = ?, telefone = ?, email = ?, data_nascimento = ?, extrato = ? WHERE id = ?';
  db.query(sql, [nome, telefone, email, data_nascimento, extrato, id], (err, result) => {
    if (err) return res.status(500).send(err);
    res.send('Cliente atualizado com sucesso');
  });
});



router.delete('/:id', (req, res) => {
  const { id } = req.params;
  const sql = 'DELETE FROM clientes WHERE id = ?';
  db.query(sql, [id], (err, result) => {
    if (err) return res.status(500).send(err);
    res.send('Cliente excluído com sucesso');
  });
});

module.exports = router;




//swagger comment to post route

/**
 * @swagger
 * /clientes:
 *   post:
 *     summary: Cadastra um novo cliente
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome:
 *                 type: string
 *               telefone:
 *                 type: string
 *               email:
 *                 type: string
 *               data_nascimento:
 *                 type: string
 *                 format: date
 *               extrato:
 *                 type: number
 *     responses:
 *       200:
 *         description: Cliente cadastrado com sucesso
 */


// swagger comment to get route


/**
 * @swagger
 * /clientes:
 *   get:
 *     summary: Retorna todos os clientes
 *     responses:
 *       200:
 *         description: Lista de clientes
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
 *                   telefone:
 *                     type: string
 *                   email:
 *                     type: string
 *                   data_nascimento:
 *                     type: string
 *                     format: date
 *                   extrato:
 *                     type: number
 */


//swagger comment to get/:nome route


/**
 * @swagger
 * /clientes/{nome}:
 *   get:
 *     summary: Busca cliente pelo nome
 *     parameters:
 *       - in: path
 *         name: nome
 *         required: true
 *         schema:
 *           type: string
 *         description: Nome do cliente para busca
 *     responses:
 *       200:
 *         description: Detalhes do cliente
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
 *                   telefone:
 *                     type: string
 *                   email:
 *                     type: string
 *                   data_nascimento:
 *                     type: string
 *                     format: date
 *                   extrato:
 *                     type: number
 */



//swagger comment to put/:id route


/**
 * @swagger
 * /clientes/{id}:
 *   put:
 *     summary: Atualiza um cliente
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do cliente para atualização
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome:
 *                 type: string
 *               telefone:
 *                 type: string
 *               email:
 *                 type: string
 *               data_nascimento:
 *                 type: string
 *                 format: date
 *               extrato:
 *                 type: number
 *     responses:
 *       200:
 *         description: Cliente atualizado com sucesso
 */


//swagger comment to delete/:id route


/**
 * @swagger
 * /clientes/{id}:
 *   delete:
 *     summary: Exclui um cliente
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do cliente para exclusão
 *     responses:
 *       200:
 *         description: Cliente excluído com sucesso
 */
