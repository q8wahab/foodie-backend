const User = require("../../models/User");
const bcrypt = require(`bcrypt`);
const jwt = require(`jsonwebtoken`);

const generateToken = (user) => {
  const payload = {
    _id: user._id,
    username: user.username,
  };

  const token = jwt.sign(payload, process.env.JWT_SECRET);

  return token;
};
const signup = async (req, res, next) => {
  try {
    //hash the password

    console.log("body", req.body);
    const salt = await bcrypt.genSalt(10);
    const password = await bcrypt.hash(req.body.password, salt);
    req.body.password = password;
    const newUser = await User.create(req.body);
    const token = generateToken(newUser);
    res.status(201).json(token);
  } catch (err) {
    next(err);
  }
};
const signin = async (req, res, next) => {
  try {
    const user = req.user;
    const token = generateToken(user);
    return res.status(200).json({ token });
  } catch (error) {
    next(error);
  }
};

const getUserProfile = async (req, res, next) => {
  try {
    const userId = req.user._id;
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json({ username: user.username });
  } catch (err) {
    next(err);
  }
};

const getAllUsers = async (req, res, next) => {
  try {
    const users = await User.find();
    res.status(201).json(users);
  } catch (err) {
    next(err);
  }
};

module.exports = { signup, signin, getUserProfile, getAllUsers };
