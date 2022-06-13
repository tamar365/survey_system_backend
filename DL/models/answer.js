const mongoose = require("mongoose");

const answerSchema = new mongoose.Schema(
     {
       firstName: String,
       lastName: String,
       id: {
         type: String,
         maxlength: 9,
       },
       scaleAnswer: Number,
       openAnswer: String,
       idOfSurvey: String
     }


  // {
  //   description: {
  //     type: String,
  //     required: true,
  //   },
  //   createBy: { 
  //     type: mongoose.SchemaTypes.ObjectId, 
  //     ref: "Survey" 
  //   },
  //   createBy: { 
  //     type: mongoose.SchemaTypes.ObjectId, 
  //     ref: "User" 
  //   }
  // },
  // { timestamps: true }


);

const answer = mongoose.model("Answer", answerSchema);
module.exports = answer;