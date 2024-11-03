const swaggerJsDoc = require('swagger-jsdoc');

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
  apis: [],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);

swaggerDocs.paths = {
  '/cortes': {
    post: {
      summary: 'Registra um novo corte',
      requestBody: {
        required: true,
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {
                nome: { type: 'string' },
                preco: { type: 'number' },
                quantidade: { type: 'integer' },
                data: { type: 'string', format: 'date' },
              },
            },
          },
        },
      },
      responses: {
        200: { description: 'Corte registrado com sucesso' },
      },
    },
    get: {
      summary: 'Retorna todos os cortes',
      responses: {
        200: {
          description: 'Lista de cortes',
          content: {
            'application/json': {
              schema: {
                type: 'array',
                items: {
                  type: 'object',
                  properties: {
                    id: { type: 'integer' },
                    nome: { type: 'string' },
                    preco: { type: 'number' },
                    quantidade: { type: 'integer' },
                    data: { type: 'string', format: 'date' },
                  },
                },
              },
            },
          },
        },
      },
    },
  },
  '/gastos': {
    post: {
      summary: 'Registra um novo gasto',
      requestBody: {
        required: true,
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {
                nome_produto: { type: 'string' },
                preco: { type: 'number' },
                data: { type: 'string', format: 'date' },
              },
            },
          },
        },
      },
      responses: {
        200: { description: 'Gasto registrado com sucesso' },
      },
    },
    get: {
      summary: 'Retorna todos os gastos',
      responses: {
        200: {
          description: 'Lista de gastos',
          content: {
            'application/json': {
              schema: {
                type: 'array',
                items: {
                  type: 'object',
                  properties: {
                    id: { type: 'integer' },
                    nome_produto: { type: 'string' },
                    preco: { type: 'number' },
                    data: { type: 'string', format: 'date' },
                  },
                },
              },
            },
          },
        },
      },
    },
  },
  '/clientes': {
    post: {
      summary: 'Cadastra um novo cliente',
      requestBody: {
        required: true,
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {
                nome: { type: 'string' },
                telefone: { type: 'string' },
                email: { type: 'string' },
                data_nascimento: { type: 'string', format: 'date' },
                extrato: { type: 'number' },
              },
            },
          },
        },
      },
      responses: {
        200: { description: 'Cliente cadastrado com sucesso' },
      },
    },
    get: {
      summary: 'Retorna todos os clientes',
      responses: {
        200: {
          description: 'Lista de clientes',
          content: {
            'application/json': {
              schema: {
                type: 'array',
                items: {
                  type: 'object',
                  properties: {
                    id: { type: 'integer' },
                    nome: { type: 'string' },
                    telefone: { type: 'string' },
                    email: { type: 'string' },
                    data_nascimento: { type: 'string', format: 'date' },
                    extrato: { type: 'number' },
                  },
                },
              },
            },
          },
        },
      },
    },
  },
  '/clientes/{nome}': {
    get: {
      summary: 'Busca o cliente pelo nome',
      parameters: [
        {
          name: 'nome',
          in: 'path',
          required: true,
          schema: {
            type: 'string',
          },
          description: 'Nome do cliente para busca',
        },
      ],
      responses: {
        200: {
          description: 'Detalhes do cliente',
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  id: { type: 'integer' },
                  nome: { type: 'string' },
                  telefone: { type: 'string' },
                  email: { type: 'string' },
                  data_nascimento: { type: 'string', format: 'date' },
                  extrato: { type: 'number' },
                },
              },
            },
          },
        },
      },
    },
  },
  '/clientes/{id}': {
    put: {
      summary: 'Atualiza um cliente',
      parameters: [
        {
          name: 'id',
          in: 'path',
          required: true,
          schema: {
            type: 'integer',
          },
          description: 'ID do cliente para atualização',
        },
      ],
      requestBody: {
        required: true,
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {
                nome: { type: 'string' },
                telefone: { type: 'string' },
                email: { type: 'string' },
                data_nascimento: { type: 'string', format: 'date' },
                extrato: { type: 'number' },
              },
            },
          },
        },
      },
      responses: {
        200: { description: 'Cliente atualizado com sucesso' },
      },
    },
    delete: {
      summary: 'Exclui um cliente',
      parameters: [
        {
          name: 'id',
          in: 'path',
          required: true,
          schema: {
            type: 'integer',
          },
          description: 'ID do cliente para exclusão',
        },
      ],
      responses: {
        200: { description: 'Cliente excluído com sucesso' },
      },
    },
  },
};

module.exports = swaggerDocs;
