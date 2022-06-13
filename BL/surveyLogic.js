const survey = require("../DL/controllers/surveyController");

async function getSurveys(user) {
  console.log("🚀 ~ file: surveyLogic.js ~ line 4 ~ getSurveys ~ user", user._id)
  return await survey.read(user._id);
}

async function getSurvey(id) {
console.log("🚀 ~ file: surveyLogic.js ~ line 9 ~ getSurvey ~ id", id)
  
  return await survey.readOne(id);
}

async function getSurveysByFilter(req) {
  return await survey.readOneAndPopulate(req);
}

async function createSurvey(req) {
  console.log("🚀 ~ file: surveyLogic.js ~ line 17 ~ createSurvey ~ req", req.body)
  const newSurvey = await survey.create(req);
  console.log("🚀 ~ file: surveyLogic.js ~ line 19 ~ createSurvey ~ newSurvey", newSurvey)
  // newSurvey.questions.push(req.body.data._id)
  // newSurvey.save();
  return newSurvey;
}

async function updateSurvey(req) {
  return await survey.update(req);
}

async function deleteSurvey(req) {
  return await survey.del(req);
}



module.exports = { getSurveys, getSurvey, getSurveysByFilter, createSurvey, updateSurvey, deleteSurvey };