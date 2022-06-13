const answer = require("../models/answer");

async function read(id) {
  console.log("🚀 ~ file: answerController.js ~ line 4 ~ read ~ id", id)
  return await answer.find({idOfSurvey:id});
}

async function readOne(filter, proj) {
  return await answer.findOne(filter, proj);
}

async function readOneAndPopulate(filter, proj, populate) {
  return await answer.findOne(filter, proj).populate(populate);
}

async function create(newAnswers) {
  return await (new answer({
    firstName:newAnswers.firstName,
    lastName:newAnswers.lastName,
    id:newAnswers.id,
    scaleAnswer:newAnswers.scaleAnswer,
    openAnswer:newAnswers.openAnswer,
    idOfSurvey:newAnswers.idOfSurvey
    })
    .save());
}

async function update(id, updateAnswer) {
  return await answer.findByIdAndUpdate(id, updateAnswer, { new: true });
}

async function del(id) {
  return await answer.findByIdAndUpdate(
    id,
    { isActive: false },
    { new: true }
  );
}
module.exports = {read, readOne, readOneAndPopulate, create, update, del};