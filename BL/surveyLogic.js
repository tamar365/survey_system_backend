const survey = require("../DL/controllers/surveyController");

async function getSurveys(user) {
  return await survey.read(user._id);
}

async function getSurvey(id) {  
  return await survey.readOne(id);
}

async function getSurveysByFilter(req) {
  return await survey.readOneAndPopulate(req);
}

async function createSurvey(req,res) {
  const existTitle = await survey.readTitle(req.body.title)
  if(existTitle?.length>0) {
    res.status(400).json({ message: "כותרת הסקר כבר קיימת במערכת. יש לבחור כותרת אחרת." });
  }else{
    const newSurvey = await survey.create(req);
    return newSurvey;
  }
}

async function updateSurvey(req) {
  return await survey.update(req);
}

async function deleteSurvey(req) {
  return await survey.del(req);
}

module.exports = { getSurveys, getSurvey, getSurveysByFilter, createSurvey, updateSurvey, deleteSurvey };