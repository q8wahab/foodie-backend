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

module.exports = { signup };
