const answer = require("../models/answer");

async function read() {
  return await answer.find();
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
    openAnswer:newAnswers.openAnswer
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