const mongoose = require('mongoose');

const TarefaSchema = new mongoose.Schema({
  nome: { type: String, required: true, trim: true },
  completada: { type: Boolean, default: false },
});

module.exports = mongoose.model('Tarefa', TarefaSchema);
