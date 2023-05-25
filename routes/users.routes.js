const { Router } = require('express');
const { createUser, getUserToDoCategory } = require('../controllers/users.controllers');

const router = Router();

// createUser
router.post('/users', createUser);

//getUserToDoCategory
router.get('/users/:id', getUserToDoCategory)

module.exports = router;


