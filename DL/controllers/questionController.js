const question = require("../models/question");

async function read(filter, proj) {
  return await question.find(filter, proj);
}

async function readOne(filter, proj) {
  return await question.findOne(filter, proj);
}

async function readOneAndPopulate(filter, proj, populate) {
  return await question.findOne(filter, proj).populate(populate);
}

async function create(newQuestion) {
  return await question.create(newQuestion);
}

async function update(id, updatedQuestion) {
  return await question.findByIdAndUpdate(id, updatedQuestion, { new: true });
}

async function del(id) {
  return await question.findByIdAndUpdate(
    id,
    { isActive: false },
    { new: true }
  );
}
module.exports = {read, readOne, readOneAndPopulate, create, update, del};