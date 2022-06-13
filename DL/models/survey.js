const mongoose = require("mongoose");

const surveySchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    createdBy: { 
      type: mongoose.SchemaTypes.ObjectId, 
      ref: "User",
      required: true, 
    },
    questions:{
        type: Array,
        // createdBy: {type: mongoose.SchemaTypes.ObjectId, ref: "Question"}
    },
    answers: [{
      type: mongoose.SchemaTypes.ObjectId,
      ref: "Answer"
    }]
    // answers:{
    //     type: Array,
    //     createdBy: {type: mongoose.SchemaTypes.ObjectId, ref: "Survey"},
    // },
    // linkToSurvey: {
    //     type: String, 
    //     // required: true
    // },     
  },
  { timestamps: true }
);

const survey = mongoose.model("Survey", surveySchema);
module.exports = survey;