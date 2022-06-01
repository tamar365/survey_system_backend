const mongoose = require("mongoose");

const surveySchema = new mongoose.Schema(
  {
    description: {
      type: String,
      required: true,
    },
    createBy: { 
      type: mongoose.SchemaTypes.ObjectId, 
      ref: "User" 
    },
    questions:{
        type: Array,
        createBy: {type: mongoose.SchemaTypes.ObjectId, ref: "User"}
    },
    answers:{
        type: Array,
        createBy: {type: mongoose.SchemaTypes.ObjectId, ref: "Answer"},
    },
    linkToSurvey: {
        type: String, 
        required: true
    },     
  },
  { timestamps: true }
);

const survey = mongoose.model("Survey", surveySchema);
module.exports = survey;