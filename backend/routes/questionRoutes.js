const express = require('express');
const router = express.Router();
const { createQuestion } = require('../controllers/questionController');

// POST endpoint to create a question
router.post('/questions', createQuestion);

module.exports = router;
