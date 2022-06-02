const survey = require("../models/survey");

async function read(filter, proj) {
  return await survey.find(filter, proj);
}

async function readOne(filter, proj) {
  return await survey.findOne(filter, proj);
}

async function readOneAndPopulate(filter, proj, populate) {
  return await survey.findOne(filter, proj).populate(populate);
}

async function create(newSurvey) {
  return await survey.create(newSurvey);
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