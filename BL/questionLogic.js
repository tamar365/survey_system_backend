const question = require("../DL/controllers/questionController");

async function getQuestions(req) {
  return await question.read(req);
}

async function getQuestion(req) {
  return await question.readOne(req);
}

async function getQuestionsByFilter(req) {
  return await question.readOneAndPopulate(req);
}

async function createQuestion(req) {
  return await question.create(req);
}

async function updateQuestion(req) {
  return await answer.update(req);
}

async function deleteQuestion(req) {
  return await question.del(req);
}

module.exports = { getQuestions, getQuestion, getQuestionsByFilter, createQuestion, updateQuestion, deleteQuestion };