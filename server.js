const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
require('dotenv').config();


const app = express();
app.use(cors());
app.use(bodyParser.json());


const cortesRoutes = require('./routes/cortes');
const gastosRoutes = require('./routes/gastos');
const clientesRoutes = require('./routes/clientes');

// Swagger configuration
const swaggerOptions = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'Salão API',
      version: '1.0.0',
      description: 'API para gerenciar cortes, gastos e clientes em um salão',
    },
    servers: [
      {
        url: `http://localhost:${process.env.PORT || 5000}`,
      },
    ],
  },
  apis: ['./routes/*.js'], 
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.use('/cortes', cortesRoutes);
app.use('/gastos', gastosRoutes);
app.use('/clientes', clientesRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
