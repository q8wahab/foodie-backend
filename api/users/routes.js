const express = require("express");
const router = express.Router();

const { signup } = require("./controllers");
const passport = require("passport");

router.post("/signup", signup);

module.exports = router;
