const express = require('express');
const router = express.Router();
const { addEmp, list, updatestud , delStud, manyStudInsert} = require('../controller/userController.js');

// POST Endpoint: Add an Employee
router.post('/add', addEmp);
router.get('/list', list);
router.put('/update/:email', updatestud);
router.delete('/delete/:email', delStud);
router.post('/addmany', manyStudInsert)

module.exports = router;
