const survey = require("../models/survey");

async function read(filter) {
  return await survey.find({createBy:filter});
}

async function readTitle(filter) {
  return await survey.find({title:filter});
}

async function readOne(filter, proj) {
  return await survey.findOne({_id:filter});
}

async function readOneAndPopulate(filter, proj, populate) {
  return await survey.findOne(filter, proj).populate(populate);
}

async function create(req) {
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
module.exports = {read, readOne, readTitle, readOneAndPopulate, create, update, del};