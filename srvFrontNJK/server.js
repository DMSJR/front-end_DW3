const express = require('express');
const nunjucks = require('nunjucks');

const app = express();
const port = 25000;

// Configuração do Nunjucks
nunjucks.configure('views', {
  autoescape: true,
  express: app
});
let salasDeAula = [
  { salasdeaulaid: 1, descricao: 'Sala 101', localizacao: 'Prédio A', capacidade: 30, removido: false },
  { salasdeaulaid: 2, descricao: 'Sala 202', localizacao: 'Prédio B', capacidade: 25, removido: false },
  { salasdeaulaid: 3, descricao: 'Sala 303', localizacao: 'Prédio C', capacidade: 40, removido: false }
];
// Middleware para servir arquivos estáticos
app.use(express.static('public'));

// Rota principal
app.get('/', (req, res) => {
  res.render('index.njk', { titulo: 'Meu Servidor com Nunjucks' });
});
app.get('/manutSalaDeAula', (req, res) => {
  res.render('manutSalaDeAula.njk', { salasDeAula });
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});