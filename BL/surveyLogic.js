const survey = require("../DL/controllers/surveyController");

async function getSurveys(req) {
  return await survey.read(req);
}

async function getSurvey(req) {
  return await survey.readOne(req);
}

async function getSurveysByFilter(req) {
  return await survey.readOneAndPopulate(req);
}

async function createSurvey(req) {
  return await survey.create(req);
}

async function updateSurvey(req) {
  return await survey.update(req);
}

async function deleteSurvey(req) {
  return await survey.del(req);
}



module.exports = { getSurveys, getSurvey, getSurveysByFilter, createSurvey, updateSurvey, deleteSurvey };