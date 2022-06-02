const answer = require("../DL/controllers/answerController");

async function getAnswers() {
  return await answer.read();
}

async function getAnswer(input) {
  return await answer.readOne(req);
}

async function getAnswersByFilter(input) {
  return await answer.readOneAndPopulate(input);
}

async function createAnswer(input) {
  return await answer.create(input);
}

async function updateAnswer(input) {
  return await answer.update(input);
}

async function deleteAnswer(input) {
  return await answer.del(input);
}


module.exports = { getAnswers, getAnswer, getAnswersByFilter, createAnswer, updateAnswer, deleteAnswer };