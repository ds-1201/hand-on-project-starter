const User = require("./../models/User");
const handleErrors = require("./../utils/errors");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

// constants
// const MAXAGE = process.env.JWT_MAXAGE;
const MAXAGE = 24 * 60 * 60;

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: MAXAGE,
  });
};

module.exports.signup_get = (req, res) => {
  return res.send("Sign Up get");
};

module.exports.signup_post = async (req, res) => {
  const user = new User(req.body);
  try {
    const res1 = await user.save();
    const token = generateToken(res1._id);
    // res.cookie("api_market_token", token, {
    //   httpOnly: true,
    //   maxAge: +MAXAGE * 1000,
    // });
    res.status(201).send({ user: res1._id, token: token });
  } catch (e) {
    const errors = handleErrors(e);
    res.status(400).send({ errors, message: e.message });
  }
};
module.exports.login_get = (req, res) => {
  return res.send("Sign Up get");
};
module.exports.login_post = (req, res) => {
  return res.send("Sign Up get");
};
