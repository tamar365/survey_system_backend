const express = require("express");
const router = express.Router();
const answerLogic  = require("../BL/answerLogic");
const authJWT = require("../Middleware/authentication");

router.post('/newanswers', async (req,res) => {
console.log("🚀 ~ file: answerRoute.js ~ line 7 ~ router.post ~ req", req.body)
    
    try {
        const newAnswer = await answerLogic.createAnswer(req.body);
        res.send(newAnswer);
    } catch (err) {
        res.send({code:400, message: err.message || err});
    };
});

router.put('/editanswer', authJWT, async (req,res) => {
    try {
        const editAnswer = await answerLogic.updateAnswer(req.body);
        res.send(editAnswer);
    } catch (err) {
        res.send({code:400, message: err.message || err});
    };
});

router.delete('/deleteanswer', authJWT, async (req,res) => {
    try {
        const deleteAnswer = await answerLogic.deleteAnswer(req.body);
        res.send(deleteAnswer);
    } catch (err) {
        res.send({code:400, message: err.message || err});
    };
});

router.get('/', async (req,res) => {
    try {
        const answers = await answerLogic.getAnswers();
        res.send(answers);
    } catch (err) {
        res.send({code:400, message: err.message || err});
    };
});



module.exports = router;