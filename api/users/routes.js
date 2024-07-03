const express = require("express");
const router = express.Router();

const {
  signup,
  signin,
  getUserProfile,
  getAllUsers,
} = require("./controllers");
const passport = require("passport");

router.post("/signup", signup);
router.post(
  "/signin",
  passport.authenticate("local", { session: false }),
  signin
);
router.get(
  "/me/:id",
  passport.authenticate("jwt", { session: false }),
  getUserProfile
);

router.get("/users", getAllUsers);

module.exports = router;
