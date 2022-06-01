const { Survey } = require("./survey.js"); 
const { User } = require("./user.js");
const { Question } = require("./question");
const { Answer } = require("./answer");

const models = { Survey, User, Question, Answer }; 
module.exports = { models }; 