const express = require("express")

const {dashboard, createEmp, getEmp, updateEmp, loginEmp, deleteAllEmpByName} = require('../controllers/userController.js')

const router = express.Router();

router.get('/', dashboard);

router.post('/add', createEmp);

router.get('/list', getEmp);

router.put('/update/:id', updateEmp)

router.post('/login', loginEmp)

router.delete('/delete/:name', deleteAllEmpByName);

module.exports = router;