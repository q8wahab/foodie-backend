const express = require("express");
const router = express.Router();

const {
  signup,
  signin,
  getUserProfile,
  getAllUsers,
  updateUser,
} = require("./controllers");
const passport = require("passport");
const upload = require("../../middlewares/multer");

router.post("/signup", upload.single("image"), signup);
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

router.get("/users", getAllUsers);
router.post(
  "/updateUser",
  passport.authenticate("jwt", { session: false }),
  upload.single("image"),
  updateUser
);

module.exports = router;
