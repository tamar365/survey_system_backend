const express = require("express");
const router = express.Router();
const surveyLogic  = require("../BL/surveyLogic");
const authJWT = require("../Middleware/authentication");

router.post('/newsurvey', authJWT, async (req,res) => {
    try {
        const newSurvey = await surveyLogic.createSurvey(req,res);
        res.send(newSurvey);
    } catch (err) {
        res.send({code:400, message: err.message || err});
    };
});

router.put('/editsurvey', authJWT, async (req,res) => {
    try {
        const editSurvey = await surveyLogic.updateSurvey(req.body);
        res.send(editSurvey);
    } catch (err) {
        res.send({code:400, message: err.message || err});
    };
});

router.delete('/deletesurvey', authJWT, async (req,res) => {
    try {
        const deleteSurvey = await surveyLogic.deleteSurvey(req.body);
        res.send(deleteSurvey);
    } catch (err) {
        res.send({code:400, message: err.message || err});
    };
});

router.get('/', authJWT, async (req,res) => {
    try {
        const surveys = await surveyLogic.getSurveys(req.user);
        res.send(surveys);
    } catch (err) {
        res.send({code:400, message: err.message || err});
    };
});

router.get('/surveyforuser/:idOfSurvey', async (req,res) => {    
    try {
        const survey = await surveyLogic.getSurvey(req.params.idOfSurvey);
        res.send(survey);
    } catch (err) {
        res.send({code:400, message: err.message || err});
    };
});

module.exports = router;