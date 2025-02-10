const express = require('express');

const { getStudentInfo } = require('../controllers/studentController.js');
const router = express.Router();

router.get("/student-info", getStudentInfo);

module.exports = router;
