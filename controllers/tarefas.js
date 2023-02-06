const Tarefa = require('../models/tarefas');

const getTarefas = async (req, res) => {
  try {
    const tarefas = await Tarefa.find({});
    res.status(200).send({ tarefas });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};
const createTarefa = async (req, res) => {
  try {
    const tarefa = await Tarefa.create(req.body);
    res.status(201).json({ tarefa });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const getTarefa = async (req, res) => {
  try {
    const { id: tarefaID } = req.params;
    const tarefa = await Tarefa.findOne({ _id: tarefaID });
    if (!tarefa) {
      return res
        .status(404)
        .json({ msg: `Não existe tarefa com ID: ${tarefaID}` });
    }
    res.status(200).json({ tarefa });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const updateTarefa = async (req, res) => {
  try {
    const { id: tarefaID } = req.params;
    const tarefa = await Tarefa.findByIdAndUpdate({ _id: tarefaID }, req.body, {
      new: true,
      runValidators: true,
    });
    if (!tarefa) {
      return res
        .status(404)
        .json({ msg: `Não existe tarefa com ID: ${tarefaID}` });
    }
    res.status(200).json({ id: tarefaID, data: req.body });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const deleteTarefa = async (req, res) => {
  try {
    const { id: tarefaID } = req.params;
    const tarefa = await Tarefa.findOneAndDelete({ _id: tarefaID });
    if (!tarefa) {
      return res
        .status(404)
        .json({ msg: `Não existe tarefa com ID: ${tarefaID}` });
    }
    res.status(200).json({ tarefa });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

module.exports = {
  getTarefas,
  createTarefa,
  getTarefa,
  updateTarefa,
  deleteTarefa,
};
