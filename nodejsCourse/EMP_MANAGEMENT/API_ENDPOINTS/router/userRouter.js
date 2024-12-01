const express = require('express');
const router = express.Router();

const { addEmp } = require('../controller/userController');

// POST Endpoint: Add an Employee
router.post('/add', addEmp);

module.exports = router;
