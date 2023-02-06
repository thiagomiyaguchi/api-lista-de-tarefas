const MONGO_URI =
  'mongodb+srv://admin:123@nodeexpress.biq4ehz.mongodb.net/ListaDeTarefas?retryWrites=true&w=majority';
const express = require('express');
const app = express();
const port = 5000;
const tarefas = require('./routes/tarefas');
const connectDB = require('./db/connect');
require('dotenv').config();

////REMOVER!!!!!!!!!!
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Methods',
    'GET,HEAD,OPTIONS,POST,PUT,DELETE'
  );
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  );
  next();
});
////////////////////////////////

app.use(express.static('./public'));
app.use(express.json());

app.get('/teste', (req, res) => {
  res.send('Oi');
});

app.use('/api/v1/tarefas', tarefas);

const start = async () => {
  try {
    // await connectDB(process.env.MONGO_URI);
    await connectDB(MONGO_URI);
    app.listen(port, console.log(`Servidor na porta: ${port}`));
  } catch (error) {
    console.log(error);
  }
};

start();
