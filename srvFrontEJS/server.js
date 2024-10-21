const express = require('express');
const app = express();
const port = 26000;
app.use(express.static('public'));

// Configuração do EJS
app.set('view engine', 'ejs');

// Definindo os dados das salas de aula (vetores e registros)
let salasDeAula = [
  { salasdeaulaid: 1, descricao: 'Sala 101', localizacao: 'Prédio A', capacidade: 30, removido: true },
  { salasdeaulaid: 2, descricao: 'Sala 202', localizacao: 'Prédio B', capacidade: 25, removido: false },
  { salasdeaulaid: 3, descricao: 'Sala 303', localizacao: 'Prédio C', capacidade: 40, removido: false }
];

// Rota da página manutSalaDeAula
app.get('/manutSalaDeAula', (req, res) => {
  res.render('manutSalaDeAula', { salasDeAula });
});

// Página inicial
app.get('/', (req, res) => {
    res.render('index', { titulo: 'Servidor Front-End com EJS' });
  });

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
