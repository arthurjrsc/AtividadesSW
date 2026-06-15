# API de Alunos

API REST construída com Express, implementando o CRUD completo (GET, POST, PUT, DELETE) e documentação interativa com Swagger.

## Como executar

```bash
npm install
npm start
```

O servidor iniciará em `http://localhost:3000`.

## Documentação Swagger

Acesse: `http://localhost:3000/api-docs`

## Rotas

| Método | Rota          | Descrição                          |
|--------|---------------|-------------------------------------|
| GET    | /alunos       | Lista todos os alunos               |
| GET    | /alunos/:id   | Busca um aluno pelo id              |
| POST   | /alunos       | Cadastra um novo aluno              |
| PUT    | /alunos/:id   | Atualiza um aluno existente         |
| DELETE | /alunos/:id   | Remove um aluno                     |

## Exemplo de corpo (POST/PUT)

```json
{
  "nome": "Carlos Pereira",
  "curso": "Sistemas de Informação"
}
```
