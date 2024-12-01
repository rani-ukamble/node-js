// const express = require("express");

// // Correct the typo to `createUser` instead of `creteUser`
// const { home, createUser , getUsers, deleteUsers, editUser} = require("../controllers/userController.js");  // Import `createUser` correctly

// const router = express.Router();

// router.get('/', home);

// router.post('/createUser', createUser);  // Use `createUser` in the route

// router.get('/getUsers', getUsers)

// router.delete('/deleteUsers/:name', deleteUsers)

// router.put('/editUser/:id', editUser) 

// module.exports = router;


const express = require("express");

const {add, search, update, deleteRec} = require('../controllers/userController.js');

const router = express.Router();

router.post('/add', add); 
router.get('/search/:id', search);
router.put('/update/:id', update); 
router.put('/delete/:id', deleteRec); 

module.exports = router;

