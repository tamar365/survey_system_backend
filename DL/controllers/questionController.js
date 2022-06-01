// const question = require('../models/question');

// async function read(filter, proj) {
//     return await question.find(filter, proj)
// }

// async function readOne(idQuestion) {
//     return await question.findOne({id: idQuestion})
// }

// async function create(req) {
//     return await new question(
//         {
//             question: req.body.qustion,
//             id: req.body.id,
//         })
//         .save();
// }

// async function update(id, updateQuestion) {
//     return await question.find({_id:id}).update(id, updateQuestion)
// }

// async function del(idQuestion) {
//     return await question.deleteOne({_id: idQuestion})
// }

// module.exports = {read, readOne, create, update, del};


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