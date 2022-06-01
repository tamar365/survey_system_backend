const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema(
  {
    description: {
      type: String,
      required: true,
    },
    createBy: { 
      type: mongoose.SchemaTypes.ObjectId, 
      ref: "Survey" 
    }
  },
  { timestamps: true }
);

const question = mongoose.model("Question", questionSchema);
module.exports = question;
