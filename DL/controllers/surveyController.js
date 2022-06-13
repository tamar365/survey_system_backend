const survey = require("../models/survey");

async function read(filter) {
  console.log("🚀 ~ file: surveyController.js ~ line 4 ~ read ~ filter", filter)
  return await survey.find({createBy:filter});
}

async function readOne(filter, proj) {
  console.log("🚀 ~ file: surveyController.js ~ line 9 ~ readOne ~ filter", filter)
  return await survey.findOne({_id:filter});
}

async function readOneAndPopulate(filter, proj, populate) {
  return await survey.findOne(filter, proj).populate(populate);
}

async function create(req) {
  console.log("🚀 ~ file: surveyController.js ~ line 17 ~ create ~ req", req.body, req.user)
  return await (new survey({title:req.body.title, questions:req.body.questions, createdBy:req.user._id}).save());
}

async function update(id, updatedSurvey) {
  return await survey.findByIdAndUpdate(id, updatedSurvey, { new: true });
}

async function del(id) {
  return await userModel.findByIdAndUpdate(
    id,
    { isActive: false },
    { new: true }
  );
}
module.exports = {read, readOne, readOneAndPopulate, create, update, del};