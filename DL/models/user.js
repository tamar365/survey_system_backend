const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "can't be blank"],
      // match: [/^[a-zA-Z0-9]+$/, "is invalid"],
      unique: true,
    },
    password: {
      type: String,
      // lowercase: true,
      // required: [true, "can't be blank"],
      // match: [/.+\@.+\..+/, 'Please fill a valid email address'],
    
      unique: true,
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