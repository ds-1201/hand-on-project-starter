const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");

const UserSchema = mongoose.Schema({
  username: {
    type: String,
    required: [true, "Please enter a username"],
    trim: true,
    unique: true,
  },
  email: {
    type: String,
    required: [true, "Please enter a email"],
    trim: true,
    lowercase: true,
    unique: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Email is invalid");
      }
    },
  },
  password: {
    type: String,
    required: [true, "Please enter a password"],
    trim: true,
    minLength: [6, "Please enter a password of at least 6 characters."],
    validate(value) {
      if (value.toLowerCase().includes("password")) {
        throw new Error("Password Should not contain word password");
      }
    },
  },
});

UserSchema.pre("save", async function (next) {
  const salt = await bcrypt.genSalt();
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
