

const express = require("express");
const {addMultiSurveys, getByInterSection, update, getSummary} = require("../controllers/trafficController");

const router = express.Router();

router.get('/hi',(req,res)=>{
    res.status(200).end("Hello")
})
router.post('/', addMultiSurveys);
router.get('/:interSectionId', getByInterSection);
router.put('/:id', update)
router.get('/', getSummary)

module.exports = router;