const express = require("express");
const router = express.Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email: email });

  const response = await bcrypt.compare(password, user.password);
  console.log(response);
  res.json({ message: "from login" });
});

router.post("/signup", async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  const hashPassword = await bcrypt.hash(password, 10);

  const user = new User({ email: email, password: hashPassword });
  user.save().then(
    (res) => {
      console.log(res);
    },
    (err) => {
      console.log(err);
    }
  );

  res.status(200).json({ message: "created user" });
});

module.exports = router;
