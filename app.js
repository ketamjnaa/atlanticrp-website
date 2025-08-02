const express = require('express');
const morgan = require('morgan');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const port = 3000;

// Middleware
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Servire file statici
app.use(express.static('public'));

// Reindirizza / a index.html
app.get('/', (req, res) => {
  res.redirect('/index.html');
});

app.get('/staff', (req, res) => {
  res.redirect('/staff.html');
});
app.get('/vota', (req, res) => {
  res.redirect('/vota.html');
});

app.get('/regolamento', (req, res) => {
  res.redirect('/regolamento.html');
});

app.get('/termini-di-servizio', (req, res) => {
  res.redirect('/tos.html');
});

app.get('/informativa-privacy', (req, res) => {
  res.redirect('/privacy.html');
});

app.get('/politica-rimborsi', (req, res) => {
  res.redirect('/rimborsi.html');
});

// Esempio route che simula un errore 503
app.get('/simulate503', (req, res, next) => {
  const err = new Error('Servizio momentaneamente non disponibile');
  err.status = 503;
  next(err);
});

// Gestione errori 503
app.use((err, req, res, next) => {
  if (err.status === 503) {
    res.status(503).sendFile(__dirname + '/public/503.html');
  } else {
    next(err);
  }
});

// Gestione errori 404 (dopo tutte le route)
app.use((req, res) => {
  res.status(404).sendFile(__dirname + '/public/404.html');
});

app.listen(port, () => {
  console.log(`Server attivo su http://localhost:${port}`);
});
