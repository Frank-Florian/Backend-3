const { Router } = require('express');
const { createTodos, getToDoUsers, updateStatusTodo, deleteTodos, createPivot } = require('../controllers/todos.controllers');
const { createSubcategories } = require('../controllers/subcategories.controllers');

const router = Router();

//createTodos
router.post('/todos', createTodos);

//updateStatusTodo
router.put('/todos/:userId', updateStatusTodo)

//deleteTodos
router.delete('/todos/:id', deleteTodos);

module.exports = router;