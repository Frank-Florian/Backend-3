const { Router } = require('express');
const { createCategories } = require('../controllers/categories.controllers');

const router = Router();

// categories
router.post('/categories', createCategories);


module.exports = router;