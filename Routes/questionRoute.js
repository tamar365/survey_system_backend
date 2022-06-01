const express = require("express");
const router = express.Router();
const questionLogic  = require("../BL/questionLogic");
const authJWT = require("../Middleware/authentication");

router.post('/newquestion', authJWT, async (req,res) => {
    try {
        const newQuestion = await questionLogic.createQuestion(req);
        res.send(newQuestion);
    } catch (err) {
        res.send({code:400, message: err.message || err});
    };
});

router.put('/editquestion', authJWT, async (req,res) => {
    try {
        const editQuestion = await questionLogic.updateQuestion(req.body);
        res.send(editQuestion);
    } catch (err) {
        res.send({code:400, message: err.message || err});
    };
});

router.delete('/deletequestion', authJWT, async (req,res) => {
    try {
        const deleteQuestion = await questionLogic.deleteQuestion(req.body);
        res.send(deleteQuestion);
    } catch (err) {
        res.send({code:400, message: err.message || err});
    };
});

router.get('/', authJWT, async (req,res) => {
    try {
        const questions = await questionLogic.getQuestions(req.body);
        res.send(questions);
    } catch (err) {
        res.send({code:400, message: err.message || err});
    };
});



module.exports = router;