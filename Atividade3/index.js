const express = require("express");
const swaggerUi = require("swagger-ui-express");
const swaggerJsdoc = require("swagger-jsdoc");

const app = express();
const PORT = 3000;

app.use(express.json());

// ── Configuração do Swagger ──────────────────────────────────────────────────
const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "API de Alunos",
      version: "1.0.0",
      description: "API REST de exemplo para a disciplina de Sistemas Web"
    },
    servers: [{ url: "http://localhost:3000" }]
  },
  apis: ["./index.js"]
};

const swaggerDocs = swaggerJsdoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// ── "Banco de dados" em memória ──────────────────────────────────────────────
let alunos = [
  { id: 1, nome: "Ana Souza",   curso: "Sistemas Web"  },
  { id: 2, nome: "Bruno Lima",  curso: "Banco de Dados" }
];

// ── Rotas ────────────────────────────────────────────────────────────────────

/**
 * @swagger
 * /alunos:
 *   get:
 *     summary: Lista todos os alunos
 *     responses:
 *       200:
 *         description: Lista de alunos retornada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:   { type: integer }
 *                   nome: { type: string }
 *                   curso: { type: string }
 */
app.get("/alunos", (req, res) => {
  res.json(alunos);
});

/**
 * @swagger
 * /alunos/{id}:
 *   get:
 *     summary: Busca um aluno pelo id
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do aluno
 *     responses:
 *       200:
 *         description: Aluno encontrado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:    { type: integer }
 *                 nome:  { type: string }
 *                 curso: { type: string }
 *       404:
 *         description: Aluno não encontrado
 */
app.get("/alunos/:id", (req, res) => {
  const aluno = alunos.find(a => a.id === Number(req.params.id));
  if (!aluno) return res.status(404).json({ mensagem: "Aluno não encontrado" });
  res.json(aluno);
});

/**
 * @swagger
 * /alunos:
 *   post:
 *     summary: Cadastra um novo aluno
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [nome, curso]
 *             properties:
 *               nome:  { type: string, example: "Carlos Mendes" }
 *               curso: { type: string, example: "Redes de Computadores" }
 *     responses:
 *       201:
 *         description: Aluno criado com sucesso
 *       400:
 *         description: Dados inválidos
 */
app.post("/alunos", (req, res) => {
  const { nome, curso } = req.body;

  if (!nome || !curso) {
    return res.status(400).json({ mensagem: "Os campos 'nome' e 'curso' são obrigatórios." });
  }

  const novoAluno = {
    id: alunos.length ? alunos[alunos.length - 1].id + 1 : 1,
    nome,
    curso
  };
  alunos.push(novoAluno);
  res.status(201).json(novoAluno);
});

/**
 * @swagger
 * /alunos/{id}:
 *   put:
 *     summary: Atualiza um aluno existente
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do aluno a ser atualizado
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome:  { type: string, example: "Ana Souza Atualizada" }
 *               curso: { type: string, example: "Engenharia de Software" }
 *     responses:
 *       200:
 *         description: Aluno atualizado com sucesso
 *       404:
 *         description: Aluno não encontrado
 */
app.put("/alunos/:id", (req, res) => {
  const aluno = alunos.find(a => a.id === Number(req.params.id));
  if (!aluno) return res.status(404).json({ mensagem: "Aluno não encontrado" });

  const { nome, curso } = req.body;
  aluno.nome  = nome  ?? aluno.nome;
  aluno.curso = curso ?? aluno.curso;
  res.json(aluno);
});

/**
 * @swagger
 * /alunos/{id}:
 *   delete:
 *     summary: Remove um aluno
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do aluno a ser removido
 *     responses:
 *       204:
 *         description: Aluno removido com sucesso
 *       404:
 *         description: Aluno não encontrado
 */
app.delete("/alunos/:id", (req, res) => {
  const indice = alunos.findIndex(a => a.id === Number(req.params.id));
  if (indice === -1) return res.status(404).json({ mensagem: "Aluno não encontrado" });
  alunos.splice(indice, 1);
  res.status(204).send();
});

// ── Inicia o servidor ────────────────────────────────────────────────────────
app.listen(PORT, () => {
  console.log(`✅  Servidor rodando em http://localhost:${PORT}`);
  console.log(`📄  Documentação Swagger em http://localhost:${PORT}/api-docs`);
});
