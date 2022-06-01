const mongoose = require("mongoose");

const validateEmail = function(email) {
  const reg= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return reg.test(email)
};

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      // lowercase: true,
      required: [true, "can't be blank"],
      // match: [/^[a-zA-Z0-9]+$/, "is invalid"],
      unique: true,
    },
    password: {
      type: String,
      // lowercase: true,
      required: [true, "can't be blank"],
      // match: [/\S+@\S+\.\S+/, "is invalid"],
      // validate: [validateEmail, 'Please fill a valid email address'],
      // match: [/.+\@.+\..+/, 'Please fill a valid email address'],
    
      // unique: true,
      // uniqueCaseInsensitive: true,
    },
    // isAdmin: {
    //     type:Boolean,
    //     default: false
    // }
  },
  { timestamps: true }
);

const user = mongoose.model("User", userSchema);
module.exports = user;