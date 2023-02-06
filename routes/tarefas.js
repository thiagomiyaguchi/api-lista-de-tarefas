const express = require('express');
const router = express.Router();
const {
  getTarefas,
  createTarefa,
  getTarefa,
  updateTarefa,
  deleteTarefa,
} = require('../controllers/tarefas');

router.route('/').get(getTarefas).post(createTarefa);
router.route('/:id').get(getTarefa).patch(updateTarefa).delete(deleteTarefa);

module.exports = router;
