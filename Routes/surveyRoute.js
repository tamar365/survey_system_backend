const express = require("express");
const router = express.Router();
const surveyLogic  = require("../BL/surveyLogic");
const authJWT = require("../Middleware/authentication");

router.post('/newsurvey', authJWT, async (req,res) => {
    console.log("🚀 ~ file: surveyRoute.js ~ line 7 ~ router.post ~ req", req.body)
    try {
        const newSurvey = await surveyLogic.createSurvey(req);
        console.log("🚀 ~ file: surveyRoute.js ~ line 10 ~ router.post ~ newSurvey", newSurvey)
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
    console.log("🚀 ~ file: surveyRoute.js ~ line 35 ~ router.get ~ req", req.user)
    try {
        const surveys = await surveyLogic.getSurveys(req.user);
        console.log("🚀 ~ file: surveyRoute.js ~ line 39 ~ router.get ~ surveys", surveys)
        res.send(surveys);
    } catch (err) {
        res.send({code:400, message: err.message || err});
    };
});

router.get('/surveyforuser/:idOfSurvey', async (req,res) => {
console.log("🚀 ~ file: surveyRoute.js ~ line 47 ~ router.get ~ req", req.params.idOfSurvey)
    
    try {
        const survey = await surveyLogic.getSurvey(req.params.idOfSurvey);
        console.log("🚀 ~ file: surveyRoute.js ~ line 50 ~ router.get ~ survey", survey)
        res.send(survey);
    } catch (err) {
        res.send({code:400, message: err.message || err});
    };
});



module.exports = router;