const express = require("express");
const router = express.Router();

const { signup, signin, getUserProfile } = require("./controllers");
const passport = require("passport");

router.post("/signup", signup);
router.post(
  "/signin",
  passport.authenticate("local", { session: false }),
  signin
);
router.get(
  "/me",
  passport.authenticate("jwt", { session: false }),
  getUserProfile
);

module.exports = router;
